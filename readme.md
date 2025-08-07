# Isha Sharma - Professional Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing 10+ years of expertise in ERP consulting and Microsoft Dynamics 365 implementations.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Performance Focused**: Fast loading with optimized assets
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Direct PDF download functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: For type safety
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata and providers
│   └── page.tsx             # Home page component
├── components/
│   ├── About.tsx            # About section with career story
│   ├── Contact.tsx          # Contact form and information
│   ├── Experience.tsx       # Professional timeline
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Landing section
│   ├── Navbar.tsx           # Navigation with theme toggle
│   ├── Projects.tsx         # Featured projects showcase
│   ├── Skills.tsx           # Technical skills and certifications
│   └── ThemeProvider.tsx    # Dark/light mode context
├── public/
│   ├── resume.pdf           # Downloadable resume
│   ├── profile-photo.jpg    # Profile image
│   └── projects/            # Project images
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/isha-sharma-portfolio.git
cd isha-sharma-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Metadata and SEO information
- `components/Hero.tsx` - Personal introduction and contact details
- `components/About.tsx` - Career story and values
- `components/Experience.tsx` - Work experience and achievements
- `components/Skills.tsx` - Technical skills and certifications
- `components/Projects.tsx` - Featured projects and case studies

### Images
Replace the placeholder images in the `public/` directory:
- `profile-photo.jpg` - Your professional headshot
- `og-image.jpg` - Social media preview image
- `projects/` - Project screenshots and logos

### Resume
Add your resume PDF as `public/resume.pdf` for the download functionality.

### Colors and Styling
Customize the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your brand colors
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`

### Manual Deployment
```bash
npm run build
```
Upload the generated `out/` folder to your hosting provider.

## 📊 SEO & Analytics

The website includes:
- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media previews
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated for better indexing

To add Google Analytics:
1. Get your GA4 measurement ID
2. Add to `app/layout.tsx`:
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

## 🎨 Design Features

- **Glassmorphism Effects**: Modern glass-like UI elements
- **Gradient Text**: Eye-catching gradient typography
- **Smooth Animations**: Framer Motion for interactive elements
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Hover Effects**: Interactive feedback on all clickable elements

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+
- **Large**: 1280px+

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle splitting
- **Static Generation**: Pre-rendered pages for fast loading
- **Font Optimization**: Google Fonts with display swap
- **Minimal Dependencies**: Only essential libraries included

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Dependencies
- **next**: React framework
- **react**: UI library
- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type checking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Isha Sharma**
- Email: erishasharma17@gmail.com
- Phone: +91-8527414614
- LinkedIn: [linkedin.com/in/isha-sharma-erp](https://linkedin.com/in/isha-sharma-erp)

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons
- **Vercel** - For seamless deployment platform

---

⭐ **If you found this project helpful, please consider giving it a star!**