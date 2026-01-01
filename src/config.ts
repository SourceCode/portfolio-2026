/**
 * Global application configuration.
 * Serves as a central source of truth for feature flags, keys, and static constants.
 */
export const config = {
  /** Application metadata */
  app: {
    name: "Ryan Rentfro Portfolio",
    description: "Executive portfolio site featuring polished aesthetics, Three.js shaders, frosted glass UI, and typography-first design.",
    version: "1.0.0",
  },
  
  /** Feature flags to toggle functionality across the app */
  features: {
    /** Toggle for Google ReCAPTCHA on contact form. Disabled by default for dev/demo. */
    enableCaptcha: false, 
  },
  
  /** External API keys and Service Identifiers */
  keys: {
    /** Google ReCAPTCHA v2 Site Key. Using Google's standard test key for now. */
    captchaSiteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", 
  },
  
  /** Social Media URLs */
  social: {
    linkedin: "https://linkedin.com/in/ryanrentfro",
    youtube: "https://youtube.com/@ryanrentfro",
    github: "https://github.com/ryanrentfro",
  },
  
  /** Contact Info */
  contact: {
    email: "contact@ryanrentfro.com"
  }
};