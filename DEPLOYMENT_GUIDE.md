# 🚀 React + GitHub Pages Deployment Guide

## Common Issues & Solutions

### ❌ **Blank White Screen on GitHub Pages**

#### **Root Causes:**
1. ✗ Incorrect `base` path in `vite.config.ts`
2. ✗ Asset paths not resolving due to GitHub Pages subdirectory
3. ✗ Unhandled component errors crashing React
4. ✗ ParticleBackground or lazy components failing silently
5. ✗ CSS/JS not loading due to incorrect relative paths

#### **✅ Solutions Applied to This Project:**

**1. Set Correct Base Path** (vite.config.ts)
```typescript
export default defineConfig({
  base: '/Mazen_portfolio/', // Your repo name
  plugins: [react()],
})
```

**2. Add Error Boundary** (src/components/ErrorBoundary.tsx)
- Catches React errors before they crash the entire app
- Shows user-friendly error message with reload button
- Logs errors to console for debugging

**3. Improve Error Handling**
- ParticleBackground wrapped in ErrorBoundary
- Async error handling in particle initialization
- Fallback UI if particles fail to load

**4. Optimized GitHub Actions Workflow**
```yaml
# Uses official GitHub Pages deployment action
# Automatically sets permissions
# Builds and deploys in separate, reliable steps
```

---

## 📋 Step-by-Step Deployment Checklist

### **Step 1: Local Setup**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **Step 2: GitHub Repository Setup**
```bash
# Navigate to your repo
cd your-project

# Initialize git (if not already done)
git init

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Set main branch
git branch -M main

# Push initial commit
git add .
git commit -m "Initial commit"
git push -u origin main
```

### **Step 3: Configure vite.config.ts**
```typescript
// CRITICAL: Match your GitHub repo name
base: '/YOUR_REPO_NAME/',  // e.g., '/portfolio/', '/Mazen_portfolio/'
```

### **Step 4: Create GitHub Actions Workflow**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - uses: actions/upload-pages-artifact@v2
      with:
        path: './dist'
    - uses: actions/deploy-pages@v2
      id: deployment
```

### **Step 5: GitHub Pages Settings**
1. Go to repo → **Settings** → **Pages**
2. **Source**: Select "GitHub Actions"
3. Save

### **Step 6: Push & Deploy**
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

### **Step 7: Monitor Deployment**
1. Go to **Actions** tab
2. Watch build complete
3. Visit `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🔧 Troubleshooting

### **Issue: Still showing blank white screen**

**Debug Steps:**
```javascript
// Add this to src/main.tsx temporarily
console.log('React mounting...');
console.error = (msg) => {
  console.log('ERROR:', msg);
  alert('Error: ' + msg);
};
```

**Check Browser DevTools:**
- Open **DevTools** (F12)
- Go to **Console** tab
- Look for red error messages
- Check **Network** tab - are JS/CSS loading? (404 errors?)

### **Issue: Assets return 404**

**Cause:** Base path mismatch

**Fix:**
```typescript
// vite.config.ts - MUST match GitHub repo name exactly
base: '/Mazen_portfolio/' // Not '/Mazen_portfolio' and not '/mazen-portfolio'
```

### **Issue: ParticleBackground crashes**

**Status:** Already handled with Error Boundary
- Particles are optional
- If they fail, rest of site still works
- Check Console for particle initialization errors

### **Issue: Lazy components not loading**

**Status:** Already improved with Suspense
- Fallback UI shown while loading
- Errors caught by ErrorBoundary

---

## 📊 Performance Optimization

**This Project Includes:**
- ✅ Code splitting (lazy-loaded sections)
- ✅ Tree-shaking (unused code removed)
- ✅ CSS minification
- ✅ JS minification (esbuild)
- ✅ Source maps disabled in production

**Current Build Size:**
- HTML: 0.62 KB
- CSS: 44 KB (gzipped: 7.7 KB)
- JS: ~392 KB (gzipped: 118 KB)
- **Total: ~165 KB gzipped** ✨

---

## 🎯 Quick Fixes Reference

| Problem | Solution |
|---------|----------|
| Blank page | Check browser console for errors |
| 404 on assets | Verify `base` path in vite.config.ts |
| Deploy not triggering | Ensure `.github/workflows/deploy.yml` exists |
| ParticleBackground missing | Check console, it's optional |
| Slow loading | Assets are lazy-loaded, site will be faster after full load |
| Build fails locally | Run `npm install` again |

---

## 📞 Need Help?

1. **Check GitHub Actions**: Settings → Actions for build logs
2. **Browser Console**: DevTools → Console tab for JavaScript errors
3. **Check dist/ folder**: `npm run build` and verify files are created
4. **Verify base path**: Must match GitHub repo name exactly

---

## ✨ What This Setup Provides

- ✅ Automatic deployment on every push to main
- ✅ Error handling with visual feedback
- ✅ Optimized bundle size
- ✅ Fast loading with code splitting
- ✅ Professional GitHub Pages deployment
- ✅ Production-ready error tracking

---

**Your site should now be live at:** `https://0xElmohands.github.io/Mazen_portfolio/`
