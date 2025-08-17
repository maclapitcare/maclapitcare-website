# Files to Copy to GitHub Repository

## Essential Files (Copy these to your GitHub repo):

### Root Directory:
- package.json
- vercel.json  
- README.md
- .gitignore
- vite.config.ts
- tailwind.config.ts
- tsconfig.json
- postcss.config.js
- components.json
- drizzle.config.ts

### API Directory (/api/):
- contact.js
- service-request.js
- package.json

### Shared Directory (/shared/):
- schema.ts
- schema.js

### Client Directory (/client/):
- index.html
- package.json (if exists)
- src/ (entire folder)

### Public Directory (/public/):
- All image files (.png, .jpg, .webp)
- favicon.svg
- robots.txt
- sitemap.xml

### Server Directory (/server/):
- All .ts files

## Files to EXCLUDE:
- node_modules/
- dist/
- .replit
- replit.nix
- .git/
- Any .log files
- attached_assets/ (these are from Replit)

## After copying:
1. Commit changes in GitHub Desktop
2. Push to repository  
3. Vercel will auto-deploy