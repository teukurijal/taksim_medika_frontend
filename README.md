# Taksim Medika Frontend

A modern, responsive website for Taksim Medika Clinic built with Astro, React, and Tailwind CSS.

## Features

- 🌐 Multi-language support (Indonesian & English)
- 📱 Progressive Web App (PWA) ready
- 🎨 Responsive design with Tailwind CSS
- ⚡ Fast performance with Astro
- 🔧 Easy deployment to Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or use Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
# Build for production
npm run build

# Preview build
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── icons/          # PWA icons
│   ├── manifest.json   # PWA manifest
│   └── sw.js          # Service worker
├── src/
│   ├── components/    # React components
│   ├── i18n/         # Internationalization
│   └── pages/        # Astro pages
├── astro.config.mjs  # Astro configuration
├── vercel.json       # Vercel configuration
└── package.json
```

## Configuration

### Environment Variables

No environment variables required for basic functionality.

### PWA

The app is configured as a Progressive Web App with:
- Offline support
- App installation capability
- Service worker caching

### Internationalization

Supports Indonesian (default) and English languages with automatic routing.

## Technologies Used

- **Astro** - Static site generator
- **React** - UI components
- **Tailwind CSS** - Styling
- **Vite PWA** - Progressive Web App features
- **Vercel** - Deployment platform

## License

© 2024 Klinik Taksim Medika. All rights reserved.
