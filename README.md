# PennyExplained.com - Personal Finance Website

A minimalist personal finance education website with calculators, articles, and beginner-friendly content. Designed for passive income through ads (Google AdSense/Mediavine).

## 🚀 Quick Start

This is a static website built with HTML, CSS, and JavaScript. No build process required - just upload and go!

## 📁 File Structure

```
pennyexplained.com/
├── index.html                          # Homepage
├── about.html                          # About page
├── contact.html                        # Contact page
├── privacy-policy.html                 # Privacy policy (required for ads)
├── disclaimer.html                     # Disclaimer (required for ads)
├── terms.html                          # Terms of service
├── article-template.html               # Template for creating new articles
├── assets/
│   ├── css/
│   │   └── style.css                   # Main stylesheet
│   ├── js/
│   │   └── script.js                   # Main JavaScript file
│   └── images/
│       ├── logo.svg                    # Site logo
│       ├── favicon.svg                 # Favicon (SVG)
│       ├── favicon-16x16.png           # Favicon 16x16
│       ├── favicon-32x32.png           # Favicon 32x32
│       ├── apple-touch-icon.png        # iOS icon (180x180)
│       └── favicon-512x512.png         # Android/PWA icon
└── calculators/
    ├── budget.html                     # Budget calculator
    ├── emergency-fund.html             # Emergency fund calculator
    └── savings-goal.html               # Savings goal calculator
```

## 🎨 Brand Assets

- **Logo:** Clean penny icon with "pennyexplained" text
- **Colors:**
  - Primary: #1f2937 (Charcoal)
  - Accent: #f59e0b (Warm Amber)
  - Background: #f8fafc (Light Gray)
- **Typography:** System fonts for speed and readability
- **Design:** Minimalist with generous whitespace

## 📝 Before Deployment

### 1. Replace Google Analytics ID

Find and replace `G-XXXXXXXXXX` in ALL HTML files with your actual Google Measurement ID:

```html
<!-- Current placeholder -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Replace with your actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>
```

**Files to update:**
- index.html
- about.html
- contact.html
- privacy-policy.html
- disclaimer.html
- terms.html
- article-template.html
- calculators/budget.html
- calculators/emergency-fund.html
- calculators/savings-goal.html

### 2. Update Contact Email (Optional)

In `privacy-policy.html`, `disclaimer.html`, and `terms.html`, replace placeholder emails:
- `privacy@pennyexplained.com`
- `legal@pennyexplained.com`

## 🌐 Deployment to GitHub Pages + Cloudflare

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `pennyexplained` (or your preferred name)
3. Make it **Public**
4. Don't initialize with README (we have our own)

### Step 2: Upload Files to GitHub

**Option A: Using GitHub Web Interface**
1. Click "Add file" → "Upload files"
2. Drag all your files maintaining the folder structure
3. Commit changes

**Option B: Using Git Command Line**
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - PennyExplained website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/pennyexplained.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://YOUR-USERNAME.github.io/pennyexplained/`

### Step 4: Set Up Cloudflare

**A. Add Your Domain to Cloudflare**
1. Sign up at [Cloudflare.com](https://cloudflare.com)
2. Add your domain: `pennyexplained.com`
3. Select the Free plan
4. Cloudflare will scan your DNS records
5. Update your domain's nameservers (at your domain registrar) to Cloudflare's nameservers

**B. Configure DNS for GitHub Pages**
1. In Cloudflare DNS settings, add these records:

```
Type    Name    Content                         Proxy Status
----    ----    -------                         ------------
A       @       185.199.108.153                 Proxied (orange cloud)
A       @       185.199.109.153                 Proxied
A       @       185.199.110.153                 Proxied
A       @       185.199.111.153                 Proxied
CNAME   www     YOUR-USERNAME.github.io         Proxied
```

**C. Configure Custom Domain in GitHub**
1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `pennyexplained.com`
3. Click "Save"
4. Check "Enforce HTTPS" (wait 5-10 minutes for it to become available)

### Step 5: Create CNAME File

Create a file named `CNAME` (no extension) in your repository root with:
```
pennyexplained.com
```

### Step 6: Verify Deployment

1. Visit `https://pennyexplained.com` (wait 10-30 minutes for DNS propagation)
2. Check that HTTPS is working
3. Test all pages and calculators
4. Verify mobile responsiveness

## 📊 Setting Up Google Analytics

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for `pennyexplained.com`
3. Get your Measurement ID (format: `G-XXXXXXXXX`)
4. Replace all instances of `G-XXXXXXXXXX` in your HTML files
5. Re-upload to GitHub

## 💰 Setting Up Google AdSense

### Requirements Checklist
- [ ] Original, valuable content (aim for 20-30 articles before applying)
- [ ] About page ✅
- [ ] Contact page ✅
- [ ] Privacy Policy ✅
- [ ] Disclaimer ✅
- [ ] Terms of Service ✅
- [ ] Website is at least 6 months old (recommended)
- [ ] Consistent traffic (aim for 1000+ pageviews/month)

### Application Process
1. Go to [Google AdSense](https://adsense.google.com)
2. Apply with your site
3. Add the AdSense code to your `<head>` section
4. Wait for approval (can take 1-2 weeks)

### Adding Ads After Approval

Replace ad placeholders in HTML files:

**Current placeholder:**
```html
<div class="ad-placeholder ad-leaderboard">
    Advertisement - Leaderboard (728x90)
</div>
```

**Replace with AdSense code:**
```html
<div class="ad-container">
    <!-- Your AdSense ad unit code here -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

## 📱 Content Creation Guide

### Creating New Articles

1. Copy `article-template.html`
2. Rename it (e.g., `what-is-budgeting.html`)
3. Replace placeholder content with your article
4. Update meta tags (title, description, keywords)
5. Replace `[ARTICLE TITLE]` placeholders
6. Add to relevant category listing page

### Article Best Practices

- **Headlines:** Clear, descriptive, includes target keyword
- **Length:** 800-1500 words for beginners content
- **Paragraphs:** Keep short (2-4 sentences)
- **Examples:** Use real dollar amounts
- **Tone:** Friendly, educational, non-judgmental
- **Format:** Use H2/H3 headings, bullet points, bold for emphasis
- **Links:** Link to related articles and calculators

### SEO Tips

- Use target keyword in H1, first paragraph, and naturally throughout
- Write compelling meta descriptions (150-160 characters)
- Use descriptive alt text for images
- Internal linking between related articles
- Keep URLs short and descriptive

## 🔧 Customization

### Changing Colors

Edit `assets/css/style.css`:

```css
/* Primary colors */
--charcoal: #1f2937;    /* Main text, headings */
--amber: #f59e0b;       /* Links, CTAs */
--light-gray: #f8fafc;  /* Backgrounds */
```

### Modifying Calculators

Edit the JavaScript functions in `assets/js/script.js`:
- `calculateBudget()`
- `calculateEmergencyFund()`
- `calculateSavingsGoal()`

## 📈 Traffic & Growth Strategy

### Phase 1: Launch (Months 1-3)
- Publish 20-30 foundational articles
- Focus on "what is..." and "how to..." content
- Set up Google Analytics and Search Console
- Submit sitemap to Google

### Phase 2: Build Authority (Months 4-9)
- Publish 2-3 articles per week
- Target long-tail keywords
- Build internal linking structure
- Apply for Google AdSense

### Phase 3: Monetization (Months 10+)
- Continue publishing quality content
- Optimize ad placements
- Apply for Mediavine (requires 50k sessions/month)
- Consider email list building

## 🛠️ Maintenance

### Regular Tasks
- **Weekly:** Check Google Analytics, fix broken links
- **Monthly:** Update outdated information, add new articles
- **Quarterly:** Review ad performance, optimize placements
- **Yearly:** Review and update legal pages

## 📞 Support

If you encounter issues:

1. Check GitHub Pages status
2. Verify DNS settings in Cloudflare
3. Clear browser cache
4. Check browser console for errors

## 📄 License

All content is the property of PennyExplained.com. The website code can be used for personal projects.

---

**Built with:** HTML, CSS, JavaScript  
**Hosted on:** GitHub Pages + Cloudflare  
**Version:** 1.0  
**Last Updated:** February 2026
