# MacLap IT Care - Vercel Deployment

## Quick Deploy Steps:

1. Replace all files in your GitHub repository with files from this folder
2. Commit and push to GitHub
3. Vercel will auto-deploy

## Vercel Settings:
- **Build Command**: `npm run build`
- **Output Directory**: `dist` 
- **Install Command**: `npm install`

## Environment Variables:
- `DATABASE_URL` - Your Neon PostgreSQL connection string

## Fixed Issues:
- ✅ API 404 errors (proper serverless function setup)
- ✅ Page refresh 404 errors (SPA routing with fallback to index.html)
- ✅ Database connection (ES modules compatibility)

## Test After Deployment:
1. Visit `/api/test` - should show API working
2. Refresh any page - should work without 404
3. Submit booking form - should save to database

This is a clean, minimal deployment focused only on Vercel compatibility.