export interface TechLogo {
  /** Display name, also used as the icon's accessible label. */
  name: string;
  /** Brand color as a hex string without the leading '#'. */
  hex: string;
  /** SVG path data on a 24x24 viewBox. Mutually exclusive with imageUrl. */
  path?: string;
  /** Image asset, for brands with no single-path icon available. */
  imageUrl?: string;
  /** Set when the path relies on even-odd filling to punch holes. */
  evenOdd?: boolean;
}

export interface CompaniesInfo {
  logoUrl: string;
  name: string;
  role: string;
  description: string;
}

export interface NavItem {
  label: string;
  icon: IconName;
  routerLink?: string;
  fragment?: string;
  externalLink?: string;
  expanded?: boolean;
  items?: NavItem[];
}

export interface BlogPost {
  title: string;
  summary: string;
  /** Human-readable date, e.g. 'August 2026'. */
  date: string;
  /** External URL where the post is published. */
  url: string;
  /** Publication name shown next to the date, e.g. 'Medium'. */
  source: string;
  readingTime?: string;
}

export type IconName =
  | 'mail'
  | 'pen'
  | 'home'
  | 'briefcase'
  | 'user'
  | 'ticket'
  | 'code'
  | 'building'
  | 'external-link'
  | 'github'
  | 'linkedin'
  | 'menu'
  | 'x'
  | 'chevron-down'
  | 'chevron-up';