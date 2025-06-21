# Copilot Instructions for Al-Ameen School Website Redesign

## 🚀 General Project Guidelines
- Static HTML5 website hosted on GitHub Pages. [cite: 3, 44, 53]
- Use Bootstrap 5 (no jQuery), semantic HTML, modular CSS using BEM methodology. [cite: 5, 45, 46]
- Ensure responsiveness using Bootstrap's grid system. [cite: 4, 40]
- All pages must comply with WCAG 2.1 AA accessibility standards. [cite: 4, 47]
- All colors, fonts, and components should be optimized for SEO and performance. [cite: 50]
- English language only.
- No contact forms are needed; maps can be embedded. [cite: 35]
- Include downloadable PDF/Word forms for admissions (hosted in `assets/forms/`). [cite: 28]
- Always reference `/docs/style-guide.md` for color, typography, and pattern tokens.
- Use `/docs/changelog.md` for date-stamped update entries.

## 🎨 Theme & Design System
- **Primary Color**: `#1c4c4c` (deep teal green) - Inspired by traditional Islamic tilework
- **Secondary Colors**: `#1D3557` (royal blue), `#2A9D8F` (emerald green) 
- **Accent Colors**: `#e0b144` (gold), `#E76F51` (terracotta)
- **Neutral Tones**: `#f9f9f9` (light gray), `#ffffff` (white), `#343a40` (dark gray), `#E0E0E0` (light slate)
- **Font Family**: `'Poppins', sans-serif` for body and secondary headings
- **Heading Font**: `'Amiri', 'Noto Naskh Arabic', serif` for primary headings
- **Font Sizes**: `1rem` base (16px), responsive scaling
- **Islamic Motifs**: 
  - Geometric patterns (8-fold rosettes, star polygons)
  - Architectural elements (pointed arches, arabesque borders)
  - Calligraphic accents (bismillah watermarks, decorative flourishes)

## ✨ Layout Guidelines
- Use a max-width container with `container-xl`.
- **Navbar Specifics**:
    - Sticky and responsive top navbar. [cite: 37]
    - Include the school logo and menu links (Home, About, Academics, etc.). [cite: 37]
    - On mobile, it must collapse into a hamburger menu. [cite: 38]
    - Support multi-level dropdowns if needed (e.g., for 'About Us' subsections: Our History, Mission & Vision, Our Trust). [cite: 38]
	- Implement back-to-top page navigation functionality.
- **Standard Structure**: header, hero, 2-3 main sections, footer.
- **Footer Specifics (for all pages)**:
    - The persistent footer on all pages should include:
        - School address(es) [cite: 39]
        - Contact info (phone, email) [cite: 39]
        - Social media icons/links [cite: 39]
        - Copyright notice [cite: 39]
        - Quick links (e.g., privacy policy, sitemap). [cite: 39]
- Implement a "skip-to-content" link for accessibility on all pages. [cite: 42]
- Use breadcrumb navigation if the page hierarchy is deep. [cite: 42]

## 🧱 CSS & BEM Conventions
- Follow BEM methodology: `block__element--modifier`. [cite: 5, 46]
- Global styles in `assets/css/main.css`.

## ♿ Accessibility (WCAG 2.1 AA)
- Ensure all images have descriptive `alt` text. [cite: 48, 49]
- Any embedded video must have captions or transcripts. [cite: 49]
- Pay attention to color contrast ratios, keyboard navigation, and use of ARIA labels where appropriate. [cite: 47]

## ⚡ Performance
- Leverage Bootstrap's utility classes to minimize custom CSS. [cite: 50]
- Lazy-load non-critical images. [cite: 50]
- Minify CSS/JS files for production. [cite: 50]
- Keep external dependencies (fonts, libraries) to a minimum for fast load times. [cite: 50]

## 💻 Efficient JS
- Use lightweight JavaScript for interactivity. Avoid heavy frameworks; vanilla JS or small libraries are acceptable. [cite: 51, 52]
- If a calendar library is used for the Events page, it should be fully client-side (no backend). [cite: 52]

## 🧠 AI Task Instructions
1. Start with layout/components before content.
2. Backup original files and confirm Git status.
3. Keep tasks limited to clear elements or sections.
4. Use valid HTML5 and Bootstrap 5 syntax.
5. Add accessibility attributes.