# Vercel Deployment Guide for MacLap IT Care

## ✅ Configuration Fixed

The following files have been updated for proper Vercel deployment:

- `vercel.json` - Updated build configuration
- `package.json` - Fixed build scripts

## 🚀 Manual Deployment Steps

### Step 1: Connect GitHub to Vercel
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Click **"Import from GitHub"**
4. Select your `maclapitcare` repository

### Step 2: Configure Build Settings
When importing, use these settings:

- **Framework Preset**: `Other`
- **Build Command**: `cd client && npm ci && npm run build`
- **Output Directory**: `client/dist`
- **Install Command**: `npm ci`
- **Root Directory**: `.` (leave empty)

### Step 3: Deploy
1. Click **"Deploy"**
2. Vercel will automatically build and deploy
3. You'll get a live URL like: `https://maclapitcare.vercel.app`

## 🔧 Troubleshooting

### If Build Fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `client/package.json`
3. Verify the `client/dist` folder is created during build

### If Auto-Deploy Not Working:
1. Go to Vercel project settings
2. Click **"Git"** tab
3. Ensure **"Production Branch"** is set to `main` or `master`
4. Enable **"Auto Deploy"** if disabled

### Common Issues:
- **Build Command Error**: Make sure `client/` directory exists
- **Missing Dependencies**: Run `npm ci` in client folder locally first
- **Environment Variables**: Not needed for FormSubmit.co forms

## 📱 Expected Result
Your website will be live at: `https://your-project-name.vercel.app`

All forms will work with FormSubmit.co (no backend needed).