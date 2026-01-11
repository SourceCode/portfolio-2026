import { render } from '@testing-library/react';
import React from 'react';
import * as THREE from 'three';

import GradientBackground from './GradientBackground';
import InteractiveMandelbulb from './InteractiveMandelbulb';
import JerusalemCubeMandelbulb from './JerusalemCubeMandelbulb';
import LiquidMetatronCube from './LiquidMetatronCube';
import ReflectiveSphereRings from './ReflectiveSphereRings';

// Mock THREE.js WebGL and addons to prevent JSDOM crashes
// Mock THREE.js WebGL and addons to prevent JSDOM crashes
jest.mock('three', () => {
    const THREE_LIB = jest.requireActual('three');
    return {
        ...THREE_LIB,
        WebGLRenderer: class {
            domElement = document.createElement('canvas');
            dispose() { }
            render() { }
            setClearColor() { }
            setPixelRatio() { }
            setSize() { }
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
        dispose() { }
        update() { }
    }
}));

// Mock MarchingCubes
jest.mock('three/addons/objects/MarchingCubes.js', () => ({
    MarchingCubes: class {
        dispose = jest.fn(); // sometimes called
        enableColors = false;
        enableUvs = false;
        field = new Float32Array(100000); // Mock field
        isolation = 0.5;
        position = { set: jest.fn() };
        rotation = { x: 0, y: 0, z: 0 };
        scale = { set: jest.fn() };
        update = jest.fn();
    }
}));

// Mock PostProcessing
jest.mock('three/addons/postprocessing/EffectComposer.js', () => ({
    EffectComposer: class {
        addPass() { }
        dispose() { }
        render() { }
        setSize() { }
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
