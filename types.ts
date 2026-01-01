/**
 * types.ts
 * Defines the core data structures used throughout the portfolio application.
 */

/**
 * Represents a single portfolio project.
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Display title of the project */
  title: string;
  /** URL-friendly identifier used in routes */
  slug: string;
  /** Short one-liner summary displayed on cards */
  summary: string;
  /** Full detailed description of the project, including architecture and outcome */
  description: string;
  /** Array of technology or category tags (e.g., "AI/ML", "React") */
  tags: string[];
  /** Year or date range of the project execution */
  year: string;
  /** URL to the thumbnail or hero image */
  imageUrl: string;
  /** Whether this project should be highlighted on the home page */
  featured?: boolean;
}

/**
 * Represents a blog post or thought leadership article.
 */
export interface BlogPost {
  /** Unique identifier for the post */
  id: string;
  /** Title of the article */
  title: string;
  /** URL-friendly slug */
  slug: string;
  /** Short preview text for the index page */
  excerpt: string;
  /** Markdown or text content of the article */
  content: string;
  /** Publication date string */
  date: string;
  /** Estimated reading time (e.g. "5 min") */
  readTime: string;
  /** Relevant topic tags */
  tags: string[];
}

/**
 * Represents a professional role in the career timeline.
 */
export interface CareerItem {
  /** Unique identifier */
  id: string;
  /** Job Title */
  role: string;
  /** Company Name */
  company: string;
  /** Date range (e.g. "2020 - 2023") */
  period: string;
  /** Description of responsibilities and achievements */
  description: string;
}

/**
 * Structure for the new rich About Page content
 */
export interface AboutPageContent {
  executiveSummary: string;
  philosophy: string;
  leadershipStrengths: {
    title: string;
    description: string;
  }[];
  functionalExpertise: {
    category: string;
    items: string[];
  }[];
  strategicFocus: {
    title: string;
    description: string;
    bullets: string[];
  };
  valueProposition: string;
}

/**
 * Redux State interface for the Content Slice.
 */
export interface ContentState {
  /** List of all projects */
  projects: Project[];
  /** List of all blog posts */
  blogPosts: BlogPost[];
  /** Career timeline items */
  career: CareerItem[];
  /** Rich content for the About page */
  aboutContent: AboutPageContent;
  /** Loading state indicator */
  loading: boolean;
}
