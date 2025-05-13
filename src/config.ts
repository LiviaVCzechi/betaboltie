// Site Configuration
export const SITE_CONFIG = {
  title: 'TechInsights',
  description: 'Corporate insights and resources on the latest electronic technologies and trends.',
  url: 'https://techinsights.com', // Replace with your actual domain
  language: 'en-US',
  postsPerPage: 9,
  postsPerPageHome: 6,
  featuredPostCount: 1,
};

// Navigation Links
export const NAV_LINKS = [
  { text: 'Home', href: '/' },
  { text: 'Blog', href: '/blog' },
  { text: 'Categories', href: '/categories' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Twitter', icon: 'twitter', href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
  { name: 'GitHub', icon: 'github', href: 'https://github.com' },
  { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
];

// Footer Link Sections
export const FOOTER_LINKS = [
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Our Team', href: '/team' },
      { text: 'Careers', href: '/careers' },
      { text: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { text: 'Blog', href: '/blog' },
      { text: 'Case Studies', href: '/case-studies' },
      { text: 'Whitepapers', href: '/whitepapers' },
      { text: 'Guides', href: '/guides' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Service', href: '/terms' },
      { text: 'Cookie Policy', href: '/cookies' },
      { text: 'Accessibility', href: '/accessibility' },
    ]
  }
];