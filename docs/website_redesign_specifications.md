# Al-Ameen Matriculation Higher Secondary School Website Redesign Specification

## Project Overview
Transform the current Al-Ameen Matriculation Higher Secondary School website into a modern, aesthetically pleasing platform that incorporates subtle Islamic design elements while improving overall user experience. The redesign should maintain educational functionality while elevating visual appeal through thoughtful color schemes, typography, and layout structures.

## Current Website Issues
- Inconsistent and outdated color scheme lacking visual hierarchy
- Generic layout that fails to reflect the school's Islamic identity
- Poor mobile responsiveness and accessibility issues
- Inconsistent typography and spacing across pages
- Limited visual engagement and outdated UI components
- Navigation structure that hinders information discovery
- Missing visual cues for important content sections

## Design Direction

### Color Palette
Create a sophisticated color scheme inspired by Islamic art and architecture:

**Primary Colors:**
- Deep Teal (`#006D77`) - Reminiscent of classic Islamic tilework
- Royal Blue (`#1D3557`) - Represents knowledge and wisdom
- Emerald Green (`#2A9D8F`) - Symbolizes growth and prosperity

**Secondary Colors:**
- Warm Sand (`#E9C46A`) - Complementary accent for warmth
- Terracotta (`#E76F51`) - For highlighting important elements

**Neutral Tones:**
- Soft Ivory (`#F8F9FA`) - Background color for content areas
- Light Slate (`#E0E0E0`) - For subtle separations
- Charcoal (`#333333`) - For primary text

**Guidelines:**
- Use the 60-30-10 rule: 60% neutral backgrounds, 30% primary colors, 10% accent colors
- Ensure all color combinations meet WCAG 2.1 AA contrast requirements (minimum 4.5:1 for normal text)
- Apply colors consistently across all pages with semantic meaning (e.g., specific colors for calls-to-action)

### Typography

**Font Selection:**
- Primary Heading Font: Amiri (or similar Google Font) - A modern Arabic-inspired serif typeface
- Secondary Heading Font: Raleway - Clean, geometric sans-serif
- Body Text: Open Sans - Excellent readability at all sizes

**Typography Scale:**
- H1: 2.5rem (40px), weight 700
- H2: 2rem (32px), weight 600
- H3: 1.5rem (24px), weight 600
- H4: 1.25rem (20px), weight 600
- Body: 1rem (16px), weight 400
- Small/Caption: 0.875rem (14px), weight 400

**Spacing:**
- Implement consistent line-height (1.5 for body text, 1.2 for headings)
- Maintain proper white space between text blocks (minimum 1.5rem between sections)
- Use appropriate letter-spacing (tracking) for headings

### Islamic Design Elements

**Geometric Patterns:**
- Subtle Islamic geometric patterns as background elements and section dividers
- Use the 8-fold rosette pattern for decorative elements
- Apply star polygon patterns for accent backgrounds
- Incorporate girih tiles in footer designs

**Architectural Inspiration:**
- Pointed arch elements for content cards and important sections
- Muqarnas-inspired dropdown menus
- Arabesque patterns for borders and decorative frames
- Subtle mashrabiya-inspired overlay patterns for image containers

**Calligraphy:**
- Incorporate modern interpretations of Arabic calligraphy for decorative elements
- Use calligraphic-inspired icons for navigation
- Apply stylized bismillah as a subtle watermark for important sections

## Layout Structure

**Homepage:**
- Hero section with dynamic slider featuring school photos and mission statement
- 3-column grid for key information (News, Events, Announcements)
- Testimonial carousel with student/parent quotes
- Featured programs section with visual cards
- Achievement highlights with counter animations
- Interactive school calendar
- Social media integration and footer with sitemap

**Content Pages:**
- Consistent header with breadcrumb navigation
- Right-sidebar layout for supporting information
- Card-based content presentation for programs and courses
- Tabbed interfaces for content-heavy sections
- Image galleries with lightbox functionality
- FAQ accordions with smooth animations

**Navigation:**
- Sticky header with dropdown menus
- Mobile-friendly hamburger menu
- Clear visual indicators for current page
- Contextual sidebar navigation for deep content
- Back-to-top button for long pages
- Search functionality with predictive results

## Technical Specifications

**Framework & Libraries:**
- Bootstrap 5 as base framework
- SCSS for custom styling using BEM methodology
- Vanilla JavaScript with minimal dependencies
- AOS (Animate On Scroll) for subtle scroll animations
- Swiper.js for carousels and sliders

**Responsiveness:**
- Mobile-first approach with breakpoints at:
  - Small: 576px
  - Medium: 768px
  - Large: 992px
  - Extra-large: 1200px
- Flexible grid system with appropriate gutters
- Optimized images with srcset for different viewport sizes
- Touch-friendly interaction elements

**Accessibility:**
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Descriptive alt text for all images
- Keyboard navigation support
- Focus indicators for all interactive elements
- ARIA labels where appropriate
- Sufficient color contrast throughout

**Performance Optimization:**
- Lazy loading for images and non-critical content
- Minified CSS and JavaScript
- Browser caching implementation
- Optimized asset delivery
- Maximum page load time target: < 3 seconds on broadband

## Page-Specific Requirements

**Home Page:**
- Hero section with Islamic architectural influences
- Quick links to admissions, curriculum, and contact information
- News and events section with filter options
- Featured student work/achievements
- Testimonial carousel
- Vision and mission statements in visually distinctive sections

**About Us:**
- Timeline of school history with visual storytelling
- Leadership profiles with professional photos
- Core values presented with Islamic-inspired iconography
- School facilities showcase with virtual tour option
- Recognition and accreditations section

**Academics:**
- Program offerings with visual cards
- Curriculum overview with downloadable resources
- Faculty directory with filterable expertise areas
- Academic calendar with important dates highlighted
- Student resources section with helpful links

**Admissions:**
- Clear process steps with visual progress indicators
- Interactive application checklist
- Fee structure in easy-to-read tables
- Scholarship information
- FAQ section with expandable answers
- Downloadable forms section

**Student Life:**
- Image-rich galleries of student activities
- Clubs and extracurricular activities presented as visual cards
- Sports programs with schedule information
- Student achievements showcase
- Event calendar with filtering options

**Contact:**
- Interactive map with school location
- Directory of key contacts
- Social media links
- Transportation information

## Implementation Guidelines

1. Start with a comprehensive site audit to identify all content that needs to be migrated
2. Develop wireframes for all page templates before applying visual design
3. Create a component library with all UI elements
4. Build responsive prototypes for key pages
5. Implement base theme using SCSS variables for easy updates
6. Develop custom components for Islamic-inspired design elements
7. Ensure cross-browser compatibility across Chrome, Firefox, Safari, and Edge
8. Implement analytics tracking for user behavior insights
9. Create comprehensive documentation for content managers
10. Test thoroughly for accessibility and performance before launch

## Changelog Requirements

Maintain a detailed changelog in the following format:
# Al-Ameen School Website Redesign Changelog

All notable changes to the website redesign project will be documented in this file.

## [0.1.0] - 2025-05-06

### Added
- Initial project setup
- Created design specification document
- Established color palette with Islamic-inspired tones
- Defined typography system with appropriate font pairings
- Outlined Islamic design elements to incorporate
- Set up development environment with Bootstrap 5

### Changed
- N/A (Initial version)

### Fixed
- N/A (Initial version)

### Removed
- N/A (Initial version)
