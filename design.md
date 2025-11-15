# Hotel Booking Dashboard - Design System

## Design Philosophy

### Visual Language
**Sophisticated Hospitality Aesthetic**: Drawing inspiration from premium hotel lobby design - clean, welcoming, and luxurious without being ostentatious. The design evokes trust, comfort, and premium service quality.

### Color Palette
**Primary Colors**:
- Deep Teal (#2C5F5D) - Trust, stability, premium hospitality
- Warm Gold (#D4AF37) - Luxury, premium service, excellence
- Soft Cream (#F8F6F0) - Clean, welcoming, spacious

**Secondary Colors**:
- Sage Green (#9CAF88) - Natural, calming, sustainable
- Charcoal Gray (#3A3A3A) - Professional, readable, sophisticated
- Light Gray (#E8E8E8) - Subtle backgrounds, dividers

**Accent Colors**:
- Coral (#FF6B6B) - Urgency, alerts, call-to-action
- Ocean Blue (#4A90E2) - Links, interactive elements
- Success Green (#7ED321) - Positive indicators, availability

### Typography
**Display Font**: Playfair Display (serif) - Elegant, premium feel for headings
**Body Font**: Inter (sans-serif) - Clean, highly readable for data and content
**Data Font**: JetBrains Mono (monospace) - Precise, technical for numbers

### Visual Hierarchy
- **H1**: 48px Playfair Display, Deep Teal
- **H2**: 36px Playfair Display, Charcoal Gray  
- **H3**: 24px Inter Bold, Charcoal Gray
- **Body**: 16px Inter Regular, Charcoal Gray
- **Data**: 14px JetBrains Mono, Deep Teal

## Visual Effects & Animation

### Used Libraries
- **Anime.js**: Smooth transitions and micro-interactions
- **ECharts.js**: Interactive data visualizations
- **Splitting.js**: Text animation effects
- **Typed.js**: Dynamic text display
- **Splide.js**: Image carousels and sliders
- **p5.js**: Creative background effects
- **Matter.js**: Physics-based animations

### Background Effects
**Subtle Particle System**: Using p5.js to create a gentle floating particle effect reminiscent of luxury hotel lobby lighting - warm, ambient, non-distracting.

### Header Effects
**Gradient Text Animation**: Hotel name and key metrics with subtle color cycling between Teal and Gold using CSS animations and Anime.js.

### Data Visualization Styling
**Chart Animations**: 
- Smooth data transitions using ECharts built-in animations
- Hover effects with subtle scale and glow
- Color-coded by hotel tier (Budget: Sage, Mid-range: Teal, Luxury: Gold)

### Interactive Elements
**Button Hover States**:
- 3D lift effect with shadow expansion
- Color morphing from Teal to Gold
- Subtle scale increase (1.05x)

**Card Interactions**:
- Gentle tilt on hover using CSS transforms
- Soft glow border effect
- Content reveal animations

### Loading States
**Skeleton Screens**: Elegant loading animations with shimmer effects in brand colors
**Progress Indicators**: Circular progress with hotel icon in center

### Scroll Animations
**Reveal Animations**: Content fades in with subtle upward motion (16px)
**Parallax Elements**: Background particles move at different speeds
**Sticky Navigation**: Smooth transitions when elements become fixed

## Layout Principles

### Grid System
**12-column responsive grid** with consistent gutters and margins
**Breakpoints**: Mobile (320px), Tablet (768px), Desktop (1024px), Large (1440px)

### Spacing Scale
**Base unit**: 8px
**Scale**: 8, 16, 24, 32, 48, 64, 96, 128px

### Component Consistency
**Border Radius**: 8px for cards, 4px for buttons, 16px for modals
**Shadows**: Subtle elevation with warm undertones
**Transitions**: 200ms ease-out for most interactions

## Accessibility Considerations

### Color Contrast
All text maintains minimum 4.5:1 contrast ratio
Interactive elements have clear focus states

### Motion Sensitivity
Reduced motion options for users with vestibular disorders
All animations can be disabled via user preference

### Screen Reader Support
Proper ARIA labels for all interactive elements
Semantic HTML structure throughout
