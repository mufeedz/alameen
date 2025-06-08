# Campuses Page Refactoring Plan

## Overview

This document outlines a comprehensive plan to refactor the `/campuses.html` page to ensure design consistency and alignment with the rest of the Al-Ameen School website. The refactoring will focus on bringing the page in line with the design patterns, components, and themes used across the index, about, academics, and admissions pages.

## Current State Analysis

The current campuses page has a basic structure in place but lacks many of the refined design elements and consistent styling found in the other pages. Key observations:

1. **Page Structure**: Basic structure exists but needs refinement
2. **Content Components**: Campus information is present but not fully developed 
3. **Design Elements**: Missing many of the Islamic design patterns used on other pages
4. **Responsiveness**: Needs improvement for consistency across devices
5. **Visual Hierarchy**: Could be enhanced for better user experience

## Design Pattern Alignment

Based on analysis of the other pages, the following design patterns should be incorporated:

### 1. Header & Page Introduction
- Implement consistent page header styling with gradient text accents
- Add proper breadcrumb navigation matching other pages
- Include a concise page description that sets context

### 2. Islamic Design Elements
- Incorporate pattern backgrounds currently used in other pages:
  - `pattern-rosette-bg` (used in about.html and admissions.html)
  - `pattern-star-bg` (used in academics.html)
  - `pattern-girih-bg` (used in admissions.html process overview section)
- Add the `islamic-motif` decorative element (used in the CTA sections)
- Implement section dividers currently in use:
  - `section-divider-alt` (arch pattern)
  - `gradient-divider` (minimal gradient line)

### 3. Component Styling
- Update card styles to match existing components:
  - `card-system` with `card-feature-system` for feature highlights (used in admissions.html)
  - `process-feature-card` for step-by-step content (used in admissions.html)
  - `featured-card` with shadow effects (used in about.html)
- Implement the `mission-grid` section with `colored-bg-overlay` (used in academics.html and admissions.html)
- Add `img-hover-zoom` effect with `arabesque-border` for images (used in about.html)

### 4. Content Organization
- Improve the campus navigation system
- Structure the facilities section similar to the academics page
- Create a consistent comparison table matching other tabular content

### 5. Campus-Specific Information
- Highlight the gender-specific education model (co-ed up to 5th grade, girls only 5th-12th at main campus)
- Emphasize the all-grades co-ed model at the second campus
- Create visual distinction between campuses while maintaining design cohesion

## Refactoring Tasks

### 1. Page Header Section
- [ ] Update the page header with proper title styling and breadcrumbs
- [ ] Add a descriptive paragraph about the campuses
- [ ] Implement pattern background for the header section

### 2. Campus Navigation
- [ ] Create a visually appealing navigation system with cards or tabs
- [ ] Add smooth scroll functionality for single-page navigation
- [ ] Include visual indicators for current campus section

### 3. Main Campus Section
- [ ] Implement the arabesque-border image styling
- [ ] Add the pattern-rosette-bg background
- [ ] Create feature highlights with mission-grid styling
- [ ] Add details about the co-ed/girls-only education model
- [ ] Enhance the facilities list with proper card styling
- [ ] Update the map section with proper styling and info

### 4. Annex Campus Section
- [ ] Mirror the styling of the main campus section for consistency
- [ ] Highlight the all-grades co-ed model
- [ ] Implement contrasting background pattern (star or girih)
- [ ] Ensure proper section dividers between campuses

### 5. Campus Comparison
- [ ] Redesign the comparison table with proper styling
- [ ] Add gradient accents and proper typography
- [ ] Ensure mobile responsiveness

### 6. Facilities Overview
- [ ] Update the facilities section to match academics page facilities section
- [ ] Implement proper card styling with icons
- [ ] Add subtle hover effects for interactive elements

### 7. CTA Section
- [ ] Update the CTA section with consistent styling from other pages
- [ ] Add proper button styling and animations
- [ ] Include the Islamic motif background

### 8. Technical Implementation
- [ ] Ensure all JavaScript functions are properly implemented
- [ ] Add proper ARIA attributes for accessibility
- [ ] Ensure responsive behavior across all viewport sizes
- [ ] Optimize image loading for performance

## Design Elements to Incorporate

### Visual Elements
- Gradient text accents for headers
- Arabesque borders for images
- Islamic pattern backgrounds
- Geometric section dividers
- Mission grid layout for highlights

### Interactive Elements
- Image hover zoom effects
- Button hover animations
- Smooth scroll behavior
- Campus gallery swiper functionality

### Typography
- Consistent use of font hierarchy
- Arabic calligraphy accents where appropriate
- Proper emphasis for important information

## Campus-Specific Content Focus

### Main Campus
- Highlight the transition from co-ed (up to 5th grade) to girls-only (5th-12th)
- Showcase the larger facilities and historical significance
- Emphasize traditional aspects of education

### Annex Campus
- Emphasize the all-grades co-ed model
- Highlight modern facilities and progressive approach
- Focus on the supportive learning environment

## Implementation Plan

1. **Phase 1**: Update page structure and layout
2. **Phase 2**: Implement design elements and styling
3. **Phase 3**: Enhance interactive elements
4. **Phase 4**: Optimize for performance and accessibility
5. **Phase 5**: Testing and refinement

## Conclusion

This refactoring plan will bring the campuses page in line with the design and theme of the rest of the Al-Ameen School website. The implementation should prioritize visual consistency, proper information hierarchy, and seamless user experience while highlighting the unique aspects of each campus.

The refactored page will clearly communicate the distinctive educational approaches of each campus (co-ed/girls-only at main campus vs. all-grades co-ed at the second campus) while maintaining the overall brand identity and design language of the website.
