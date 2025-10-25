# Website Design Guidelines for Gautham Kishore's Portfolio

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. 

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>

<personal_website_aesthetics>
You are designing a personal portfolio website for Gautham Kishore, an ML Researcher & Engineer at UC San Diego. The design must embody sophisticated minimalism with meticulous attention to detail.

## Core Aesthetic Principles

**Visual Philosophy:** Refined minimalism. Every element must earn its place. Symmetry through intentional whitespace and perfect alignment. Precision in spacing, alignment, and rhythm.

**Typography - Elegant & Distinctive:**
- **PRIMARY RULE:** Do NOT use Inter, Roboto, Arial, or system fonts
- **Recommended Choice:** "Fraunces" (variable font, weights 100-900) for headings + "Crimson Pro" (400, 600) for body
- **Alternative Options:** 
  - Editorial: "Newsreader" + "IBM Plex Sans"
  - Modern Serif: "Bricolage Grotesque" + "JetBrains Mono" 
  - Classical: "Playfair Display" + "Source Sans 3"
- **Size Scale:** Use dramatic jumps - h1 at 4.5rem, body at 1.125rem. Create visual hierarchy through size and weight, not color
- **Line Height:** Generous - 1.7 for body text, 1.2 for headings
- **Letter Spacing:** Slightly opened on headings (0.02em), tight on body (-0.01em)
- **Font Pairing:** High contrast between display and body. Serif + sans, or different weights of same variable font

**Color Palette - Warm Neutrals with Precision:**
```css
:root {
  /* Base colors - warm, sophisticated neutrals */
  --cream-base: #F5F1E8;           /* Primary background - warm cream */
  --cream-dark: #E8E3D6;           /* Secondary surfaces */
  --gray-warm-50: #FAFAF9;         /* Lightest accents */
  --gray-warm-100: #F5F5F4;        
  --gray-warm-200: #E7E5E4;        
  --gray-warm-700: #44403C;        /* Primary text */
  --gray-warm-800: #292524;        /* Headings, emphasis */
  --gray-warm-900: #1C1917;        /* Maximum contrast */
  
  /* Accent - single, refined touch */
  --accent-subtle: #9CA38F;        /* Muted sage for links/highlights */
  --accent-text: #6B7259;          /* Darker sage for interactive states */
  
  /* Functional colors */
  --border-light: rgba(68, 64, 60, 0.08);
  --shadow-soft: rgba(28, 25, 23, 0.04);
}
```

**DO NOT USE:**
- Purple gradients
- Bright, saturated colors
- Blue (#667eea or similar AI-default colors)
- Generic gray (#f8f9fa)

**Layout - Symmetric Balance & Perfect Alignment:**
- Max content width: 1200px, but use 65ch for reading content
- Grid system: 12 columns with 24px gutters
- Whitespace is generous but purposeful - minimum 48px between major sections
- Perfect alignment: all elements snap to 4px grid
- Navigation: Fixed, minimal, top-right. Barely there but perfectly functional
- Sections: Full viewport height hero, then scroll-driven content reveals
- Symmetry: Center-aligned hero, then left-aligned content with consistent margins

**Motion - Subtle, Purposeful (HIGH IMPACT ORCHESTRATION):**
- **Page Load Animation (Critical):** Single orchestrated entrance sequence
  - Stagger all hero elements with animation-delay
  - Start: 0ms (name), 100ms (title), 200ms (description), 300ms (CTA)
  - Use fade-up transforms: `opacity: 0; transform: translateY(20px)` → `opacity: 1; transform: translateY(0)`
- **Scroll Animations:** Fade-in on content blocks at 10% visibility threshold
- **Micro-interactions:** 
  - Links: Subtle underline expansion (0 → 100% width)
  - Buttons: Background fill on hover with 200ms ease-out
  - Cards: 4px lift with soft shadow on hover
- **Performance:** Only animate transform and opacity (60fps guaranteed)
- **NO bounces, springs, or excessive animations**

```css
/* Example animation setup */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-name {
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: 0ms;
}

.hero-title {
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: 100ms;
}
```

**Backgrounds - Layered Depth:**
- Primary: Warm cream base (#F5F1E8)
- Texture: Subtle noise/grain overlay at 2-3% opacity for tactile quality
- Gradient overlays: Radial gradient from top-right (rgba(156,163,143,0.04) to transparent)
- Sections: Alternate between cream-base and cream-dark for subtle separation
- Geometric patterns: Optional subtle grid or dots pattern at 1% opacity for technical sections
- No harsh dividers - use whitespace and subtle background shifts

**Component Details:**
- Buttons: Ghost style - thin border (1px), fills on hover with 200ms ease-out
- Links: No underline default, accent-text color, underline animates in on hover
- Cards: No shadows initially, subtle 4px lift + shadow-soft on hover
- Images: 1px border in border-light, optional 10% grayscale filter for cohesion
- Code blocks: cream-dark background, JetBrains Mono, syntax highlighting in warm grays
- Forms (if any): Minimal borders, focus states with accent-subtle

**Avoid These Common Mistakes:**
- DO NOT use Inter, Roboto, Arial, or system fonts
- NO purple/blue gradients or bright accent colors
- NO drop shadows except minimal hover states (max 4px blur)
- NO rounded corners > 4px (prefer 2px or sharp corners)
- NO multiple font families beyond the 2 chosen
- NO center-aligned body text (only hero)
- NO generic stock photos or placeholder images
- NO busy patterns or high-opacity textures
- NO scattered micro-interactions without purpose

**Content Structure (Based on Current Site):**
1. **Hero Section:** 
   - Full viewport height
   - Name (large, distinctive typography)
   - Title: "ML Researcher & Engineer"
   - Brief tagline about research interests
   - Minimal CTA or scroll indicator
   
2. **About Section:**
   - Current position at UC San Diego (HDSI)
   - Research interests: Applied ML, Data Science
   - Education: Math-CS + Data Science
   
3. **Projects/Research:**
   - Grid layout: 2 columns on desktop, 1 on mobile
   - Each project card with title, description, tech stack
   - Links to GitHub/demos
   
4. **Experience:**
   - Research Assistant at HDSI
   - Timeline or minimal list format
   
5. **Contact/Footer:**
   - Email, LinkedIn, GitHub, Scholar
   - Icon + text links, no icon-only buttons

**Technical Requirements:**
- Semantic HTML5 with proper heading hierarchy
- CSS Grid for main layout, Flexbox for components
- CSS custom properties (variables) for all colors and spacing
- Responsive breakpoints: 1200px, 768px, 480px
- Mobile-first CSS but desktop-optimized design
- 60fps animations (transform and opacity only, no layout thrashing)
- Accessible: ARIA labels, keyboard navigation, WCAG AA contrast ratios (4.5:1 minimum)
- Load fonts from Google Fonts with font-display: swap
- Intersection Observer API for scroll animations

**Before You Code:**
1. State your typography choices (specific fonts and reasoning)
2. Describe any adjustments to the color palette if needed
3. Outline the page structure and key animation moments
4. Then generate complete, production-ready HTML/CSS/JS

**Final Reminder:**
This is a personal brand statement for an ML researcher. The design should signal:
- Technical sophistication through typography and precision
- Research mindset through clarity and hierarchy  
- Attention to detail through perfect spacing and alignment
- Taste through restrained, warm color choices

Every pixel matters. Make it memorable through restraint and precision, not excess. Think outside the box while maintaining the warm minimalist aesthetic. Surprise with unexpected font pairings or subtle interactive details, but keep everything purposeful.
</personal_website_aesthetics>