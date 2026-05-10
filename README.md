# Portfolio Website - 0xElmohands

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features premium animations, glassmorphism design, and a futuristic mobile navigation system.

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Scroll**: React Scroll
- **Particles**: TS Particles

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project folder:
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Premium Animations**: Smooth scroll-triggered animations with Framer Motion
- **Glassmorphism UI**: Modern glass-like effects and gradients
- **Futuristic Navigation**: Animated mobile menu with social links
- **Particle Background**: Interactive particle system
- **Contact Form**: Functional contact form with Formspree integration
- **Typewriter Effect**: Dynamic typing animation in hero section
- **Code Splitting**: Optimized loading with lazy-loaded components

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── 0xElmohands_CV.pdf    # Resume file
│   ├── icons.svg             # Icon sprites
│   └── profile.png           # Profile image
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.tsx    # Navigation component
│   │   │   ├── Footer.tsx    # Footer component
│   │   │   ├── ParticleBackground.tsx # Animated background
│   │   │   └── LoadingScreen.tsx # Loading animation
│   │   └── Sections/
│   │       ├── Hero.tsx      # Hero section
│   │       ├── About.tsx     # About section
│   │       ├── Skills.tsx    # Skills section
│   │       ├── Experience.tsx # Experience section
│   │       ├── Projects.tsx  # Projects section
│   │       ├── Education.tsx # Education section
│   │       └── Contact.tsx   # Contact form
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   ├── index.css             # Global styles
│   └── assets/               # Static assets
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🔧 Customization

### Changing Personal Information
- Update name, bio, and contact info in respective components
- Replace profile image in `public/profile.png`
- Update CV file in `public/0xElmohands_CV.pdf`

### Styling
- Colors and themes can be modified in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles inline with Tailwind classes

### Contact Form
The contact form uses Formspree. To change the email recipient:
1. Sign up at [Formspree](https://formspree.io)
2. Get your form endpoint
3. Update the URL in `src/components/Sections/Contact.tsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **VPS**: Upload `dist` folder to your server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mazen Ayman** - AI Engineer & Full Stack Developer
- Email: mazen.320230190@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ using React & Tailwind CSS
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
