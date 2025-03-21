# Lalina Kids Cafe - Next.js Website

This is the Next.js version of the Lalina Kids Cafe website, converted from the original Angular project. The site uses Tailwind CSS for styling with a custom color theme.

## Features

- Fully responsive design
- Modern React and Next.js implementation
- Static site generation with Next.js
- Custom Tailwind CSS theme
- Easy to maintain and extend

## Pages

- Home: Landing page with overview of services and featured menu items
- Menu: Complete food and beverage menu with details
- About: Information about Lalina Kids Cafe
- Services: Details about playground, kids menu, and other services
- Birthday: Birthday party packages and booking information

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Custom Modal System

## Theme Color

The main theme color is `#6cc0a4`, which is used for buttons, accents, and the primary color scheme throughout the site.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
```

This will create a production build in the `.next` folder. You can then start the production server with:

```bash
npm start
```

## Future Development

The current version is a static site with no backend integration. Future plans include:

- Backend integration for menu management
- Online reservation system
- Admin dashboard
- Multilingual support
- Image optimization and lazy loading

## Tailwind CSS Implementation

The project uses Tailwind CSS for styling, with custom configuration in `tailwind.config.js`. The main benefits include:

- Consistent design system
- Responsive utility classes
- Custom color scheme based on the brand
- Optimized production build with PurgeCSS
