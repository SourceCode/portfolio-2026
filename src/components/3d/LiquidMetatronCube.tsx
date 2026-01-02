import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

const LiquidMetatronNetwork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.5, 8.5); // Slightly elevated view

    // Renderer (Transparent)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance',
      premultipliedAlpha: false
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0); // Explicit transparency
    
    containerRef.current.appendChild(renderer.domElement);

    // Post-processing Setup (Alpha Preserving)
    const renderTarget = new THREE.WebGLRenderTarget(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
        {
            colorSpace: THREE.SRGBColorSpace,
            format: THREE.RGBAFormat,
            samples: 4,
            type: THREE.HalfFloatType
        }
    );

    const composer = new EffectComposer(renderer, renderTarget);
    const renderPass = new RenderPass(scene, camera);
    renderPass.clearColor = new THREE.Color(0,0,0);
    renderPass.clearAlpha = 0;
    composer.addPass(renderPass);

    // Bloom - adjusted for liquid gold glow
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.5, // Strength
      0.5, // Radius
      0.8  // Threshold
    );
    composer.addPass(bloomPass);

    // Handle Resize
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        renderer.setSize(width, height);
        composer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    updateSize();

    // --- 2. Metatron Network Geometry Generation ---
    
    // Config
    const RINGS = 2; // Number of concentric rings
    const NODE_RADIUS = 0.12;
    const LINK_RADIUS = 0.025;

    // Generate Nodes (Positions)
    const nodes: { id: number; pos: THREE.Vector3, }[] = [];
    let nodeIdCounter = 0;

    // Center Node
    nodes.push({ id: nodeIdCounter++, pos: new THREE.Vector3(0, 0, 0) });

    // Rings
    for (let r = 1; r <= RINGS; r++) {
        const count = r * 6; // Metatron / Flower of Life progression
        const radius = r * 1.6; 
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            // Add subtle 3D offset
            const z = (Math.random() - 0.5) * 0.8; 
            nodes.push({ id: nodeIdCounter++, pos: new THREE.Vector3(x, y, z) });
        }
    }

    // Add a few "Satellite" nodes for asymmetry/network feel
    for (let i = 0; i < 6; i++) {
         const angle = Math.random() * Math.PI * 2;
         const radius = 3.5 + Math.random() * 1.0;
         const z = (Math.random() - 0.5) * 1.5;
         nodes.push({ id: nodeIdCounter++, pos: new THREE.Vector3(Math.cos(angle)*radius, Math.sin(angle)*radius, z) });
    }

    // Generate Node Meshes (Merged)
    const nodeGeometries: THREE.BufferGeometry[] = [];
    const baseSphereGeo = new THREE.SphereGeometry(NODE_RADIUS, 16, 16);

    nodes.forEach(node => {
        const geo = baseSphereGeo.clone();
        geo.translate(node.pos.x, node.pos.y, node.pos.z);
        
        // Attributes for shader
        const count = geo.attributes.position.count;
        const ids = new Float32Array(count).fill(node.id);
        const randoms = new Float32Array(count).fill(Math.random());
        
        geo.setAttribute('aNodeId', new THREE.BufferAttribute(ids, 1));
        geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
        
        nodeGeometries.push(geo);
    });

    const mergedNodesGeometry = BufferGeometryUtils.mergeGeometries(nodeGeometries);

    // Generate Links (Edges)
    const linkGeometries: THREE.BufferGeometry[] = [];
    const connections = new Set<string>(); // avoid dupes
    let linkCount = 0;

    const createLink = (n1: typeof nodes[0], n2: typeof nodes[0]) => {
        const id1 = Math.min(n1.id, n2.id);
        const id2 = Math.max(n1.id, n2.id);
        const key = `${id1}-${id2}`;
        if (connections.has(key)) return;
        
        connections.add(key);
        
        const curve = new THREE.LineCurve3(n1.pos, n2.pos);
        const tubeGeo = new THREE.TubeGeometry(curve, 4, LINK_RADIUS, 5, false);
        
        const count = tubeGeo.attributes.position.count;
        const linkIds = new Float32Array(count).fill(linkCount);
        const randoms = new Float32Array(count).fill(Math.random());
        
        tubeGeo.setAttribute('aLinkId', new THREE.BufferAttribute(linkIds, 1));
        tubeGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
        
        linkGeometries.push(tubeGeo);
        linkCount++;
    };

    // Connect nodes logic (Nearest Neighbors + Hub)
    nodes.forEach((n1) => {
        // Connect to neighbors within distance
        const neighbors = nodes
            .map(n2 => ({ dist: n1.pos.distanceTo(n2.pos), n: n2 }))
            .filter(item => item.dist > 0.01 && item.dist < 2.2) // Max link length
            .sort((a, b) => a.dist - b.dist)
            .slice(0, 3); // Max 3 nearest connections per node to keep it clean

        neighbors.forEach(nb => createLink(n1, nb.n));
        
        // Ensure center connects to ring 1
        if (n1.id === 0) {
             nodes.slice(1, 7).forEach(n2 => createLink(n1, n2));
        }
    });

    const mergedLinksGeometry = BufferGeometryUtils.mergeGeometries(linkGeometries);

    // --- 3. Unified Liquid Gold Shader ---

    const commonUniforms = {
        uColor: { value: new THREE.Color('#FFD700') }, // Gold
        uDissolve: { value: 0 },      // 0-1
        uRevealLinks: { value: 0 },   // 0-1
        uRevealNodes: { value: 0 },   // 0-1
        uTime: { value: 0 },
    };

    // Shared Shader Code
    const noiseChunk = `
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ; m = m*m ;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }
    `;

    // --- Node Material ---
    const nodeMaterial = new THREE.ShaderMaterial({
        fragmentShader: `
            uniform float uTime;
            uniform float uRevealNodes;
            uniform float uDissolve;
            uniform float uTotalNodes;
            uniform vec3 uColor;

            varying vec2 vUv;
            varying vec3 vPos;
            varying vec3 vNormal;
            varying float vRandom;
            varying float vId;

            ${noiseChunk}

            void main() {
                // Reveal Logic
                // Normalize ID
                float idNorm = vId / uTotalNodes;
                // Stagger reveal based on ID and randomness
                float threshold = idNorm * 0.5 + vRandom * 0.2;
                float reveal = smoothstep(threshold, threshold + 0.3, uRevealNodes * 1.5);
                
                if (reveal < 0.01) discard;

                // Scale effect (fake via discard/alpha or just assume geometry is scaled? 
                // Since we merged geometry, we can't scale vertices easily without complex vertex shader.
                // We'll use alpha clip for "pop in" feel)
                
                // Dissolve Logic
                float noiseVal = snoise(vPos.xy * 2.0 + uTime * 0.2);
                float dVal = (noiseVal + 1.0) * 0.5;
                if (dVal < uDissolve) discard;
                
                // Molten Edge
                float isEdge = 1.0 - smoothstep(uDissolve, uDissolve + 0.05, dVal);

                // Lighting (Liquid Gold)
                vec3 viewDir = normalize(cameraPosition - vPos);
                vec3 normal = normalize(vNormal);
                
                // Animated Liquid Distort
                float flow = snoise(vPos.xy * 3.0 + vec2(uTime, uTime * 0.8));
                normal = normalize(normal + flow * 0.1);

                float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
                vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
                float diff = max(dot(normal, lightDir), 0.0);
                
                vec3 finalColor = uColor * (0.3 + diff * 0.7);
                finalColor += vec3(1.0, 0.9, 0.6) * fresnel * 2.0; // Rim
                finalColor += vec3(1.0, 0.8, 0.4) * flow * 0.2; // Shimmer

                // Pop-in flash
                float flash = smoothstep(0.0, 0.2, reveal) * (1.0 - smoothstep(0.8, 1.0, reveal));
                finalColor += vec3(1.0) * flash * 0.5;

                // Burn edge
                finalColor += vec3(3.0, 0.5, 0.0) * isEdge * 5.0;

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `,
        transparent: true,
        uniforms: {
            ...commonUniforms,
            uTotalNodes: { value: nodes.length }
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vPos;
            varying vec3 vNormal;
            varying float vRandom;
            attribute float aNodeId;
            attribute float aRandom;
            varying float vId;

            void main() {
                vUv = uv;
                vNormal = normal;
                vRandom = aRandom;
                vId = aNodeId;
                
                // Position logic is handled standardly here, transform handled in JS or via group
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                vPos = worldPosition.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPosition;
            }
        `
    });

    // --- Link Material ---
    const linkMaterial = new THREE.ShaderMaterial({
        fragmentShader: `
            uniform float uTime;
            uniform float uRevealLinks;
            uniform float uDissolve;
            uniform float uTotalLinks;
            uniform vec3 uColor;

            varying vec2 vUv;
            varying vec3 vPos;
            varying vec3 vNormal;
            varying float vRandom;
            varying float vId;

            ${noiseChunk}

            void main() {
                // Reveal Logic (Packet Tracing)
                // vUv.x is along the tube (0 to 1)
                
                // Global reveal progress needs to cover all links
                // We want them to start at different times but draw quickly
                float idNorm = vId / uTotalLinks;
                float startDelay = idNorm * 0.6 + vRandom * 0.2; // 0 to 0.8
                
                // Map uRevealLinks (0-1) to local progress
                // When uRevealLinks goes 0->1, we want this specific link to go 0->1 based on delay
                float globalP = uRevealLinks * 1.8; // speed up slightly to finish
                float localP = smoothstep(startDelay, startDelay + 0.3, globalP);
                
                if (vUv.x > localP) discard;
                
                // Data Head (Bright tip)
                float tip = 1.0 - smoothstep(0.0, 0.15, localP - vUv.x);

                // Dissolve Logic
                float noiseVal = snoise(vPos.xy * 2.0 + uTime * 0.5);
                float dVal = (noiseVal + 1.0) * 0.5;
                if (dVal < uDissolve) discard;
                float isEdge = 1.0 - smoothstep(uDissolve, uDissolve + 0.05, dVal);

                // Pulse Effect (Data traveling)
                float pulse = snoise(vec2(vUv.x * 2.0 - uTime * 2.0, vId * 0.1));
                pulse = smoothstep(0.6, 0.8, pulse);

                // Lighting
                vec3 viewDir = normalize(cameraPosition - vPos);
                vec3 normal = normalize(vNormal);
                float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.0);
                
                vec3 finalColor = uColor * 0.5;
                finalColor += vec3(1.0, 0.9, 0.5) * fresnel * 1.5; // Rim
                finalColor += vec3(2.0, 2.0, 2.0) * tip * 3.0; // Drawing head
                finalColor += vec3(0.5, 1.0, 0.8) * pulse * 2.0; // Network pulse (Teal tint)
                finalColor += vec3(3.0, 0.5, 0.0) * isEdge * 5.0; // Burn

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `,
        transparent: true,
        uniforms: {
            ...commonUniforms,
            uTotalLinks: { value: linkCount }
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vPos;
            varying vec3 vNormal;
            varying float vRandom;
            attribute float aLinkId;
            attribute float aRandom;
            varying float vId;

            void main() {
                vUv = uv;
                vNormal = normal;
                vRandom = aRandom;
                vId = aLinkId;
                
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                vPos = worldPosition.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPosition;
            }
        `
    });

    // Create Meshes
    const nodeMesh = new THREE.Mesh(mergedNodesGeometry, nodeMaterial);
    const linkMesh = new THREE.Mesh(mergedLinksGeometry, linkMaterial);
    
    const networkGroup = new THREE.Group();
    networkGroup.add(nodeMesh);
    networkGroup.add(linkMesh);
    scene.add(networkGroup);


    // --- 4. Animation Cycle ---
    
    // Timings (ms)
    const T_DRAW_NODES = 2000;
    const T_DRAW_LINKS = 4000; // Overlaps
    const T_ROTATE = 6000;
    const T_DISSOLVE = 2500;
    
    const state = {
        startTime: performance.now(),
    };

    let animationId: number;

    const animate = (time: number) => {
        animationId = requestAnimationFrame(animate);
        const elapsed = time - state.startTime;
        const seconds = time * 0.001;

        // Update Uniforms
        nodeMaterial.uniforms.uTime.value = seconds;
        linkMaterial.uniforms.uTime.value = seconds;

        // --- Phase Logic ---
        
        // 1. Draw Nodes (0 -> 2s)
        if (elapsed < T_DRAW_NODES) {
            const p = elapsed / T_DRAW_NODES;
            const ease = 1 - Math.pow(1 - p, 3);
            nodeMaterial.uniforms.uRevealNodes.value = ease;
            linkMaterial.uniforms.uRevealLinks.value = 0;
            nodeMaterial.uniforms.uDissolve.value = 0;
            linkMaterial.uniforms.uDissolve.value = 0;
        }
        // 2. Draw Links (1.5s -> 5.5s) - Starts before nodes finish
        if (elapsed > 1500 && elapsed < 1500 + T_DRAW_LINKS) {
            const p = (elapsed - 1500) / T_DRAW_LINKS;
            const ease = 1 - Math.pow(1 - p, 3);
            nodeMaterial.uniforms.uRevealNodes.value = 1; // Ensure nodes done
            linkMaterial.uniforms.uRevealLinks.value = ease;
        } else if (elapsed > 1500 + T_DRAW_LINKS) {
            linkMaterial.uniforms.uRevealLinks.value = 1;
        }

        // 3. Rotation Phase (Idle/Active)
        // Always rotate slowly, but during "Phase 2" we might emphasize it
        // We'll just rotate continuously but add a "wobble"
        networkGroup.rotation.y = seconds * 0.15; // Slow constant rotation
        networkGroup.rotation.x = Math.sin(seconds * 0.5) * 0.05; // Gentle tilt

        // 4. Dissolve (After Draw + Rotate Duration)
        const totalCycle = T_DRAW_LINKS + T_ROTATE; // ~10s
        if (elapsed > totalCycle && elapsed < totalCycle + T_DISSOLVE) {
             const p = (elapsed - totalCycle) / T_DISSOLVE;
             nodeMaterial.uniforms.uDissolve.value = p;
             linkMaterial.uniforms.uDissolve.value = p;
        } else if (elapsed > totalCycle + T_DISSOLVE + 1000) {
            // Reset
            state.startTime = time;
            nodeMaterial.uniforms.uRevealNodes.value = 0;
            linkMaterial.uniforms.uRevealLinks.value = 0;
            nodeMaterial.uniforms.uDissolve.value = 0;
            linkMaterial.uniforms.uDissolve.value = 0;
        }

        composer.render();
    };

    animate(performance.now());
    window.addEventListener('resize', updateSize);

    return () => {
        window.removeEventListener('resize', updateSize);
        cancelAnimationFrame(animationId);
        if (containerRef.current && renderer.domElement) {
            containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        mergedNodesGeometry.dispose();
        mergedLinksGeometry.dispose();
        nodeMaterial.dispose();
        linkMaterial.dispose();
        composer.dispose();
        renderTarget.dispose();
    };
  }, []);

  return (
    <div 
        ref={containerRef} 
        className="w-full h-full"
        title="Metatron Network Graph"
    />
  );
};

export default LiquidMetatronNetwork;