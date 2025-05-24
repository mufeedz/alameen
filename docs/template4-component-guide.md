# Template 4 Component Guide

This document provides detailed implementation guidance for each component in Template 4. Use this as a reference when updating HTML structure to match the Template 4 design pattern.

## Navigation Components

### Announcement Banner

```html
<!-- Announcement Banner -->
<div class="announcement-banner">
  <div class="container">
    <p>Admissions Open for 2025-2026 Academic Year! <a href="admissions.html">Apply Now</a></p>
  </div>
</div>
```

### Header Navigation

```html
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
        <li class="nav__item"><a href="about.html" class="nav__link">About</a></li>
        <li class="nav__item"><a href="academics.html" class="nav__link">Academics</a></li>
        <li class="nav__item"><a href="admissions.html" class="nav__link">Admissions</a></li>
        <li class="nav__item"><a href="campuses.html" class="nav__link">Campuses</a></li>
        <li class="nav__item"><a href="community.html" class="nav__link">Community</a></li>
        <li class="nav__item"><a href="gallery.html" class="nav__link">Gallery</a></li>
        <li class="nav__item"><a href="contact.html" class="nav__link">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

### Mobile Navigation

```html
<!-- Mobile Navigation -->
<button class="mobile-nav-toggle" aria-label="Toggle navigation menu">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
</button>
<div class="mobile-nav">
  <div class="mobile-nav__header">
    <div class="header__logo">
      <img src="assets/images/logo-placeholder.png" alt="Al-Ameen School Logo" class="header__logo-img">
      <span class="header__logo-text">Al-Ameen School</span>
    </div>
    <button class="mobile-nav__close" aria-label="Close navigation menu">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>
  <nav>
    <ul class="mobile-nav__list">
      <li class="mobile-nav__item"><a href="index.html" class="mobile-nav__link active">Home</a></li>
      <li class="mobile-nav__item"><a href="about.html" class="mobile-nav__link">About</a></li>
      <li class="mobile-nav__item"><a href="academics.html" class="mobile-nav__link">Academics</a></li>
      <li class="mobile-nav__item"><a href="admissions.html" class="mobile-nav__link">Admissions</a></li>
      <li class="mobile-nav__item"><a href="campuses.html" class="mobile-nav__link">Campuses</a></li>
      <li class="mobile-nav__item"><a href="community.html" class="mobile-nav__link">Community</a></li>
      <li class="mobile-nav__item"><a href="gallery.html" class="mobile-nav__link">Gallery</a></li>
      <li class="mobile-nav__item"><a href="contact.html" class="mobile-nav__link">Contact</a></li>
    </ul>
  </nav>
</div>
```

## Hero Sections

### Full-Width Hero

```html
<section class="hero">
  <div class="hero__image-container">
    <img src="assets/images/slider-1.png" alt="Students at Al-Ameen School" class="hero__image">
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

### Page Header Hero

```html
<section class="page-hero">
  <div class="page-hero__image-container">
    <img src="assets/images/about-header.jpg" alt="About Al-Ameen School" class="page-hero__image">
    <div class="page-hero__overlay"></div>
  </div>
  <div class="container">
    <div class="page-hero__content">
      <h1 class="page-hero__title">About Us</h1>
      <nav aria-label="breadcrumb" class="breadcrumb">
        <ol class="breadcrumb__list">
          <li class="breadcrumb__item"><a href="index.html" class="breadcrumb__link">Home</a></li>
          <li class="breadcrumb__item breadcrumb__item--active" aria-current="page">About Us</li>
        </ol>
      </nav>
    </div>
  </div>
</section>
```

## Section Components

### Section with Title

```html
<section class="section">
  <div class="container">
    <h2 class="section__title">Our Mission</h2>
    <p>Section content goes here...</p>
  </div>
</section>
```

### Section with Centered Title

```html
<section class="section">
  <div class="container">
    <h2 class="section__title section-title--center">Our Values</h2>
    <p>Section content goes here...</p>
  </div>
</section>
```

### Features Grid

```html
<section class="section section-bg-gray">
  <div class="container">
    <h2 class="section__title section-title--center">Why Choose Us</h2>
    <div class="features__grid">
      <div class="feature-card">
        <div class="feature__icon">
          <i class="bi bi-book"></i>
        </div>
        <h3 class="feature__title">Quality Education</h3>
        <p class="feature__text">We provide excellent academic programs that prepare students for success.</p>
      </div>
      <!-- More feature cards -->
    </div>
  </div>
</section>
```

### Statistics Display

```html
<section class="section section-bg-primary">
  <div class="container">
    <h2 class="section__title section-title--center">Our Impact</h2>
    <div class="stats-container">
      <div class="stat-item">
        <div class="stat-item__number">1500+</div>
        <div class="stat-item__label">Students</div>
      </div>
      <!-- More stat items -->
    </div>
  </div>
</section>
```

## Card Components

### Basic Card

```html
<div class="card">
  <img src="assets/images/card-image.jpg" alt="Description" class="card__image">
  <div class="card__content">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Card description text goes here.</p>
    <a href="#" class="btn btn--text">Read More</a>
  </div>
</div>
```

### Program Card

```html
<div class="program-card">
  <div class="program-card__inner">
    <h3 class="program-card__title">Primary Education</h3>
    <p class="program-card__text">Our primary education program focuses on building strong foundations.</p>
    <a href="#" class="btn btn--text">Learn More</a>
  </div>
</div>
```

### Event Card

```html
<div class="event-card">
  <div class="event-card__date">
    <span class="event-card__day">15</span>
    <span class="event-card__month">JUN</span>
  </div>
  <div class="event-card__content">
    <h3 class="event-card__title">Annual Sports Day</h3>
    <p class="event-card__text">Join us for our annual sports day celebration.</p>
    <div class="event-card__details">
      <span><i class="bi bi-clock"></i> 9:00 AM</span>
      <span><i class="bi bi-geo-alt"></i> Main Campus</span>
    </div>
  </div>
</div>
```

## Call-to-Action Components

### CTA Section

```html
<section class="cta-section">
  <div class="container">
    <h2 class="cta__title">Ready to Join Our School?</h2>
    <p class="cta__text">Enroll your child for the upcoming academic year and give them the gift of quality education.</p>
    <div class="cta__btns">
      <a href="admissions.html" class="btn btn--accent btn--lg">Apply Now</a>
      <a href="contact.html" class="btn btn--outline btn--lg">Contact Us</a>
    </div>
  </div>
</section>
```

## Footer Components

### Main Footer

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
        <p class="footer__about">Al-Ameen Matriculation Higher Secondary School is committed to providing quality education with Islamic values.</p>
      </div>
      <div>
        <h4 class="footer__title">Quick Links</h4>
        <ul class="footer__links">
          <li class="footer__link-item"><a href="about.html" class="footer__link">About Us</a></li>
          <li class="footer__link-item"><a href="academics.html" class="footer__link">Academics</a></li>
          <li class="footer__link-item"><a href="admissions.html" class="footer__link">Admissions</a></li>
          <li class="footer__link-item"><a href="contact.html" class="footer__link">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer__title">Contact Us</h4>
        <div class="footer__contact-item">
          <i class="bi bi-geo-alt footer__contact-icon"></i>
          <span>123 Main Road, City, State 600001</span>
        </div>
        <div class="footer__contact-item">
          <i class="bi bi-telephone footer__contact-icon"></i>
          <span>+91 12345 67890</span>
        </div>
        <div class="footer__contact-item">
          <i class="bi bi-envelope footer__contact-icon"></i>
          <span>info@alameen.edu</span>
        </div>
      </div>
      <div>
        <h4 class="footer__title">Newsletter</h4>
        <p>Subscribe to our newsletter for updates.</p>
        <form class="footer__form">
          <input type="email" placeholder="Your Email" class="footer__input">
          <button type="submit" class="btn btn--accent btn--sm">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copyright">&copy; 2025 Al-Ameen School. All rights reserved.</p>
      <div class="footer__social">
        <a href="#" class="footer__social-link" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="footer__social-link" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="footer__social-link" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="footer__social-link" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
      </div>
    </div>
  </div>
</footer>
```

## Form Components

### Contact Form

```html
<form class="form">
  <div class="form__group">
    <label for="name" class="form__label">Name</label>
    <input type="text" id="name" class="form__input" placeholder="Your Name">
  </div>
  <div class="form__group">
    <label for="email" class="form__label">Email</label>
    <input type="email" id="email" class="form__input" placeholder="Your Email">
  </div>
  <div class="form__group">
    <label for="subject" class="form__label">Subject</label>
    <input type="text" id="subject" class="form__input" placeholder="Subject">
  </div>
  <div class="form__group">
    <label for="message" class="form__label">Message</label>
    <textarea id="message" class="form__textarea" placeholder="Your Message" rows="5"></textarea>
  </div>
  <button type="submit" class="btn btn--primary">Send Message</button>
</form>
```

## Media Components

### Gallery Grid

```html
<div class="gallery-grid">
  <div class="gallery-item">
    <img src="assets/images/gallery-1.jpg" alt="Gallery Image" class="gallery-item__image">
    <div class="gallery-item__overlay">
      <div class="gallery-item__content">
        <h3 class="gallery-item__title">Sports Day</h3>
        <p class="gallery-item__text">Annual sports day celebration</p>
      </div>
    </div>
  </div>
  <!-- More gallery items -->
</div>
```

### Video Embed

```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/videoID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

## Button Components

```html
<!-- Primary Button -->
<a href="#" class="btn btn--primary">Primary Button</a>

<!-- Accent Button -->
<a href="#" class="btn btn--accent">Accent Button</a>

<!-- Outline Button -->
<a href="#" class="btn btn--outline">Outline Button</a>

<!-- Text Button -->
<a href="#" class="btn btn--text">Text Button</a>

<!-- Large Button -->
<a href="#" class="btn btn--primary btn--lg">Large Button</a>

<!-- Small Button -->
<a href="#" class="btn btn--primary btn--sm">Small Button</a>

<!-- Button with Icon -->
<a href="#" class="btn btn--primary"><i class="bi bi-download"></i> Button with Icon</a>
```
