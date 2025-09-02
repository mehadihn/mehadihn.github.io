# Mehadi Hassan - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills, projects, and experience as a Full Stack Developer and Machine Learning Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Engaging user experience with Framer Motion animations
- **Portfolio Showcase**: Filterable project gallery with detailed information
- **Contact Form**: Functional contact form with validation
- **Skills Section**: Comprehensive display of technical skills and technologies
- **Social Integration**: Links to GitHub, LinkedIn, and other social profiles

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: CSS3 with CSS Variables, Flexbox, Grid
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Version Control**: Git

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/mehadihn/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Portfolio.js & Portfolio.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
└── public/
    ├── index.html
    └── manifest.json
```

## 🎨 Customization

### Colors

The website uses CSS custom properties for easy theming. Main colors are defined in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #f59e0b;
  --accent-color: #10b981;
  /* ... more colors */
}
```

### Content

Update the following files to customize content:

- **Personal Info**: `src/components/Hero.js`, `src/components/About.js`
- **Skills**: `src/components/Skills.js`
- **Projects**: `src/components/Portfolio.js`
- **Contact Info**: `src/components/Contact.js`, `src/components/Footer.js`

### Images

Replace images in the `public/assets/img/` directory:

- Profile photo: `public/assets/img/Mehadi.jpg`
- Portfolio images: `public/assets/img/portfolio/`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `build` folder to GitHub Pages

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mehadihn/portfolio/issues).

## 📞 Contact

Mehadi Hassan - [@mehadihn](https://twitter.com/mehadihn) - mehadi@example.com

Project Link: [https://github.com/mehadihn/portfolio](https://github.com/mehadihn/portfolio)

---

⭐ Star this repository if you found it helpful!

