import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ReflectiveSphereRings Component
 * 
 * Renders a high-fidelity 3D scene using Three.js:
 * 1. A realistic Moon sphere with displacement maps and PBR materials.
 * 2. An invisible ring system carrying orbiting drones.
 * 3. Drones that fire "scanning lasers" directly at the surface of the moon using shortest-path logic.
 * 4. A holographic "Scan Shell" that overlays the moon, visualizing scan data additively.
 * 
 * Optimized for performance using visibility checks and efficient rendering.
 */
const ReflectiveSphereRings: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const isVisible = useRef<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- 1. SETUP ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: 'high-performance'
    });
    // Limit pixel ratio to 2 to avoid excessive load on high-DPI screens
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 4.5);
    camera.lookAt(0, 0, 0);

    // --- 2. LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); 
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0); 
    keyLight.position.set(5, 3, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xccccff, 0.5); 
    rimLight.position.set(-5, 2, -5);
    scene.add(rimLight);

    // --- 3. OBJECTS ---

    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // A) Central Sphere (Moon)
    const textureLoader = new THREE.TextureLoader();
    // Load texture
    const moonMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg');
    
    const sphereGeo = new THREE.SphereGeometry(0.85, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
        map: moonMap,
        bumpMap: moonMap, // Reuse texture for bump
        bumpScale: 0.015,
        roughness: 0.9, 
        metalness: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    earthGroup.add(sphere);

    // B) Scan Overlay Shell
    const scanGeo = new THREE.SphereGeometry(0.855, 64, 64);
    
    const scanUniforms = {
        uScanCenters: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
        uScanStartColors: { value: [new THREE.Color(), new THREE.Color(), new THREE.Color()] },
        uScanEndColors: { value: [new THREE.Color(), new THREE.Color(), new THREE.Color()] },
        uScanRadii: { value: [0, 0, 0] },
        uScanOpacities: { value: [0, 0, 0] } 
    };

    const scanMat = new THREE.ShaderMaterial({
        uniforms: scanUniforms,
        transparent: true,
        depthWrite: false, 
        blending: THREE.AdditiveBlending, 
        vertexShader: `
            varying vec3 vPos;
            void main() {
                vPos = normalize(position); 
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 uScanCenters[3];
            uniform vec3 uScanStartColors[3];
            uniform vec3 uScanEndColors[3];
            uniform float uScanRadii[3];
            uniform float uScanOpacities[3];
            varying vec3 vPos;

            void main() {
                vec4 colorAccum = vec4(0.0);
                
                for(int i=0; i<3; i++) {
                    if(uScanRadii[i] > 0.0 && uScanOpacities[i] > 0.0) {
                        float dist = acos(dot(vPos, normalize(uScanCenters[i])));
                        
                        if(dist < uScanRadii[i]) {
                             float alpha = smoothstep(uScanRadii[i], uScanRadii[i] - 0.05, dist);
                             float t = clamp(dist / uScanRadii[i], 0.0, 1.0);
                             vec3 gradColor = mix(uScanStartColors[i], uScanEndColors[i], t);
                             vec4 scanColor = vec4(gradColor, uScanOpacities[i] * alpha);
                             colorAccum = max(colorAccum, scanColor);
                        }
                    }
                }
                
                if(colorAccum.a < 0.01) discard;
                gl_FragColor = colorAccum;
            }
        `
    });

    const scanShell = new THREE.Mesh(scanGeo, scanMat);
    earthGroup.add(scanShell);

    // C) RGB Rings
    const ringConfig = [
        { color: 0xFF2A2A, radius: 1.05 },
        { color: 0x3CFF3C, radius: 1.25 },
        { color: 0x2A6BFF, radius: 1.45 }
    ];

    // Minimal RingState needed for animation loop
    type RingState = {
        group: THREE.Group;
        drone: THREE.Mesh;
        laser: THREE.Line;
        index: number;
        timeOffset: number;
        state: 'IDLE' | 'AIMING' | 'SCANNING' | 'FADING';
        targetLocal: THREE.Vector3;
        timer: number;
        scanRadius: number;
        currentOpacity: number;
        flash: number;
    };

    const ringsData: RingState[] = [];

    // Shared Geometries to save memory
    const sharedDroneGeo = new THREE.SphereGeometry(0.035, 16, 16);
    // Dynamic buffer geo for lines
    const sharedLineMat = new THREE.LineBasicMaterial({ 
        transparent: true, opacity: 0.8, linewidth: 2, blending: THREE.AdditiveBlending 
    });

    ringConfig.forEach((config, i) => {
        const group = new THREE.Group();
        group.rotation.set(Math.random()*Math.PI*2, Math.random()*Math.PI*2, Math.random()*Math.PI*2);
        scene.add(group);

        const droneMat = new THREE.MeshBasicMaterial({ color: config.color });
        const drone = new THREE.Mesh(sharedDroneGeo, droneMat);
        drone.position.set(config.radius, 0, 0);
        group.add(drone);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        const lineMat = sharedLineMat.clone();
        lineMat.color.setHex(config.color);
        const laser = new THREE.Line(lineGeo, lineMat);
        laser.visible = false; 
        scene.add(laser); 

        scanUniforms.uScanStartColors.value[i] = new THREE.Color(config.color);
        scanUniforms.uScanOpacities.value[i] = 0.0;

        ringsData.push({
            group, drone, laser, index: i,
            timeOffset: Math.random() * 1000,
            state: 'IDLE',
            targetLocal: new THREE.Vector3(),
            timer: 0,
            scanRadius: 0,
            currentOpacity: 0,
            flash: 0
        });
    });

    // --- 4. ANIMATION ---
    const clock = new THREE.Clock();
    const AIM_DURATION = 0.6; 
    const SCAN_GROWTH_SPEED = 0.4;
    const SCAN_FADE_SPEED = 0.3;

    const animate = () => {
        requestRef.current = requestAnimationFrame(animate);
        
        // Skip rendering if not visible (tab background)
        if (!isVisible.current) return;

        const delta = clock.getDelta();
        const elapsed = clock.getElapsedTime();

        earthGroup.rotation.y += 0.02 * delta; 

        ringsData.forEach(r => {
            const t = elapsed + r.timeOffset;
            const tumbleX = Math.sin(t * 0.1) * 0.2; 
            const tumbleY = Math.cos(t * 0.13) * 0.2; 
            const tumbleZ = Math.sin(t * 0.07) * 0.1;

            r.group.rotation.x += tumbleX * delta;
            r.group.rotation.y += tumbleY * delta;
            
            const orbitSpeed = 0.4 + Math.sin(t * 0.2) * 0.2;
            r.group.rotation.z += (orbitSpeed + tumbleZ) * delta;

            if (r.flash > 0) {
                r.flash -= delta * 4.0;
                if (r.flash < 0) r.flash = 0;
                const baseC = new THREE.Color(ringConfig[r.index].color);
                const whiteC = new THREE.Color(0xffffff);
                (r.drone.material as THREE.MeshBasicMaterial).color.copy(baseC).lerp(whiteC, r.flash);
                r.drone.scale.setScalar(1.0 + r.flash * 1.5);
            }

            if (r.state === 'IDLE') {
                if (Math.random() < 0.003) { 
                    r.state = 'AIMING';
                    r.timer = 0;
                    r.flash = 1.0;
                    const droneWorldPos = new THREE.Vector3();
                    r.drone.getWorldPosition(droneWorldPos);
                    const earthInverse = earthGroup.matrixWorld.clone().invert();
                    const localDir = droneWorldPos.clone().applyMatrix4(earthInverse).normalize();
                    r.targetLocal.copy(localDir);
                    scanUniforms.uScanEndColors.value[r.index] = new THREE.Color().setHSL(Math.random(), 1.0, 0.5);
                    scanUniforms.uScanCenters.value[r.index].copy(r.targetLocal);
                    r.laser.visible = true;
                }
            } else if (r.state === 'AIMING') {
                r.timer += delta;
                const droneWorldPos = new THREE.Vector3();
                r.drone.getWorldPosition(droneWorldPos);
                const targetWorldPos = r.targetLocal.clone().applyMatrix4(earthGroup.matrixWorld);
                targetWorldPos.normalize().multiplyScalar(0.85);

                const positions = new Float32Array([
                    droneWorldPos.x, droneWorldPos.y, droneWorldPos.z,
                    targetWorldPos.x, targetWorldPos.y, targetWorldPos.z
                ]);
                r.laser.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                r.laser.geometry.attributes.position.needsUpdate = true;

                if (r.timer > AIM_DURATION) {
                    r.state = 'SCANNING';
                    r.laser.visible = false;
                    r.scanRadius = 0;
                    r.currentOpacity = 0.95; 
                }
            } else if (r.state === 'SCANNING') {
                r.scanRadius += delta * SCAN_GROWTH_SPEED;
                if (r.scanRadius >= Math.PI) {
                    r.state = 'FADING';
                    r.scanRadius = Math.PI; 
                }
                scanUniforms.uScanRadii.value[r.index] = r.scanRadius;
                scanUniforms.uScanOpacities.value[r.index] = r.currentOpacity;
            } else if (r.state === 'FADING') {
                r.currentOpacity -= delta * SCAN_FADE_SPEED;
                if (r.currentOpacity <= 0) {
                    r.state = 'IDLE';
                    r.currentOpacity = 0;
                    r.scanRadius = 0;
                }
                scanUniforms.uScanRadii.value[r.index] = r.scanRadius;
                scanUniforms.uScanOpacities.value[r.index] = r.currentOpacity;
            }

            if (r.state === 'IDLE' || r.state === 'AIMING') {
                scanUniforms.uScanRadii.value[r.index] = 0;
                scanUniforms.uScanOpacities.value[r.index] = 0;
            }
        });

        renderer.render(scene, camera);
    };
    animate();

    const handleVisibility = () => { isVisible.current = !document.hidden; };
    document.addEventListener('visibilitychange', handleVisibility);

    const handleResize = () => {
        if (!containerRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(containerRef.current);

    return () => {
        cancelAnimationFrame(requestRef.current);
        document.removeEventListener('visibilitychange', handleVisibility);
        resizeObserver.disconnect();
        window.removeEventListener('resize', handleResize);
        if (containerRef.current && renderer.domElement) {
            containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        sphereGeo.dispose();
        sphereMat.dispose();
        scanGeo.dispose();
        scanMat.dispose();
        sharedDroneGeo.dispose();
        sharedLineMat.dispose();
        ringsData.forEach(d => {
            scene.remove(d.group);
            scene.remove(d.laser);
            (d.drone.material as THREE.Material).dispose();
            d.laser.geometry.dispose();
            (d.laser.material as THREE.Material).dispose();
        });
    };
  }, []);

  return (
    <div 
        ref={containerRef} 
        className="w-full h-full relative z-10"
        aria-label="Moon with Drifting RGB Rings and Persisting Scans"
    />
  );
};

export default React.memo(ReflectiveSphereRings);