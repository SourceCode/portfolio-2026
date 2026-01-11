import { render, act } from '@testing-library/react';
import React from 'react';
import * as THREE from 'three';

import GradientBackground from './GradientBackground';
import InteractiveMandelbulb from './InteractiveMandelbulb';
import JerusalemCubeMandelbulb from './JerusalemCubeMandelbulb';
import LiquidMetatronCube from './LiquidMetatronCube';
import ReflectiveSphereRings from './ReflectiveSphereRings';

// Mock THREE.js WebGL and addons to prevent JSDOM crashes
jest.mock('three', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const THREE = jest.requireActual('three');
    return {
        ...THREE,
        WebGLRenderer: class {
            domElement = document.createElement('canvas');
            setSize() { }
            setPixelRatio() { }
            setClearColor() { }
            render() { }
            dispose() { }
        },
        WebGLRenderTarget: class {
            dispose() { }
        },
        // EffectComposer is also sometimes imported from three/examples/jsm/postprocessing/EffectComposer
        // but here it is imported from three/addons/postprocessing/EffectComposer.js
    };
});

// Mock OrbitControls addon
jest.mock('three/addons/controls/OrbitControls.js', () => ({
    OrbitControls: class {
        update() { }
        dispose() { }
    }
}));

// Mock MarchingCubes
jest.mock('three/addons/objects/MarchingCubes.js', () => ({
    MarchingCubes: class {
        position = { set: jest.fn() };
        scale = { set: jest.fn() };
        rotation = { x: 0, y: 0, z: 0 };
        field = new Float32Array(100000); // Mock field
        enableUvs = false;
        enableColors = false;
        isolation = 0.5;
        update = jest.fn();
        dispose = jest.fn(); // sometimes called
    }
}));

// Mock PostProcessing
jest.mock('three/addons/postprocessing/EffectComposer.js', () => ({
    EffectComposer: class {
        addPass() { }
        setSize() { }
        render() { }
        dispose() { }
    }
}));

jest.mock('three/addons/postprocessing/RenderPass.js', () => ({
    RenderPass: class { }
}));

jest.mock('three/addons/postprocessing/UnrealBloomPass.js', () => ({
    UnrealBloomPass: class { }
}));

// Mock BufferGeometryUtils
jest.mock('three/addons/utils/BufferGeometryUtils.js', () => ({
    mergeGeometries: () => new THREE.BufferGeometry() // Return real geometry
}));


describe('3D Components Smoke Tests', () => {
    // Use act to handle useEffects

    it('renders GradientBackground', () => {
        render(<GradientBackground />);
    });

    it('renders InteractiveMandelbulb', () => {
        render(<InteractiveMandelbulb />);
    });

    it('renders JerusalemCubeMandelbulb', () => {
        render(<JerusalemCubeMandelbulb />);
    });

    it('renders LiquidMetatronCube', () => {
        render(<LiquidMetatronCube />);
    });

    it('renders ReflectiveSphereRings', () => {
        render(<ReflectiveSphereRings />);
    });
});
