# Gautham Kishore - Personal Academic Website

A minimal, clean, and professional personal website built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Modern Stack**: Built with React 18, Vite, and Tailwind CSS
- **Component-Based**: Modular architecture for easy maintenance
- **SEO Optimized**: Meta tags for better search engine visibility
- **Smooth Animations**: Subtle fade-in effects and hover states
- **Fast Performance**: Lightning-fast build times with Vite

## Project Structure

```
├── public/                 # Static assets
│   ├── profile_pic.jpg    # Profile photo
│   └── GauthamKishore.pdf # Resume/CV
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── ResearchInterests.jsx
│   │   ├── Experience.jsx
│   │   ├── Publications.jsx
│   │   ├── Personal.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles & Tailwind
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── postcss.config.js     # PostCSS configuration
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Personal Website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` folder

3. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to Netlify's web interface, or
   - Use the Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=dist
     ```

### Deploy to GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js` to set the base path:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Customization

### Updating Content

- **Personal Info**: Edit `src/components/Header.jsx` and `src/components/About.jsx`
- **Research Interests**: Modify `src/components/ResearchInterests.jsx`
- **Experience**: Update `src/components/Experience.jsx`
- **Publications**: Edit `src/components/Publications.jsx`
- **Personal Interests**: Modify `src/components/Personal.jsx`

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Customize these values
      },
    },
  },
}
```

### Updating Profile Photo or CV

Replace the files in the `public` folder:
- `public/profile_pic.jpg`
- `public/GauthamKishore.pdf`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Gautham Kishore. All rights reserved.

---

Built with ❤️ using React, Vite, and Tailwind CSS
