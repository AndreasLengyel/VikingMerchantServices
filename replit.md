# Viking Merchant Services Website

A professional business website for Viking Merchant Services, specializing in payment processing solutions for high-risk eCommerce businesses. Built with a clean, modern design following the aesthetic approach of USA Payment Solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

This is a streamlined frontend-focused application with minimal backend requirements:

- **Frontend**: React with Vite for fast development and builds
- **Backend**: Express.js server (primarily for serving static files)
- **Styling**: TailwindCSS with shadcn/ui component library
- **Deployment**: Replit Autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Single-page application with smooth scrolling navigation
- **UI Components**: shadcn/ui library with Radix UI primitives
- **Styling**: TailwindCSS with professional business color scheme
- **Icons**: Lucide React for consistent iconography

### Backend Architecture
- **Framework**: Express.js with TypeScript (minimal setup)
- **Purpose**: Serves built React application and assets
- **API**: No API endpoints currently needed

### Business Content
- **Services**: 8 specialized business types (Nutraceuticals, Skincare, Credit Repair, Travel, Pharmacy, MLMs, Entertainment, Subscriptions)
- **Approach**: Comprehensive analysis, strategic partnerships, competitive rates
- **Contact**: Direct email and phone links (stephen@vikingmerchantservices.com, +1 310 293-2000)
- **Branding**: Custom Viking crown logo integrated into navigation

## External Dependencies

### UI Components
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Icon library for business and service icons
- **TailwindCSS**: Utility-first CSS framework

### Development Tools
- **Replit Integration**: Configured with cartographer and runtime error modal
- **TypeScript**: Type checking across the application

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR (Hot Module Replacement)
- **Backend**: tsx for TypeScript execution in development
- **Workflow**: Replit "Start application" workflow runs `npm run dev`

### Production
- **Build Process**: 
  - Frontend: Vite builds to `dist/public`
  - Backend: esbuild bundles server code to `dist`
- **Serving**: Express serves static frontend assets and Viking logo
- **Deployment**: Replit Autoscale deployment (not static)

### Key Configuration Notes
- **Environment**: Supports both development and production modes
- **Path Aliases**: Configured for clean imports (`@/`, `@assets/`)
- **Asset Management**: Logo and images served via Vite asset pipeline
- **Performance**: Optimized for professional business website performance

## Recent Changes (August 2025)
- Redesigned Viking Merchant Services website with professional aesthetic
- Integrated custom Viking crown logo into navigation
- Cleaned up unnecessary database and backend dependencies
- Simplified architecture to focus on business website needs
- Implemented responsive design following USA Payment Solutions approach

The website is now a clean, professional business presence focused on showcasing Viking Merchant Services' expertise in high-risk payment processing without unnecessary technical complexity.