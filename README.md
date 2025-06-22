# Al-Ameen School Website

## Overview

This website is for Al-Ameen Matriculation Higher Secondary School. It aims to provide a modern, accessible, and visually appealing static site that communicates the school’s values, programs, and community to prospective students, parents, and stakeholders.

## Tech Stack

- **HTML5** (semantic markup)
- **Bootstrap 5** (responsive layout, no jQuery)
- **Modular CSS** using BEM methodology
- **Vanilla JavaScript** for lightweight interactivity
- **WCAG 2.1 AA** accessibility compliance

## Key Features

- Responsive design for all devices
- SEO and performance optimized
- Downloadable admissions forms (PDF/Word)
- Embedded maps (no contact forms)
- Islamic design elements:
  - SVG patterns (star, rosette, girih tile, arabesque border)
  - Pointed arch UI components
  - Subtle background motifs respecting accessibility
- All content in English

## Production Structure

- **Root**: Only production HTML files, `.nojekyll`, and `README.md`.
- **assets/**: Only used CSS, JS, images, and forms.
- **partials/**: Only header and footer includes.
- **docs/**: All Markdown documentation, not published.
- **.vscode/** and `.idx/`: Editor configs, not published.

## Deployment

- Deploy from the root folder (not `docs/`).
- `.nojekyll` prevents Jekyll processing on GitHub Pages.
- Only production files are published.

## Documentation

- All documentation and plans are in `docs/`.
- Key docs: `docs/style-guide.md`, `docs/changelog.md`, `docs/copilot-instructions.md`, `docs/website_redesign_specifications.md`.

## Maintenance

- Remove unused files regularly.
- Only keep production assets in `assets/`.
- Update documentation in `docs/` as needed.

---

For detailed requirements and design principles, see the documentation in `docs/`.