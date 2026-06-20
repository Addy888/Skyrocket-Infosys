# 🚀 Quick Start Guide - Optimized Build

## Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

## 🔧 Installation

### 1. Clean Install Dependencies
```bash
# Remove old dependencies
rm -rf node_modules package-lock.json

# Install optimized dependencies (only 8 packages!)
npm install
```

### 2. Development Server
```bash
npm run dev
```
Visit: `http://localhost:5173`

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📊 Testing Performance

### Option 1: Chrome DevTools Lighthouse
1. Open Chrome/Edge browser
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select "Desktop" or "Mobile"
5. Click "Analyze page load"

**Expected Scores:**
- ✅ Performance: 95+
- ✅ Accessibility: 100
- ✅ Best Practices: 100
- ✅ SEO: 100

### Option 2: PageSpeed Insights
1. Visit: https://pagespeed.web.dev/
2. Enter your deployed URL
3. Click "Analyze"

### Option 3: WebPageTest
1. Visit: https://www.webpagetest.org/
2. Enter your URL
3. Run test

---

## 📦 Build Output

After running `npm run build`, you'll see:

```
dist/
├── index.html              (~8 KB)
├── assets/
│   ├── index-[hash].js     (~150 KB → 50 KB gzipped)
│   ├── vendor-react-[hash].js   (~130 KB → 45 KB gzipped)
│   ├── vendor-motion-[hash].js  (~80 KB → 28 KB gzipped)
│   ├── vendor-ui-[hash].js      (~40 KB → 15 KB gzipped)
│   └── vendor-animation-[hash].js (~60 KB → 22 KB gzipped)
└── [lazy chunks]           (~10-30 KB each)
```

**Total Initial Transfer:** ~160 KB (was ~800 KB)

---

## 🚀 Deployment

### Cloudflare Pages (Recommended)
1. Push code to GitHub
2. Connect to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`
5. Done! ✨

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Custom Server
```bash
# Build
npm run build

# Upload dist/ folder to your server
# Ensure _headers file is supported for optimal caching
```

---

## ✅ Verification Checklist

After deployment, verify:

1. **Performance**
   - [ ] Lighthouse Performance: 95+
   - [ ] FCP < 1.0s
   - [ ] LCP < 2.0s
   - [ ] TBT < 200ms

2. **SEO**
   - [ ] Meta title displays correctly
   - [ ] Meta description displays
   - [ ] Open Graph tags work (test on Facebook/LinkedIn)
   - [ ] Sitemap.xml accessible at `/sitemap.xml`
   - [ ] Robots.txt accessible at `/robots.txt`

3. **Accessibility**
   - [ ] Keyboard navigation works
   - [ ] Focus indicators visible
   - [ ] Form labels present
   - [ ] ARIA attributes correct
   - [ ] Screen reader compatible

4. **Mobile**
   - [ ] Responsive on all devices
   - [ ] Touch targets ≥ 44px
   - [ ] Text readable (16px min)
   - [ ] No horizontal scroll

5. **Functionality**
   - [ ] All sections load
   - [ ] Animations smooth
   - [ ] Links work
   - [ ] Form submits (if hooked up)
   - [ ] No console errors

---

## 🐛 Troubleshooting

### Issue: Build fails with dependency errors
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Animations laggy on mobile
**Solution:** Already optimized! Animations are throttled to 30 FPS and reduced on mobile.

### Issue: Lighthouse score lower than expected
**Possible causes:**
1. Testing on slow network (use "Simulated throttling")
2. Testing with dev build (use production build)
3. Browser extensions interfering (test in incognito)
4. Server not sending proper cache headers

### Issue: Images not loading
**Solution:** Images should be placed in `public/` folder and referenced as `/image.jpg`

---

## 📈 Monitoring Performance

### Real User Monitoring (Optional)
Add to `index.html` before `</head>`:

```html
<script>
  // Simple performance tracking
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('FCP:', perfData.domContentLoadedEventEnd);
    console.log('Load Time:', perfData.loadEventEnd);
  });
</script>
```

### Web Vitals (Optional)
```bash
npm install web-vitals
```

Add to `src/main.tsx`:
```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

---

## 🎯 Performance Budget

Target metrics to maintain:

| Metric | Target | Critical |
|--------|--------|----------|
| Initial JS | < 200 KB | < 300 KB |
| Initial CSS | < 50 KB | < 100 KB |
| FCP | < 1.0s | < 1.8s |
| LCP | < 1.5s | < 2.5s |
| TBT | < 150ms | < 300ms |
| CLS | < 0.05 | < 0.1 |

---

## 📚 Additional Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Vite Performance](https://vitejs.dev/guide/performance.html)

---

## 🤝 Support

Need help? Contact:
- **Email:** adityashastri76@gmail.com
- **Project:** SkyRocket Infosys

---

**Last Updated:** June 20, 2026
**Status:** ✅ Production Ready
