# MacLap IT Care - MacBook and Laptop Repair Service

## Overview

MacLap IT Care is a comprehensive MacBook and laptop repair service application built for Delhi NCR. The platform serves as both a service booking system and informational website for customers seeking professional repair services for Apple products (MacBook, iMac, Mac Mini) and other laptop brands. The application features a modern React frontend designed to handle service requests, contact forms, and provide detailed information about repair services across multiple locations in Delhi NCR.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing with SEO-friendly URLs
- **UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming

### Build and Deployment
- **Build System**: Vite for frontend bundling with optimized production builds
- **Production Deployment**: Vercel configuration with proper routing for SPA and API endpoints
- **Environment Management**: Environment-specific configurations for development and production
- **Form Processing**: FormSubmit.co integration for unlimited form submissions

### SEO and Performance Optimization
- **Meta Management**: Dynamic title and meta description updates for each page
- **Local SEO**: Location-specific pages with structured data for Delhi NCR service areas
- **Performance**: Code splitting, image optimization, and efficient component loading
- **Responsive Design**: Mobile-first design approach with progressive enhancement

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router alternative (Wouter)
- **TypeScript**: Full TypeScript implementation for type safety across the stack
- **Build Tools**: Vite for development and bundling

### UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Styling Framework**: Tailwind CSS with PostCSS for utility-first styling
- **Icons**: Lucide React for consistent icon system
- **Form Components**: React Hook Form with Hookform Resolvers for validation integration

### Development and Deployment
- **Hosting Platform**: Vercel for frontend deployment with serverless functions
- **Development Tools**: TypeScript compiler, Vite for development server
- **Form Processing**: FormSubmit.co for contact and service request forms

### Validation and Utilities
- **Schema Validation**: Zod for runtime type checking and form validation
- **Date Handling**: Date-fns for date manipulation and formatting
- **Utility Libraries**: clsx and tailwind-merge for conditional styling, class-variance-authority for component variants

## Recent Changes (August 2025)

### Main Project Vercel Deployment Configuration (August 22, 2025)
- **Root Cause Analysis Complete**: Font Awesome CDN loading issues and CSS purging in production builds identified
- **Main Project Configured for Vercel**: Fixed vercel.json, added client/vite.config.ts, enhanced CSS with deployment fixes
- **Font Awesome Icons Fixed**: Added CSS @import and font-family declarations to ensure icons display in production
- **Navigation Menu Enhanced**: Added Radix Navigation Menu specific styling for white backgrounds and proper z-index
- **Service Cards Styling**: Enhanced .service-card and .cta-button classes for professional appearance
- **Build Test Successful**: 2153 modules transformed, client builds properly with all fixes applied
- **Status**: Main project ready for direct Vercel deployment with all styling preserved

### Comprehensive MacBook Model Coverage (August 22, 2025)
- **Completed 23 SEO-optimized MacBook model pages** covering every major model from 2016-2024
- **Full processor coverage**: Intel (2016-2020), M1 (2020), M2 (2022), M3 (2023), M4 (2024)
- **Strategic market coverage**: From legacy Intel MacBooks to latest M4 models for comprehensive service offering

### FormSubmit.co Integration (August 17, 2025)  
- **Implemented unlimited form solution** using FormSubmit.co service for contact and service request forms
- **Resolved Vercel deployment barriers** by eliminating need for custom serverless functions completely
- **Professional email integration** ready for customer inquiries and service bookings across Delhi NCR locations