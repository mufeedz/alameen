# Al-Ameen School Design System

## Color Palette

### Primary Colors
- **Deep Teal Green**: `#1c4c4c` - Primary brand color, inspired by traditional Islamic tilework
- **Royal Blue**: `#1D3557` - Secondary brand color representing knowledge and wisdom 
- **Emerald Green**: `#2A9D8F` - Accent color symbolizing growth and prosperity

### Secondary Colors
- **Gold**: `#e0b144` - Main accent color for highlights and call-to-action elements
- **Terracotta**: `#E76F51` - Accent for important highlights and notifications

### Neutral Tones
- **Light Gray**: `#f9f9f9` - Background color for content areas
- **White**: `#ffffff` - Primary background color
- **Dark Gray**: `#343a40` - Primary text color
- **Light Slate**: `#E0E0E0` - For subtle separations and borders

### Usage Guidelines
- **60-30-10 Rule**: 60% neutral backgrounds, 30% primary colors, 10% accent colors
- **Accessibility**: All color combinations meet WCAG 2.1 AA contrast requirements (≥4.5:1 for normal text)
- **Semantic Usage**: Primary colors for headers and navigation, gold for calls-to-action and highlights

## Typography

### Font Selection
- **Primary Heading Font**: `'Amiri'`, serif - A modern Arabic-inspired serif typeface
- **Secondary/Body Font**: `'Poppins'`, sans-serif - Clean, modern sans-serif for excellent readability
- **Alternative Heading Font**: `'Noto Naskh Arabic'` (fallback for Arabic-style elements)

### Typography Scale
| Element            | Font      | Size     | Weight | Line-height |
|------------------- |---------- |--------- |------- |------------ |
| H1 (Primary Hero)  | Amiri     | 2.5rem   | 700    | 1.2         |
| H2 (Sections)      | Poppins   | 2rem     | 600    | 1.2         |
| H3                 | Poppins   | 1.5rem   | 600    | 1.3         |
| H4                 | Poppins   | 1.25rem  | 600    | 1.3         |
| Body Text          | Poppins   | 1rem     | 400    | 1.5         |
| Small/Caption      | Poppins   | 0.875rem | 400    | 1.4         |

### Spacing & Rhythm
- **Base Unit**: 1rem (16px)
- **Vertical Rhythm**: Minimum 1.5rem between content blocks
- **Letter Spacing**: Normal for body text, +0.02em for headings

## Islamic Design Elements

### Geometric Patterns
- 8-fold rosette patterns for decorative elements and section dividers
- Star polygons for accent backgrounds and cards
- Girih-tile motifs in footer designs and subtle background elements

### Architectural Motifs
- Pointed-arch framing for cards and important sections
- Muqarnas-inspired dropdown menus and layered elements
- Arabesque border patterns for frames and decorative elements
- Mashrabiya-inspired overlay patterns for image containers and backgrounds

### Calligraphic Elements
- Stylized "bismillah" watermarks for important sections
- Modern interpretations of Arabic calligraphy for decorative accents
- Calligraphic-inspired iconography for navigation and UI elements

## Component Examples

### Button Styles
```css
.btn--primary {
  background-color: #1c4c4c;
  color: white;
  border-radius: 0.25rem;
  padding: 0.5rem 1.5rem;
}

.btn--accent {
  background-color: #e0b144;
  color: #343a40;
  border-radius: 0.25rem;
  padding: 0.5rem 1.5rem;
}
```

### Card Styles
```css
.card {
  border-radius: 0.5rem;
  border: 1px solid #E0E0E0;
  overflow: hidden;
}

.card--pointed-arch {
  border-radius: 0 0 2.5rem 2.5rem/0 0 2rem 2rem;
}
```

### Section Divider System (Updated 2025)

Our responsive section divider system provides seamless scaling across all device sizes while maintaining visual consistency.

#### Core Divider Types

```css
/* Geometric Wave Divider - Primary */
.section-divider {
  height: var(--divider-height-base); /* 60px base, scales to 96px on ultra-wide */
  background: url('../images/geometric-divider.svg') no-repeat center;
  transform: scaleY(var(--divider-scale-base));
}

/* Arch Pattern Divider - Secondary */
.section-divider-alt {
  height: var(--divider-height-alt); /* 30px base, scales to 48px on ultra-wide */
  background: url('../images/arch-divider.svg') repeat-x;
  background-size: var(--divider-pattern-size) var(--divider-height-alt);
}

/* Gradient Line Divider - Minimal */
.gradient-divider {
  height: calc(6px * var(--divider-scale-base));
  background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-primary-alt) 50%, var(--color-accent) 100%);
}
```

#### Responsive Scaling Variables

```css
:root {
  --divider-scale-base: 1;      /* Default scale */
  --divider-height-base: 60px;  /* Main divider height */
  --divider-height-alt: 30px;   /* Alt divider height */
}

/* Large screens (1400px+) */
--divider-scale-base: 1.2;
--divider-height-base: 72px;

/* Ultra-wide screens (2560px+) */
--divider-scale-base: 1.6;
--divider-height-base: 96px;
```

#### Implementation Notes

- Uses CSS custom properties for consistent scaling
- Container-based width calculation prevents horizontal scroll
- Hardware-accelerated transforms for smooth performance
- Accessibility-aware with reduced motion support
- Container query support for modern browsers
