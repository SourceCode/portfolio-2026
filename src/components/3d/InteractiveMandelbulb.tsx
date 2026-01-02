import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const InteractiveMandelbulb: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef(0);
  const isPulsing = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(2.5, 1.5, 3.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: 'high-performance' 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Fit parent container
    const updateSize = () => {
        if(containerRef.current) {
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    };
    updateSize();
    containerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Shader Uniforms
    const uniforms = {
      u_cameraPos: { value: camera.position },
      u_pulse: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2() },
      u_time: { value: 0.0 }
    };

    // Vertex Shader (Standard Sphere)
    const vertexShader = `
      varying vec3 vPosition;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment Shader (Mandelbulb Raymarch)
    const fragmentShader = `
      varying vec3 vPosition;
      varying vec2 vUv;
      uniform vec3 u_cameraPos;
      uniform float u_time;
      uniform float u_pulse;

      // Distance Estimator for Mandelbulb
      float map(vec3 pos) {
          vec3 z = pos;
          float dr = 1.0;
          float r = 0.0;
          float power = 8.0 + sin(u_time * 0.2) * 0.5; // Slight morphing

          for (int i = 0; i < 8; i++) {
              r = length(z);
              if (r > 2.0) break;
              
              // Convert to polar
              float theta = acos(z.z / r);
              float phi = atan(z.y, z.x);
              
              dr = pow(r, power - 1.0) * power * dr + 1.0;
              
              // Scale and rotate
              float zr = pow(r, power);
              theta = theta * power;
              phi = phi * power;
              
              z = zr * vec3(sin(theta)*cos(phi), sin(phi)*sin(theta), cos(theta));
              z += pos;
          }
          return 0.5 * log(r) * r / dr;
      }

      // Calculate Normal
      vec3 calcNormal(vec3 pos) {
          vec2 e = vec2(0.001, 0.0);
          return normalize(vec3(
              map(pos + e.xyy) - map(pos - e.xyy),
              map(pos + e.yxy) - map(pos - e.yxy),
              map(pos + e.yyx) - map(pos - e.yyx)
          ));
      }

      void main() {
        vec3 ro = u_cameraPos;
        vec3 rd = normalize(vPosition - ro);

        float t = 0.0;
        float tMax = 5.0;
        int steps = 0;
        bool hit = false;
        
        // Raymarching
        for (int i = 0; i < 64; i++) {
            vec3 pos = ro + t * rd;
            float d = map(pos);
            if (d < 0.002) {
                hit = true;
                steps = i;
                break;
            }
            if (t > tMax) break;
            t += d;
        }

        if (hit) {
            vec3 pos = ro + t * rd;
            vec3 nor = calcNormal(pos);
            
            // Lighting / Coloring
            vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
            float diff = max(dot(nor, lightDir), 0.0);
            
            // High Contrast Palette
            vec3 colMint = vec3(0.0, 1.0, 0.64); // Mint
            vec3 colTeal = vec3(0.0, 0.88, 1.0); // Teal
            vec3 colDark = vec3(0.1, 0.2, 0.2); // Dark Teal/Black
            
            // Mix based on height/position
            vec3 color = mix(colDark, colTeal, (pos.y + 1.0) * 0.5);
            color = mix(color, colMint, diff);
            
            // Fresnel / Rim Light (Sharp Mint Rim)
            float fresnel = pow(1.0 - max(dot(nor, -rd), 0.0), 3.0);
            color += fresnel * colMint; 
            
            // Pulse effect (White/Mint flash)
            color += u_pulse * vec3(0.8, 1.0, 0.9);

            gl_FragColor = vec4(color, 1.0);
        } else {
            discard; // Transparent background
        }
      }
    `;

    // Geometry: Sphere to bound the fractal
    const geometry = new THREE.SphereGeometry(1.6, 64, 64);
    const material = new THREE.ShaderMaterial({
      fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms,
      vertexShader
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation Loop
    let animationId: number;
    const animate = (time: number) => {
      // Pulse decay
      if (isPulsing.current) {
          pulseRef.current += 0.1;
          if (pulseRef.current > 1.0) {
              isPulsing.current = false;
          }
      } else if (pulseRef.current > 0) {
          pulseRef.current -= 0.02;
          if (pulseRef.current < 0) pulseRef.current = 0;
      }
      
      material.uniforms.u_pulse.value = pulseRef.current;
      material.uniforms.u_time.value = time * 0.001;
      material.uniforms.u_cameraPos.value.copy(camera.position);

      controls.update();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    
    animate(0);

    const handleResize = () => {
        updateSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      renderer.dispose();
      material.dispose();
      geometry.dispose();
      controls.dispose();
    };
  }, []);

  const handleClick = () => {
      isPulsing.current = true;
      pulseRef.current = 0.5; // Start pulse
  };

  return (
    <div 
        ref={containerRef} 
        className="w-full h-full cursor-pointer" 
        onClick={handleClick}
        title="Interactive Mandelbulb"
    />
  );
};

export default InteractiveMandelbulb;