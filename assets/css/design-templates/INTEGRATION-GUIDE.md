# Design Template Integration Guide

This guide provides instructions for implementing your chosen design template from the four options provided.

## Step 1: Choose Your Design Template

Review the four design templates in the `design-preview.html` file and select the one that best matches your vision for the Al-Ameen School website.

## Step 2: Implementation Options

There are two ways to implement the chosen design:

### Option A: Replace the Main CSS File

1. Navigate to `assets/css/design-templates/`
2. Copy your chosen template (e.g., `design-template-1.css`)
3. Replace the contents of `assets/css/main.css` with the selected template
4. Test the site to ensure all pages display correctly

### Option B: Use the Template as an Import

1. Keep your existing `main.css` file
2. Add an import statement at the top:

```css
/* Import the chosen design template */
@import url('design-templates/design-template-1.css');

/* Your additional custom styles */
/* ... */
```

## Step 3: HTML Structure Requirements

Each design template relies on specific HTML structure and class names. Ensure your HTML files include the following elements:

### Header Structure
```html
<header class="header">
  <div class="container header__container">
    <div class="header__logo">
      <img src="assets/images/logo-placeholder.svg" alt="Al-Ameen School" class="header__logo-img">
      <span class="header__logo-text">Al-Ameen School</span>
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="#" class="nav__link active">Home</a></li>
        <!-- Additional nav items -->
      </ul>
    </nav>
  </div>
</header>
```

### Hero Section
```html
<section class="hero bg-pattern">
  <div class="hero__overlay"></div>
  <div class="hero__pattern"></div>
  <div class="container">
    <div class="hero__content">
      <!-- Hero content -->
    </div>
  </div>
</section>
```

### Section Titles
```html
<h2 class="section__title section-title section-title--center">Section Title</h2>
```

### Cards and Features
```html
<div class="feature-card card--pattern">
  <div class="feature__icon">
    <i class="bi bi-icon-name"></i>
  </div>
  <h3 class="feature__title">Title</h3>
  <p class="feature__text">Content</p>
</div>
```

### Footer Structure
```html
<footer class="footer">
  <div class="footer__pattern"></div>
  <div class="container">
    <div class="footer__grid">
      <!-- Footer columns -->
    </div>
    <div class="footer__bottom">
      <!-- Copyright and social links -->
    </div>
  </div>
</footer>
```

## Step 4: Design Elements

### For Templates 1-3 (Islamic Design Elements)
These templates include specific Islamic design elements that can be applied to various components:

1. **Geometric Patterns**: Applied with the `bg-pattern` class
2. **Arch Elements**: Use `arch-card` class for cards with Islamic arch styling
3. **Decorative Dividers**: Use the `divider` class for section dividers
4. **Star Patterns**: Added automatically to elements with `card--pattern` class

### For Template 4 (Modern Charity Design Elements)
Template 4 uses modern design elements that can be applied to various components:

1. **Gradient Overlays**: Applied with the `hero__overlay` class
2. **Counter Sections**: Use `counter-section` class for statistics display
3. **Announcement Banner**: Use `announcement-banner` class for important notices
4. **Modern Cards**: Added with `card` and `feature-card` classes

## Step 5: Customizing Colors and Typography

To adjust the colors or typography to better match your specific needs:

1. Open your chosen CSS file
2. Locate the `:root` section at the top
3. Modify the color variables as needed:

### For Templates 1-3:
```css
:root {
  --color-primary: #0c3f3c; /* Change to your preferred primary color */
  --color-accent: #d4a63a; /* Change to your preferred accent color */
  /* Additional variables */
}
```

### For Template 4:
```css
:root {
  --color-primary: #0d4f4a; /* Deep teal */
  --color-secondary: #245237; /* Forest green */
  --color-accent: #e1b146; /* Gold */
  /* Additional variables */
}
```

## Step 6: Adding Islamic Patterns to New Sections

To add Islamic patterns to new sections you create:

1. Add the `bg-pattern` class to the section container
2. For darker backgrounds, add `bg-pattern--dark` class
3. For subtle patterns, add inline style with lower opacity:
   ```html
   <section class="bg-pattern" style="--pattern-opacity: 0.03;">
     <!-- Content -->
   </section>
   ```

## Step 7: Responsive Considerations

All templates are fully responsive, but consider these points:

1. Test on multiple device sizes to ensure proper display
2. Use the provided responsive utility classes for adjustments
3. For complex layouts, utilize the Bootstrap grid system

## Step 8: Accessibility Requirements

Ensure your implementation maintains accessibility standards:

1. Maintain proper heading hierarchy (h1 → h2 → h3)
2. Keep text contrast ratios above 4.5:1
3. Ensure all interactive elements have visible focus states
4. Add appropriate ARIA labels to decorative elements

## Troubleshooting

If you encounter issues with the design implementation:

1. Check HTML structure against the examples in this guide
2. Verify all required CSS classes are properly applied
3. Check for any JavaScript errors in the console
4. Ensure all required assets (fonts, images, icons) are properly loaded

For additional help, refer to the documentation in the `docs/` directory.
