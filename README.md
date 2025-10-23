# Modern Developer Portfolio

A sleek, modern portfolio template built with Astro and Tailwind CSS.

## Features

- Automatic dark/light mode with system preference detection
- Multi-language support (EN/DE) with browser language detection
- Responsive design with modern UI components
- Smooth section animations and transitions
- SEO optimized structure
- Type-safe development with TypeScript
- Easy configuration through a single file
- Fast performance with static site generation

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores)
- **Type Safety**: TypeScript

## Project Structure

```
devportfolio/
├── public/
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   ├── Projects.astro   # Projects showcase
│   │   └── Settings.astro   # Settings modal
│   ├── i18n/
│   │   └── translations.ts  # Language translations
│   ├── pages/
│   │   └── index.astro     # Main page layout
│   ├── store/
│   │   └── theme.ts        # Theme/language state
│   ├── styles/
│   │   ├── base.css       # Tailwind imports
│   │   └── global.css     # Global styles
│   ├── utils/
│   │   ├── types.ts       # TypeScript types
│   │   └── constants.ts   # Shared constants
│   └── config.ts          # Site configuration
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.cjs    # PostCSS configuration
└── package.json         # Project dependencies
```

## Quick Start

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Configuration

The site is configured through `src/config.ts`:

### Theme Configuration
```typescript
theme: {
  accentColor: "#1d4ed8",
  fontFamily: "Inter"
}

### Personal Information
```typescript
name: "Your Name",
title: "Your Job Title",
description: "Brief site description",
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com"
}
```

### Content Sections
```typescript
{
  about: "Your professional summary",
  skills: ["JavaScript", "React", "Node.js"],
  projects: [{
    name: "Project Name",
    description: "Project description",
    link: "https://github.com/...",
    skills: ["React", "Node.js"]
  }],
  experience: [{
    company: "Company Name",
    title: "Job Title",
    dateRange: "2023 - Present",
    bullets: ["Achievement 1", "Achievement 2"]
  }],
  education: [{
    school: "University Name",
    degree: "Degree Name",
    dateRange: "2018 - 2022",
    achievements: ["Achievement 1", "Achievement 2"]
  }]
}
```

## Internationalization

The site detects the user's preferred language and theme. Available options:

- Languages: English (EN) and German (DE)
- Themes: Light and Dark mode

### Adding Translations

Add translations in `src/i18n/translations.ts`:

```typescript
export const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      // ...
    },
    // ...
  },
  de: {
    nav: {
      about: 'Über mich',
      projects: 'Projekte',
      // ...
    },
    // ...
  }
};
```

## 🎨 Customizing the Theme

### Colors
Update the color scheme in `src/styles/global.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... */
}

[data-theme="dark"] {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 217.2 91.2% 59.8%;
  --secondary: 217.2 32.6% 17.5%;
  /* ... */
}
```

### Animations
Customize animations in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    keyframes: {
      'fade-in': {
        from: { opacity: '0', transform: 'translateY(10px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      // ...
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out forwards',
      // ...
    },
  },
}
```

## 🚀 Deployment

1. Update `astro.config.mjs` with your site URL:
```javascript
export default defineConfig({
  site: "https://yourusername.github.io/portfolio/",
  base: "/portfolio/",
  // ...
});
```

2. Build the site:
```bash
npm run build
```

3. Deploy the `dist` folder to your hosting provider

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

#### Education
```typescript
education: [
  {
    school: "University Name",
    degree: "Bachelor of Science in Computer Science",
    dateRange: "2014 - 2018",
    achievements: [
      "Graduated Magna Cum Laude with 3.8 GPA",
      "Dean's List all semesters",
      "President of Computer Science Club"
    ]
  }
]
```

### Icons

The template uses [Tabler Icons](https://tabler.io/icons) for all icons. If you wish to add more icons and have it look consistent with what's already there, you can browse through their extensive icon library.

## Project Structure

```
devportfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Local Development

If you'd like to run it locally:

```
git clone https://github.com/RyanFitzgerald/devportfolio.git
cd devportfolio
npm install
```

After that, start up the Astro dev server with:

```
npm run dev
```

## Deployment

The template can be deployed to any static hosting service easily (and in most cases, completely free). Here are some options:

- To deploy with Netlify, [click here](https://docs.astro.build/en/guides/deploy/netlify/).
- To deploy with Vercel, [click here](https://docs.astro.build/en/guides/deploy/vercel/).
- To deploy with GitHub Pages, [click here](https://docs.astro.build/en/guides/deploy/github/).
- To deploy with Cloudflare Pages, [click here](https://docs.astro.build/en/guides/deploy/cloudflare/).
- To deploy with Render, [click here](https://docs.astro.build/en/guides/deploy/render/).

Want to deploy somewhere else? Find more guides [here](https://docs.astro.build/en/guides/deploy/).

## Changelog

To view the changelog, see CHANGELOG.md.

## License

This project is fully and completely MIT. See LICENSE.md.

## Questions?

Feel free to reach out on [X (Twitter)](https://x.com/rfitzio) if you have any questions or need help.
