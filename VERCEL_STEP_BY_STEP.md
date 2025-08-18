# Complete Vercel Deployment Guide - Step by Step

## Pre-requisites
✅ GitHub account with your repository uploaded
✅ Vercel account (free) - sign up at vercel.com
✅ Updated project files with fixed vercel.json

## Step 1: Access Vercel Dashboard
1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your GitHub account

## Step 2: Import Your Project
1. Once logged in, you'll see the Vercel Dashboard
2. Click the large "New Project" button
3. You'll see "Import Git Repository" section
4. Click "Import" next to your GitHub repository name
   - If you don't see it, click "Adjust GitHub App Permissions" first

## Step 3: Configure Project Settings
### Basic Settings:
- **Project Name**: `maclapitcare` (or keep the auto-generated name)
- **Framework Preset**: Select "Other" from the dropdown
- **Root Directory**: Leave empty (uses root of repository)

### Build Settings:
- **Build Command**: `cd client && npm ci && npm run build`
- **Output Directory**: `client/dist`
- **Install Command**: `npm ci`
- **Development Command**: `cd client && npm run dev`

## Step 4: Environment Variables (Optional)
- For this project using FormSubmit.co, no environment variables needed
- Skip this section and click "Deploy"

## Step 5: Deploy
1. Click the "Deploy" button
2. Vercel will start building your project
3. You'll see a progress screen with logs
4. Wait 2-5 minutes for build to complete

## Step 6: Verify Deployment
1. Once build succeeds, you'll see "Congratulations" screen
2. Click "Visit" to see your live website
3. You'll get a URL like: `https://maclapitcare-xyz123.vercel.app`
4. Test your forms to ensure FormSubmit.co is working

## Step 7: Configure Custom Domain (Optional)
1. In project dashboard, click "Settings" tab
2. Click "Domains" in sidebar
3. Add your custom domain: `maclapitcare.com`
4. Follow DNS configuration instructions

## Step 8: Enable Auto-Deploy
1. Go to "Settings" → "Git"
2. Ensure "Production Branch" is set to `main`
3. Enable "Auto Deploy from Git" if not already enabled
4. Now every GitHub push will trigger automatic deployment

## Troubleshooting Common Issues

### Build Fails with "Command not found"
- Check that `client/package.json` exists
- Verify build command is exactly: `cd client && npm ci && npm run build`

### "Output directory not found"
- Ensure output directory is: `client/dist`
- Check that `client/dist` folder is created during build

### Forms not working
- Verify FormSubmit.co email addresses in form actions
- Check browser console for JavaScript errors

### Auto-deploy not triggering
- Check GitHub webhook in repository settings
- Verify Vercel app permissions in GitHub

## Expected Results
- Live website at Vercel URL
- All pages load correctly
- Forms submit successfully via FormSubmit.co
- Mobile responsive design works
- Auto-deployment from GitHub pushes

## Support
If deployment fails, check the build logs in Vercel dashboard for specific error messages.