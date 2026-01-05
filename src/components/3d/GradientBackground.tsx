import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * GradientBackground Component
 * 
 * Renders a full-screen, plasma-animated gradient using a custom GLSL fragment shader.
 * Feature: Fluid, organic motion with Mint/Teal/Black color palette.
 * - Always animated (no visibility pause) to prevent state lock.
 * - Optimized noise-free math for performance.
 */
const GradientBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- RENDERER ---
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);

    // --- SCENE ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    const bgPlane = new THREE.PlaneGeometry(2, 2);

    const bgUniforms = {
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_time: { value: 0.0 },
    };

    const bgMaterial = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          
          // PLASMA SHADER LOGIC
          // Speed factor - increased for visibility
          float time = u_time * 0.4; 
          
          // Coordinate scale
          vec2 c = uv * 2.5 - vec2(1.25); 
          float v = 0.0;
          
          // 1. Vertical wave
          v += sin(c.x + time);
          // 2. Diagonal wave
          v += sin((c.y + time) / 2.0);
          // 3. Circular/Diagonal interference
          v += sin((c.x + c.y + time) / 2.0);
          
          // 4. Rotating circular wave
          vec2 offset = c + vec2(sin(time * 0.5), cos(time * 0.4));
          v += sin(sqrt(offset.x*offset.x + offset.y*offset.y + 1.0) + time);
          
          // Normalize (sum of 4 sines is [-4, 4] -> divide by ~2.5 to map to reasonable input for color mix)
          v = v / 2.5; 
          
          // COLORS: Black, Deep Mint, Deep Teal
          vec3 black = vec3(0.0, 0.0, 0.0);
          vec3 mint = vec3(0.0, 0.4, 0.3);
          vec3 teal = vec3(0.0, 0.3, 0.5);
          
          vec3 color = black;
          
          // Color Mixing based on plasma value 'v'
          float t1 = 0.5 + 0.5 * sin(v * 3.0 + time * 0.5);
          float t2 = 0.5 + 0.5 * cos(v * 2.5 + time * 0.4);
          
          color = mix(color, mint, t1 * 0.6);
          color = mix(color, teal, t2 * 0.5);

          // Vignette
          float dist = distance(uv, vec2(0.5));
          color *= smoothstep(1.3, 0.1, dist);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      uniforms: bgUniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `
    });

    const mesh = new THREE.Mesh(bgPlane, bgMaterial);
    scene.add(mesh);

    // --- ANIMATION CONTROL ---
    let animationId: number;
    const startTime = performance.now();

    const animate = (time: number) => {
      // Direct pass-through of elapsed time
      const seconds = (time - startTime) * 0.001;
      bgMaterial.uniforms.u_time.value = seconds;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    // Start animation loop
    animate(performance.now());

    // Resize Handler
    const handleResize = () => {
      if (containerRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        bgMaterial.uniforms.u_resolution.value.set(width, height);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current) containerRef.current.innerHTML = '';

      // Dispose resources
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