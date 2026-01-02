/**
 * types.ts
 * Defines the core data structures used throughout the portfolio application.
 */

/**
 * Represents a single portfolio project.
 */
export interface Project {
  /** Full detailed description of the project, including architecture and outcome */
  description: string;
  /** Whether this project should be highlighted on the home page */
  featured?: boolean;
  /** Unique identifier for the project */
  id: string;
  /** URL to the thumbnail or hero image */
  imageUrl: string;
  /** URL-friendly identifier used in routes */
  slug: string;
  /** Short one-liner summary displayed on cards */
  summary: string;
  /** Array of technology or category tags (e.g., "AI/ML", "React") */
  tags: string[];
  /** Display title of the project */
  title: string;
  /** Year or date range of the project execution */
  year: string;
}

/**
 * Represents a blog post or thought leadership article.
 */
export interface BlogPost {
  /** Markdown or text content of the article */
  content: string;
  /** Publication date string */
  date: string;
  /** Short preview text for the index page */
  excerpt: string;
  /** Unique identifier for the post */
  id: string;
  /** Estimated reading time (e.g. "5 min") */
  readTime: string;
  /** URL-friendly slug */
  slug: string;
  /** Relevant topic tags */
  tags: string[];
  /** Title of the article */
  title: string;
}

/**
 * Represents a professional role in the career timeline.
 */
export interface CareerItem {
  /** Company Name */
  company: string;
  /** Description of responsibilities and achievements */
  description: string;
  /** Unique identifier */
  id: string;
  /** Date range (e.g. "2020 - 2023") */
  period: string;
  /** Job Title */
  role: string;
}

/**
 * Structure for the new rich About Page content
 */
export interface AboutPageContent {
  executiveSummary: string;
  functionalExpertise: {
    category: string;
    items: string[];
  }[];
  leadershipStrengths: {
    description: string;
    title: string;
  }[];
  philosophy: string;
  strategicFocus: {
    bullets: string[];
    description: string;
    title: string;
  };
  valueProposition: string;
}

/**
 * Redux State interface for the Content Slice.
 */
export interface ContentState {
  /** Rich content for the About page */
  aboutContent: AboutPageContent;
  /** List of all blog posts */
  blogPosts: BlogPost[];
  /** Career timeline items */
  career: CareerItem[];
  /** Loading state indicator */
  loading: boolean;
  /** List of all projects */
  projects: Project[];
}
