import '@testing-library/jest-dom';

// TextEncoder polyfill for react-router-dom in Jest
import { TextDecoder, TextEncoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

// Mock WebGL for Three.js
HTMLCanvasElement.prototype.getContext = jest.fn((type) => {
    if (type === 'webgl' || type === 'experimental-webgl' || type === 'webgl2') {
        return {
            getParameter: jest.fn((parameter) => {
                // Return string for version queries
                if (parameter === 0x1F02) return "WebGL 1.0"; // VERSION
                if (parameter === 0x1F00) return "WebKit"; // VENDOR
                if (parameter === 0x1F01) return "WebKit WebGL"; // RENDERER
                if (parameter === 0x8B8C) return "WebGL GLSL ES 1.0"; // SHADING_LANGUAGE_VERSION

                // Capabilities
                if (parameter === 0x8872) return 8; // MAX_TEXTURE_IMAGE_UNITS
                if (parameter === 0x8B49) return 8; // MAX_VERTEX_TEXTURE_IMAGE_UNITS
                if (parameter === 0x8B4A) return 8; // MAX_TEXTURE_IMAGE_UNITS (fragment)
                if (parameter === 0x8869) return 16; // MAX_VERTEX_ATTRIBS
                if (parameter === 0x884F) return 16; // MAX_VARYING_VECTORS
                if (parameter === 0x8D57) return 1024; // MAX_TEXTURE_SIZE
                if (parameter === 0x0D33) return 1024; // MAX_CUBE_MAP_TEXTURE_SIZE
                if (parameter === 0x8B4C) return 1024; // MAX_RENDERBUFFER_SIZE
                if (parameter === 0x8873) return 256; // MAX_VERTEX_UNIFORM_VECTORS
                if (parameter === 0x8DF8) return 256; // MAX_FRAGMENT_UNIFORM_VECTORS

                return 0;
            }),
            // WebGL Constants
            VERSION: 0x1F02,
            VENDOR: 0x1F00,
            RENDERER: 0x1F01,
            SHADING_LANGUAGE_VERSION: 0x8B8C,
            MAX_TEXTURE_IMAGE_UNITS: 0x8872,
            MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B49,
            MAX_TEXTURE_SIZE: 0x8D57,
            MAX_CUBE_MAP_TEXTURE_SIZE: 0x0D33,
            MAX_RENDERBUFFER_SIZE: 0x8B4C,
            MAX_VERTEX_UNIFORM_VECTORS: 0x8873,
            MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DF8,
            MAX_VERTEX_ATTRIBS: 0x8869,
            MAX_VARYING_VECTORS: 0x884F,

            getContextAttributes: jest.fn(() => ({
                alpha: true,
                antialias: false,
                depth: false,
                failIfMajorPerformanceCaveat: false,
                powerPreference: 'default',
                premultipliedAlpha: true,
                preserveDrawingBuffer: false,
                stencil: false,
            })),
            getExtension: jest.fn(() => ({})),

            // Textures
            createTexture: jest.fn(),
            bindTexture: jest.fn(),
            texParameteri: jest.fn(),
            texImage2D: jest.fn(),
            texImage3D: jest.fn(),
            texStorage2D: jest.fn(),
            texStorage3D: jest.fn(),
            activeTexture: jest.fn(),

            // Buffers
            createBuffer: jest.fn(),
            bindBuffer: jest.fn(),
            bufferData: jest.fn(),

            // Renderbuffers & Framebuffers
            createFramebuffer: jest.fn(() => ({})),
            createRenderbuffer: jest.fn(() => ({})),
            bindFramebuffer: jest.fn(),
            bindRenderbuffer: jest.fn(),
            checkFramebufferStatus: jest.fn(() => 36053), // FRAMEBUFFER_COMPLETE
            framebufferTexture2D: jest.fn(),
            framebufferRenderbuffer: jest.fn(),
            renderbufferStorage: jest.fn(),

            // Shaders & Programs
            createProgram: jest.fn(() => ({})),
            createShader: jest.fn(() => ({})),
            shaderSource: jest.fn(),
            compileShader: jest.fn(),
            attachShader: jest.fn(),
            linkProgram: jest.fn(),
            useProgram: jest.fn(),

            // Shader Introspection & Parameters
            getProgramParameter: jest.fn(() => true),
            getShaderParameter: jest.fn(() => true),
            getShaderPrecisionFormat: jest.fn(() => ({
                rangeMin: 127,
                rangeMax: 127,
                precision: 23,
            })),
            getShaderInfoLog: jest.fn(),
            getProgramInfoLog: jest.fn(),
            getActiveUniform: jest.fn(() => ({ name: 'u_time', type: 35676, size: 1 })), // 35676 = FLOAT
            getActiveAttrib: jest.fn(() => ({ name: 'position', type: 35665, size: 3 })), // 35665 = FLOAT_VEC3
            getUniform: jest.fn(),
            getAttribLocation: jest.fn(() => 0),

            // VAO & Instancing
            createVertexArray: jest.fn(() => ({})),
            bindVertexArray: jest.fn(),
            deleteVertexArray: jest.fn(),
            isVertexArray: jest.fn(() => true),
            drawArraysInstanced: jest.fn(),
            drawElementsInstanced: jest.fn(),
            vertexAttribDivisor: jest.fn(),
            vertexAttribIPointer: jest.fn(),

            // Drawing
            drawArrays: jest.fn(),
            drawElements: jest.fn(),

            // Attributes & Uniforms
            enableVertexAttribArray: jest.fn(),
            vertexAttribPointer: jest.fn(),
            getUniformLocation: jest.fn(),
            uniform1f: jest.fn(),
            uniform1fv: jest.fn(),
            uniform1i: jest.fn(),
            uniform1iv: jest.fn(),
            uniform2f: jest.fn(),
            uniform2fv: jest.fn(),
            uniform2i: jest.fn(),
            uniform2iv: jest.fn(),
            uniform3fv: jest.fn(),
            uniform3i: jest.fn(),
            uniform3iv: jest.fn(),
            uniform4f: jest.fn(),
            uniform4fv: jest.fn(),
            uniform4i: jest.fn(),
            uniform4iv: jest.fn(),
            uniformMatrix2fv: jest.fn(),
            uniformMatrix3fv: jest.fn(),
            uniformMatrix4fv: jest.fn(),

            // State & Config
            viewport: jest.fn(),
            scissor: jest.fn(),
            enable: jest.fn(),
            disable: jest.fn(),
            blendFunc: jest.fn(),
            cullFace: jest.fn(),
            frontFace: jest.fn(),
            depthFunc: jest.fn(),
            depthMask: jest.fn(),
            colorMask: jest.fn(),
            depthRange: jest.fn(),
            polygonOffset: jest.fn(),
            stencilMask: jest.fn(),
            stencilFunc: jest.fn(),
            stencilOp: jest.fn(),
            pixelStorei: jest.fn(),

            // Clearing
            clearColor: jest.fn(),
            clear: jest.fn(),
            clearDepth: jest.fn(),
            clearStencil: jest.fn(),

            // Sync & Errors
            finish: jest.fn(),
            flush: jest.fn(),
            getError: jest.fn(),

            // Cleanup & Deletion
            deleteTexture: jest.fn(),
            deleteBuffer: jest.fn(),
            deleteFramebuffer: jest.fn(),
            deleteRenderbuffer: jest.fn(),
            deleteProgram: jest.fn(),
            deleteShader: jest.fn(),
        }
    }

    return null;
}) as any;

// Additional setup to run before tests to be implemented here.
// jest.setup.js or jest.setup.ts
// Critical: DataDog mocking must be at module level to prevent API calls
// jest.mock('@datadog/browser-logs');
// jest.mock('@datadog/browser-rum');

// Mock console.log
beforeAll(() => {

    jest.spyOn(console, 'log').mockImplementation(() => { }); // Silences console.log
    jest.spyOn(console, 'error').mockImplementation(() => { }); // Silences console.error
    jest.spyOn(console, 'warn').mockImplementation(() => { }); // Silences console.warn
    jest.spyOn(console, 'info').mockImplementation(() => { }); // Silences console.warn

    jest.spyOn(console, 'info').mockImplementation(() => { }); // Silences console.warn
});

afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    jest.restoreAllMocks();
});


import { setupIntersectionObserverMock, setupResizeObserverMock, setupMatchMediaMock } from './src/test/mocks';

// Mock sql.js global to avoid WASM errors in unit tests
// Mock sql.js global to avoid WASM errors in unit tests
// sql.js mock removed (Full Postgres Migration)

// import { AppDataSource } from '@/db/data-source';

beforeAll(async () => {
    setupIntersectionObserverMock();
    setupResizeObserverMock();
    setupMatchMediaMock();
    /*
    if (!AppDataSource.isInitialized) {
        // Suppress logs during init
        const originalLog = console.log;
        // console.log = jest.fn(); 
        try {
            await AppDataSource.initialize();
        } catch (error) {
            originalLog('Failed to initialize AppDataSource in jest.setup.ts', error);
        }
        // console.log = originalLog;
    }
    */
});

afterAll(async () => {
    /*
    if (AppDataSource.isInitialized) {
        await AppDataSource.destroy();
    }
    */
});