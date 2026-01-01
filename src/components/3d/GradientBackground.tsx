import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * GradientBackground Component
 * 
 * Renders a full-screen, noise-driven animated gradient using a custom GLSL fragment shader.
 * Optimized for performance:
 * - Uses lower pixel ratio cap to save fill-rate.
 * - Pauses rendering when tab is inactive.
 * - Memoized to prevent unnecessary re-renders.
 */
const GradientBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- RENDERER ---
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: false, // Disable AA for background noise, saves performance
        powerPreference: 'default', // Don't force high-performance for background
        stencil: false,
        depth: false
    });
    
    // Cap pixel ratio at 1.5 for background to ensure smooth UI over top on 4k/Retina screens
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);

    // --- SCENE ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const bgPlane = new THREE.PlaneGeometry(2, 2);
    const bgUniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    };
    
    const bgMaterial = new THREE.ShaderMaterial({
      uniforms: bgUniforms,
      depthWrite: false,
      depthTest: false,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        varying vec2 vUv;

        // 3D Simplex Noise function (permute/snoise)
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

        void main() {
          vec2 st = vUv;
          
          vec3 c1 = vec3(0.0, 0.0, 0.0);
          vec3 c2 = vec3(0.0, 0.4, 0.3);    // Deep Mint
          vec3 c3 = vec3(0.0, 0.3, 0.5);    // Deep Teal

          float n1 = snoise(st * 1.5 + u_time * 0.05);
          float n2 = snoise(st * 2.0 - u_time * 0.08);

          vec3 color = c1;
          color = mix(color, c2, n1 * 0.4 + 0.1); 
          color = mix(color, c3, n2 * 0.4 + 0.1);

          float dist = distance(st, vec2(0.5));
          color *= smoothstep(1.2, 0.2, dist);

          gl_FragColor = vec4(color, 1.0);
        }
      `
    });
    scene.add(new THREE.Mesh(bgPlane, bgMaterial));

    // --- ANIMATION CONTROL ---
    let animationId: number;
    const startTime = performance.now();
    let isVisible = true;
    
    const animate = (time: number) => {
      if (isVisible) {
          const seconds = (time - startTime) * 0.001;
          bgMaterial.uniforms.u_time.value = seconds;
          renderer.render(scene, camera);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate(performance.now());

    const handleVisibilityChange = () => {
        isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleResize = () => {
        if(containerRef.current) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            bgMaterial.uniforms.u_resolution.value.set(width, height);
        }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current) containerRef.current.innerHTML = '';
      renderer.dispose();
      bgMaterial.dispose();
      bgPlane.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full -z-10 bg-brand-dark"
      aria-hidden="true"
    />
  );
};

export default React.memo(GradientBackground);