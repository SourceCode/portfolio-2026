import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';

const JerusalemCubeMandelbulb: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const frameIdRef = useRef<null | number>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- 1. SETUP RENDERER & SCENE ---
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        // Camera setup for Hero placement
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
        camera.position.set(0, 0, 4.5);

        // --- 2. LIGHTING (Classic Studio Setup) ---
        // Key Light (Warm, from top-right)
        const keyLight = new THREE.DirectionalLight(0xfff0dd, 2.5);
        keyLight.position.set(3, 3, 3);
        scene.add(keyLight);

        // Fill Light (Cooler, from left, softer)
        const fillLight = new THREE.DirectionalLight(0xddeeff, 1.0);
        fillLight.position.set(-3, 0, 2);
        scene.add(fillLight);

        // Rim Light (Sharp, from back-top)
        const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
        rimLight.position.set(0, 4, -4);
        scene.add(rimLight);

        // Ambient
        const ambientLight = new THREE.AmbientLight(0xffaa00, 0.1);
        scene.add(ambientLight);


        // --- 3. GEOMETRY GENERATION (Marching Cubes) ---
        // Resolution: Trade-off between detail and startup time. 
        // 46^3 = ~97k voxels, manageable for main thread init.
        const resolution = 46;

        // Create MarchingCubes Mesh
        // Using Standard Material as requested
        const material = new THREE.MeshStandardMaterial({
            color: 0xffb300,   // Warm Amber/Gold
            flatShading: false,
            metalness: 0.1,    // Very subtle metallic
            roughness: 0.6,    // Matte finish (clay/ceramic gold)
        });

        // Initialize MarchingCubes
        // Initialize MarchingCubes
        const effect = new MarchingCubes(resolution, material, true, true, 100000);
        effect.position.set(0, 0, 0);
        effect.scale.set(1.2, 1.2, 1.2);
        effect.enableUvs = false;
        effect.enableColors = false;

        // --- 4. FRACTAL GENERATION (Mandelbox / Jerusalem Hybrid) ---
        // We populate the scalar field of MarchingCubes
        const generateFractal = () => {
            const data = effect.field;

            // Fractal Parameters
            const SCALE = 2.2;
            const MIN_RAD = 0.5;
            const FIXED_RAD = 1.0;
            const FOLD = 1.0; // Box folding limit
            const ITERATIONS = 4; // Keep low for JS performance

            // Helper to evaluate density at x,y,z (-1 to 1)
            const evaluateDensity = (x: number, y: number, z: number) => {
                // Iterated Function System (Mandelbox-ish)
                let px = x; let py = y; let pz = z;
                let dr = 1.0; // Scale accumulator for DE (optional, using simple magnitude here)

                for (let i = 0; i < ITERATIONS; i++) {
                    // Box Fold
                    if (px > FOLD) px = 2.0 * FOLD - px;
                    else if (px < -FOLD) px = -2.0 * FOLD - px;

                    if (py > FOLD) py = 2.0 * FOLD - py;
                    else if (py < -FOLD) py = -2.0 * FOLD - py;

                    if (pz > FOLD) pz = 2.0 * FOLD - pz;
                    else if (pz < -FOLD) pz = -2.0 * FOLD - pz;

                    // Sphere Fold
                    const r2 = px * px + py * py + pz * pz;
                    if (r2 < MIN_RAD) {
                        const temp = FIXED_RAD / MIN_RAD;
                        px *= temp; py *= temp; pz *= temp;
                        dr *= temp;
                    } else if (r2 < FIXED_RAD) {
                        const temp = FIXED_RAD / r2;
                        px *= temp; py *= temp; pz *= temp;
                        dr *= temp;
                    }

                    // Scale
                    px = px * SCALE;
                    py = py * SCALE;
                    pz = pz * SCALE;
                    dr = dr * SCALE + 1.0;
                }

                // Distance Estimator approximation
                const r = Math.sqrt(px * px + py * py + pz * pz);
                return (r - 2.0) / Math.abs(dr);
            };

            // Fill Field
            // MarchingCubes expects value > isolation to be INSIDE.
            // SDF returns negative for inside usually. 
            // We will map: inside -> high value, outside -> low value.
            // Let's normalize around 0.5.

            let i = 0;
            for (let k = 0; k < resolution; k++) {
                const z = 2.4 * (k / resolution) - 1.2;
                for (let j = 0; j < resolution; j++) {
                    const y = 2.4 * (j / resolution) - 1.2;
                    for (let h = 0; h < resolution; h++) {
                        const x = 2.4 * (h / resolution) - 1.2;

                        const dist = evaluateDensity(x, y, z);

                        // Map distance to density field
                        // Surface is roughly at dist = 0.
                        // If dist < 0 (inside), we want field > 0.5
                        // If dist > 0 (outside), we want field < 0.5
                        // Soften the boundary for smoother marching cubes mesh

                        // Invert distance: bigger is deeper inside
                        const density = 0.5 - dist * 2.0;

                        data[i] = density;
                        i++;
                    }
                }
            }
        };

        // Run Generation Once
        generateFractal();

        // Update mesh
        effect.isolation = 0.5;
        effect.update(); // Generates the geometry
        scene.add(effect);


        // --- 5. ANIMATION LOOP ---
        // Slow rotation only - no topology changes to keep performance stable
        const animate = (time: number) => {
            frameIdRef.current = requestAnimationFrame(animate);
            const seconds = time * 0.001;

            // Gentle rotation
            effect.rotation.y = seconds * 0.15;
            effect.rotation.x = Math.sin(seconds * 0.5) * 0.05;

            // Very subtle breathing scale
            const scale = 1.2 + Math.sin(seconds * 0.5) * 0.02;
            effect.scale.set(scale, scale, scale);

            renderer.render(scene, camera);
        };
        animate(performance.now());


        // --- 6. RESIZE HANDLER ---
        const handleResize = () => {
            if (!containerRef.current) return;
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        // Initial size
        handleResize();
        const resizeObserver = new ResizeObserver(() => handleResize());
        resizeObserver.observe(containerRef.current);


        // Cleanup
        return () => {
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
            resizeObserver.disconnect();
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            // effect.dispose(); // MarchingCubes doesn't have standard dispose in all versions, let GC handle
            material.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full relative z-10"
            aria-label="Jerusalem Cube Fractal"
        />
    );
};

export default JerusalemCubeMandelbulb;