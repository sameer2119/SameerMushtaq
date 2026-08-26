# Portfolio Website - Sameer Mushtaq Tantray

A modern, responsive portfolio website for Sameer Mushtaq Tantray, ML Specialist, PhD Scholar, and Research Scientist.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Fast Performance**: Optimized for speed and SEO
- **Interactive Elements**: Particle animation, scroll effects, smooth transitions
- **Contact Form**: Functional contact form with validation
- **GitHub Pages Ready**: Free hosting with GitHub Pages

## 🛠️ Built With

- HTML5
- CSS3 (with modern features like CSS Grid, Flexbox, and custom properties)
- Vanilla JavaScript (no dependencies)
- Font Awesome (icons)
- Google Fonts (Inter & JetBrains Mono)

## 📂 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .nojekyll           # Disables Jekyll processing on GitHub Pages
```

## 🚀 Quick Start

### View Locally

1. Clone this repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Open `index.html` in your browser, or run a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Visit `http://localhost:8000` in your browser.

## 🌐 Deploy to GitHub Pages

### Option 1: Quick Deploy (via gh-pages branch)

1. Create a new repository on GitHub named `<username>.github.io`
2. Push your code:
```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

3. Go to your repository **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Your site will be live at `https://<username>.github.io`

### Option 2: Deploy to Project Pages

1. Create a new repository (e.g., `portfolio`)
2. Push your code:
```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<username>/portfolio.git
git push -u origin main
```

3. Go to **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Your site will be live at `https://<username>.github.io/portfolio`

## 🎨 Customization

### Update Personal Information

1. Open `index.html`
2. Update your name, bio, social links, and contact information
3. Replace placeholder content with your actual projects and experience

### Change Colors

Open `styles.css` and modify the CSS variables:

```css
:root {
    --primary: #6366f1;      /* Main brand color */
    --secondary: #10b981;    /* Accent color */
    --accent: #f59e0b;       /* Highlight color */
    /* ... more variables ... */
}
```

### Add Your Profile Picture

Replace the user icon in the hero section with your own image:

```html
<div class="hero-avatar">
    <img src="path-to-your-image.jpg" alt="Sameer Mushtaq Tantray">
</div>
```

## 📧 Contact Information

- **Primary Email**: Sameermushtaq48@gmail.com
- **Secondary Email**: Sommu1921@gmail.com
- **Location**: Kashmir, India
- **GitHub**: [SameerMushtaq](https://github.com/SameerMushtaq)
- **LinkedIn**: [sameer-mushtaq-931068b2](https://linkedin.com/in/sameer-mushtaq-931068b2)

## 📜 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ in Kashmir
