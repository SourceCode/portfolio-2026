export const config = {
  contact: {
    email: 'hello@rentfro.net', // Placeholder
  },
  features: {
    enableCaptcha: false, // Default to false if no key
  },
  keys: {
    captchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '',
  },
  siteUrl: 'https://rentfro.net',
  social: {
    github: 'https://github.com/SourceCode',
    linkedin: 'https://linkedin.com/in/ryanrentfro',
    youtube: 'https://youtube.com/@LowTideNinja', // Placeholder
  },
};