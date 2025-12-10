# 🤖 JARVIS AI Assistant - Web Interface

[![React](https://img.shields.io/badge/React-18.3+-blue.svg)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4+-green.svg)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-blue.svg)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Modern web interface for JARVIS AI Assistant - An advanced AI-powered virtual assistant with voice recognition, face authentication, phone integration, and intelligent automation capabilities.

## 🎯 Overview

This is the web interface for JARVIS AI Assistant, built with modern web technologies to provide a sleek, responsive, and interactive user experience. The interface showcases the capabilities of the JARVIS AI Assistant project and provides comprehensive documentation.

## ✨ Features

- **Modern UI/UX**: Sleek cyberpunk-inspired design with smooth animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Built with shadcn/ui and Radix UI primitives
- **Dark Theme**: Cyberpunk aesthetic with glowing effects
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Type Safety**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3+**: Modern React with hooks and concurrent features
- **TypeScript 5.8+**: Type-safe development
- **Vite 5.4+**: Fast build tool and development server

### **UI & Styling**
- **Tailwind CSS 3.4+**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library

### **Additional Libraries**
- **React Router DOM**: Client-side routing
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation
- **date-fns**: Date manipulation utilities
- **Recharts**: Data visualization components

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **yarn** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avinashb722/jarvis-ai-assistant.git
   cd jarvis-ai-assistant/web-interface
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets (images, icons)
└── main.tsx           # Application entry point
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Cyan/Blue tones for main actions
- **Secondary**: Purple accents for highlights
- **Background**: Dark theme with subtle gradients
- **Text**: High contrast for accessibility

### **Typography**
- **Display Font**: Modern sans-serif for headings
- **Body Font**: Clean, readable font for content
- **Mono Font**: Code and technical content

### **Components**
- Built with **shadcn/ui** for consistency
- **Radix UI** primitives for accessibility
- Custom **cyberpunk** styling with glowing effects

## 🔧 Configuration

### **Tailwind CSS**
Custom configuration in `tailwind.config.ts` with:
- Custom color palette
- Typography settings
- Animation utilities
- Component variants

### **TypeScript**
Strict TypeScript configuration for:
- Type safety
- Better IDE support
- Compile-time error checking

### **Vite**
Optimized build configuration:
- Fast HMR in development
- Optimized production builds
- Asset optimization
- Code splitting

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Deploy to Netlify**
```bash
# Build
npm run build

# Deploy dist folder to Netlify
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component consistency
- Add proper documentation
- Test on multiple devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Credits

### **Development**
- **Lead Developer**: [Avinash Biradar](https://github.com/Avinashb722)
- **UI/UX Design**: Modern cyberpunk aesthetic
- **Component Library**: shadcn/ui and Radix UI

### **Technologies**
- **React Team**: For the amazing React framework
- **Vercel Team**: For Vite and deployment platform
- **Tailwind Labs**: For Tailwind CSS
- **shadcn**: For the beautiful component library

---

**Part of the JARVIS AI Assistant Project**

*"Sometimes you gotta run before you can walk." - Tony Stark*
