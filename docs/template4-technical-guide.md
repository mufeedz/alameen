# Template 4 Technical Implementation Guide

This document provides technical instructions for implementing Template 4 across the entire Al-Ameen School website. It includes code snippets, scripts, and detailed steps for developers.

## CSS Implementation Methods

### Method 1: Replace main.css (Recommended)

This method involves replacing the entire contents of `main.css` with Template 4's CSS:

```powershell
# PowerShell command to replace main.css with Template 4 CSS
Copy-Item -Path "c:\Data\repos\alameen\assets\css\design-templates\design-template-4.css" -Destination "c:\Data\repos\alameen\assets\css\main.css" -Force
```

### Method 2: Import Method

Alternatively, keep the existing `main.css` and import Template 4 at the top:

```css
/* At the top of main.css */
@import url('design-templates/design-template-4.css');

/* Existing custom styles remain below */
```

## Using the Automated Script

The project includes a PowerShell script for applying templates. To apply Template 4:

```powershell
# Navigate to the design templates directory
cd c:\Data\repos\alameen\assets\css\design-templates

# Run the script to apply Template 4
.\apply-template.ps1 -TemplateNumber 4
```

## HTML Structure Updates

### Header Component Update

The current header in `partials/header.html` needs to be updated to match Template 4's structure. Here's how to modify it:

Current header:
```html
<!-- Sticky Bootstrap 5 Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm" aria-label="Main navigation">
  <div class="container-xl">
    <a class="navbar-brand d-flex align-items-center" href="index.html">
      <img src="assets/images/logo-placeholder.png" alt="Al-Ameen School Logo" width="40" height="40" class="me-2">
      <span class="fw-bold" style="color: #1c4c4c;">Al-Ameen School</span>
    </a>
    <!-- More navbar code -->
  </div>
</nav>
```

Template 4 header:
```html
<!-- Announcement Banner -->
<div class="announcement-banner">
  <div class="container">
    <p>Admissions Open for 2025-2026 Academic Year! <a href="admissions.html">Apply Now</a></p>
  </div>
</div>

<!-- Header -->
<header class="header">
  <div class="container header__container">
    <div class="header__logo">
      <img src="assets/images/logo-placeholder.png" alt="Al-Ameen School Logo" class="header__logo-img">
      <span class="header__logo-text">Al-Ameen School</span>
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="index.html" class="nav__link active">Home</a></li>
        <!-- More nav items -->
      </ul>
    </nav>
  </div>
</header>
```

### Footer Component Update

The current footer in `partials/footer.html` needs to be updated to match Template 4's structure:

Current footer:
```html
<footer class="bg-light pt-4 pb-3 position-relative">
  <div class="footer-divider"></div>
  <div class="container-xl">
    <div class="row gy-4">
      <div class="col-md-4">
        <h5 class="fw-bold mb-3 text-primary-theme">Al-Ameen School</h5>
        <!-- More footer content -->
      </div>
      <!-- More footer columns -->
    </div>
  </div>
</footer>
```

Template 4 footer:
```html
<footer class="footer">
  <div class="footer__pattern"></div>
  <div class="container">
    <div class="footer__grid">
      <div>
        <div class="footer__logo">
          <img src="assets/images/logo-placeholder.png" alt="Al-Ameen School Logo" class="footer__logo-img">
          <span class="footer__logo-text">Al-Ameen School</span>
        </div>
        <!-- More footer content -->
      </div>
      <!-- More footer columns -->
    </div>
    <div class="footer__bottom">
      <p class="footer__copyright">&copy; 2025 Al-Ameen School. All rights reserved.</p>
      <div class="footer__social">
        <!-- Social links -->
      </div>
    </div>
  </div>
</footer>
```

## JavaScript Requirements

Template 4 requires some JavaScript functionality for features like sticky header, mobile navigation, and animations. Here's what needs to be added to `main.js`:

```javascript
// Sticky Header
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
  
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavClose = document.querySelector('.mobile-nav__close');
  
  if (mobileNavToggle && mobileNav) {
    mobileNavToggle.addEventListener('click', function() {
      mobileNav.classList.add('mobile-nav--open');
      document.body.style.overflow = 'hidden';
    });
    
    mobileNavClose.addEventListener('click', function() {
      mobileNav.classList.remove('mobile-nav--open');
      document.body.style.overflow = '';
    });
  }
  
  // Animation on scroll
  const animatedElements = document.querySelectorAll('.animate-fadeIn');
  
  const animateOnScroll = function() {
    animatedElements.forEach(function(element) {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
});
```

## Component Conversion Reference

### Bootstrap to Template 4 Class Conversion

| Bootstrap Class | Template 4 Class |
|-----------------|------------------|
| `navbar` | `header` |
| `navbar-brand` | `header__logo` |
| `nav-item` | `nav__item` |
| `nav-link` | `nav__link` |
| `container-xl` | `container` |
| `row` | `row` |
| `col-md-4` | `col-md-4` |
| `btn btn-primary` | `btn btn--primary` |
| `btn btn-outline-primary` | `btn btn--outline` |
| `card` | `card` |
| `card-img-top` | `card__image` |
| `card-body` | `card__content` |
| `card-title` | `card__title` |
| `card-text` | `card__text` |

### Image Handling

Template 4 uses specific image handling techniques:

1. Hero images:
```html
<div class="hero__image-container">
  <img src="assets/images/image.jpg" alt="Description" class="hero__image">
  <div class="hero__overlay"></div>
</div>
```

2. Card images:
```html
<img src="assets/images/image.jpg" alt="Description" class="card__image">
```

3. Gallery images:
```html
<div class="gallery-item">
  <img src="assets/images/image.jpg" alt="Description" class="gallery-item__image">
  <div class="gallery-item__overlay">
    <div class="gallery-item__content">
      <h3 class="gallery-item__title">Title</h3>
      <p class="gallery-item__text">Description</p>
    </div>
  </div>
</div>
```

## Converting Specific Components

### Converting Hero Sections

Current hero structure:
```html
<section class="hero position-relative">
  <div class="swiper hero-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="assets/images/slider-1.png" class="w-100" alt="School campus view with students">
        <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div class="hero-overlay islamic-motif position-absolute top-0 start-0 w-100 h-100"></div>
        <div class="hero-content position-absolute top-50 start-50 translate-middle text-center text-white">
          <!-- Hero content -->
        </div>
      </div>
      <!-- More slides -->
    </div>
  </div>
</section>
```

Template 4 hero structure:
```html
<section class="hero">
  <div class="hero__image-container">
    <img src="assets/images/slider-1.png" alt="School campus view with students" class="hero__image">
    <div class="hero__overlay"></div>
  </div>
  <div class="container">
    <div class="hero__content">
      <h1 class="hero__title">Welcome to <span>Al-Ameen</span> School</h1>
      <p class="hero__subtitle">Empowering Knowledge, Inspiring Faith</p>
      <div class="hero__btns">
        <a href="admissions.html" class="btn btn--primary btn--lg">Apply Now</a>
        <a href="about.html" class="btn btn--outline btn--lg">Learn More</a>
      </div>
    </div>
  </div>
</section>
```

### Converting Card Components

Current card structure:
```html
<div class="card h-100 shadow-sm">
  <img src="assets/images/image.jpg" class="card-img-top" alt="Description">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card description text goes here.</p>
    <a href="#" class="btn btn-outline-primary">Read More</a>
  </div>
</div>
```

Template 4 card structure:
```html
<div class="card">
  <img src="assets/images/image.jpg" alt="Description" class="card__image">
  <div class="card__content">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Card description text goes here.</p>
    <a href="#" class="btn btn--text">Read More</a>
  </div>
</div>
```

## Handling Responsive Behavior

Template 4 uses a mobile-first approach with specific breakpoints:

- Mobile: < 576px
- Tablet: 576px - 768px
- Small Desktop: 768px - 992px
- Desktop: > 992px

Key responsive classes:

```css
@media (max-width: 992px) {
  .container {
    max-width: 960px;
  }
  
  .hero__title {
    font-size: var(--fs-6xl);
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 720px;
  }
  
  .section {
    padding: var(--space-10) 0;
  }
  
  .hero__title {
    font-size: var(--fs-5xl);
  }
  
  /* More mobile styles */
}
```

## Testing Procedure

After implementing Template 4, follow this testing procedure:

1. **Visual Inspection**
   - Check all pages for visual consistency
   - Verify spacing, typography, and color usage
   - Ensure all components match Template 4 design

2. **Responsive Testing**
   - Test at multiple breakpoints:
     - Desktop (>992px)
     - Tablet (768px-992px)
     - Mobile (<768px)
   - Verify navigation collapses properly
   - Check all images are responsive

3. **Functionality Testing**
   - Test all links and buttons
   - Verify form submissions
   - Test interactive components (sliders, accordions, etc.)

4. **Cross-Browser Testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

5. **Performance Testing**
   - Run Lighthouse audit
   - Check page load times
   - Verify image optimization

## Troubleshooting Common Issues

### CSS Conflicts

If you encounter CSS conflicts:

1. Check for duplicate class names
2. Use browser inspector to identify conflicting styles
3. Add more specific selectors or use `!important` sparingly

### JavaScript Errors

If JavaScript features don't work:

1. Check browser console for errors
2. Verify script inclusion order
3. Ensure dependencies are loaded before custom scripts

### Responsive Issues

If responsive behavior is incorrect:

1. Verify viewport meta tag is correct
2. Check media query breakpoints
3. Test with browser device emulation
4. Check for fixed width elements

## Creating New Pages with Template 4

When creating new pages:

1. Start with this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title - Al-Ameen School</title>
  
  <!-- Performance optimizations -->
  <link rel="preload" href="assets/images/logo-placeholder.png" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="assets/css/main.css">
  <meta name="description" content="Page description">
  
  <!-- For WCAG compliance -->
  <meta name="theme-color" content="#0d4f4a">
</head>
<body>
  <!-- Header Include -->
  <div id="header-include"></div>
  
  <main id="main-content">
    <!-- Page Content Here -->
  </main>
  
  <!-- Footer Include -->
  <div id="footer-include"></div>
  
  <!-- JavaScript Dependencies -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

2. Include Template 4 components from the component guide
3. Follow the page structure guidelines from the page-by-page guide
