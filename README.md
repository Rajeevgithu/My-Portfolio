# Rajeev Verma - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills, projects, and experience as a MERN Stack Developer.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Elements**: Hover effects and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading and optimized for performance

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Typewriter Effect**: React Simple Typewriter

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects showcase
│   ├── Experience.jsx  # Work experience
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── context/            # React context
│   └── ThemeContext.jsx # Theme management
├── lib/                # Utility functions
│   └── utils.js        # Common utilities
├── assets/             # Static assets
│   └── Profile.jpg     # Profile image
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Hero.jsx**: Update name, title, and description
- **About.jsx**: Update personal information and story
- **Skills.jsx**: Update skills and proficiency levels
- **Projects.jsx**: Add your projects
- **Experience.jsx**: Update work experience and education
- **Contact.jsx**: Update contact information

### Styling

The project uses Tailwind CSS with a custom design system. You can customize:

- Colors: Update CSS variables in `src/index.css`
- Typography: Modify font classes in components
- Layout: Adjust spacing and grid layouts

### Profile Image

Replace `src/assets/Profile.jpg` with your profile image.

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌙 Dark/Light Mode

The theme system automatically:
- Detects user's preferred theme
- Saves theme preference in localStorage
- Provides smooth transitions between themes

## 📧 Contact Form

The contact form includes:
- Form validation
- Loading states
- Success/error messages
- Responsive design

**Note**: The form currently simulates submission. To make it functional, integrate with a backend service or email service like:
- EmailJS
- Formspree
- Netlify Forms
- Custom backend API

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [React Simple Typewriter](https://github.com/TypewriterJS/react-simple-typewriter) for typewriter effect

## 📞 Contact

- **Email**: rajeev@example.com
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Portfolio**: [Your Portfolio URL]

---

Made with ❤️ by Rajeev Verma
