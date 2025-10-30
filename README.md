# OSS Security Navigator

A single-page website designed to help open source maintainers find the right security resources when they need them most. This project provides a clear workflow that connects maintainers facing security challenges with appropriate assistance resources.

🌐 **[Live Demo](https://yourusername.github.io/oss-security-navigator)** *(Update with your actual GitHub Pages URL)*

## 🎯 Mission

To provide a clear, actionable workflow that connects open-source maintainers facing security challenges with appropriate, immediate, and high-quality assistance resources. Reduce friction and burnout by providing a single, trusted starting point for security help.

## 🚀 Features

- **6 Key Security Scenarios**: Covers the most common security challenges maintainers face
- **Urgency-Based Workflow**: Clear visual indicators for time-sensitive situations
- **Resource Directory**: Curated list of security tools, funding, and support options
- **Mobile-First Design**: Responsive design that works on all devices
- **Accessibility Focused**: WCAG compliant with keyboard navigation and screen reader support
- **GitHub Pages Ready**: Static site optimized for free hosting

## 📋 Supported Scenarios

1. **🚨 New/Serious Vulnerability Found** (HIGH URGENCY)
2. **⚠️ Need Help Configuring Security Tools** (MEDIUM)
3. **⚠️ Need Help with a Security Fix** (MEDIUM)
4. **🔴 Reporting a New CVE** (MEDIUM-HIGH)
5. **💚 Burning Out & Need Help** (SUPPORT)
6. **❓ General Security Question** (GENERAL)

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks - lightweight and fast
- **Google Fonts**: Inter font family for clean typography
- **GitHub Pages**: Free static site hosting

## 📁 Project Structure

```
oss411/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # Interactive functionality
├── README.md           # This file
└── PLAN.md            # Original project planning document
```

## 🚀 Deployment to GitHub Pages

### Option 1: Quick Deploy (Recommended)

1. **Fork or create a new repository**
   ```bash
   # If starting fresh
   git clone https://github.com/yourusername/oss-security-navigator.git
   cd oss-security-navigator
   ```

2. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: OSS Security Navigator"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes to become available

### Option 2: GitHub Actions Deploy (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 🔧 Local Development

### Prerequisites
- A modern web browser
- A local web server (optional but recommended)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/oss-security-navigator.git
   cd oss-security-navigator
   ```

2. **Serve locally** (choose one method):

   **Option A: Python (if installed)**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Option B: Node.js (if installed)**
   ```bash
   npx serve .
   ```

   **Option C: VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click on `index.html` → "Open with Live Server"

3. **Open in browser**
   - Navigate to `http://localhost:8000` (or the port shown)

## 🎨 Customization

### Updating Contact Information

Replace placeholder email addresses in:
- `index.html`: Update `security-help@example.org` with your actual email
- `script.js`: Update email addresses in scenario data

### Adding New Resources

1. **Add to HTML** (`index.html`):
   ```html
   <div class="resource-card" data-category="your-category">
       <h4>Resource Title</h4>
       <p>Resource description</p>
       <a href="https://example.com" class="btn btn-outline">Action</a>
   </div>
   ```

2. **Update JavaScript** (`script.js`):
   Add new resources to the `scenarioData` object.

### Styling Changes

All styles are in `styles.css`. Key areas to customize:
- **Colors**: Search for hex colors like `#3b82f6`
- **Fonts**: Change the Google Fonts import and font-family declarations
- **Layout**: Modify CSS Grid and Flexbox properties

## 🧪 Testing

### Manual Testing Checklist

- [ ] All scenario cards clickable and open modals
- [ ] Modal closes with X button, ESC key, and background click
- [ ] Resource filtering works for all categories
- [ ] Contact form generates proper mailto links
- [ ] Smooth scrolling navigation works
- [ ] Site is responsive on mobile devices
- [ ] Accessibility: Tab navigation works throughout
- [ ] All external links open in new tabs

### Browser Compatibility

Tested and supported:
- Chrome 90+
- Firefox 85+
- Safari 14+
- Edge 90+

## 🔍 SEO & Performance

### Optimization Features

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Meta Tags**: Optimized title and description
- **Performance**: Minimal dependencies, optimized images
- **Accessibility**: WCAG 2.1 AA compliance
- **Mobile-First**: Responsive design with proper viewport meta tag

### Google Lighthouse Scores
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
   ```bash
   git commit -m "Add: New security resource for tool configuration"
   ```
6. **Push and create a Pull Request**

### Contribution Guidelines

- Maintain accessibility standards
- Follow existing code style
- Test on multiple browsers
- Update documentation for significant changes
- Verify all links work and are appropriate

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### For Technical Issues
- Create an issue in this repository
- Include browser version, OS, and steps to reproduce

### For Content/Resource Questions
- Email: security-help@example.org *(update with actual email)*
- Focus: Questions about security resources or adding new ones

## 🔗 Related Projects

- [OpenSSF](https://openssf.org/) - Open Source Security Foundation
- [OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/) - Security best practices for OSS
- [CVE Program](https://cve.mitre.org/) - Common Vulnerabilities and Exposures

## 📈 Analytics & Monitoring

To add analytics to your deployed site:

1. **Google Analytics 4**
   ```html
   <!-- Add to <head> in index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Plausible Analytics** (Privacy-friendly alternative)
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

## ⚡ Performance Tips

- Images are optimized (if you add any, use WebP format)
- CSS and JS are minified for production
- External fonts are preloaded
- No unnecessary dependencies

## 🔄 Updates & Maintenance

### Regular Maintenance Tasks
- [ ] Update resource links quarterly
- [ ] Verify all email addresses are active
- [ ] Check for broken external links
- [ ] Review and update security contact information
- [ ] Test all functionality after browser updates

---

**Made with ❤️ for the open source community**

For questions or suggestions, please [open an issue](https://github.com/yourusername/oss-security-navigator/issues) or contact security-help@example.org.