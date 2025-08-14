# MacLap IT Care - MacBook Repair Service

Professional laptop repair service website for Delhi NCR.

## Vercel Deployment Settings

**Build Command:** `npm run build`  
**Output Directory:** `dist/public`  
**Install Command:** `npm install`

## Required Environment Variables

- `DATABASE_URL` - PostgreSQL connection string

## Tech Stack

- React + TypeScript frontend
- Vercel Serverless Functions backend
- PostgreSQL database (Neon)
- Tailwind CSS styling

## API Endpoints

- `/api/contact` - Contact form submissions
- `/api/service-booking` - Service booking requests

## Deployment Notes

This project uses Vercel serverless functions for the backend API. The `/api` folder contains individual serverless functions that handle form submissions and database operations.