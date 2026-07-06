# Jordan Reitz Portfolio

A modern, responsive personal portfolio website showcasing full-stack development projects and skills. Built with HTML, CSS, and vanilla JavaScript with a dark theme and teal accent colors.

## 🎨 Features

- **Responsive Design** — Mobile-first approach with optimized layouts for all screen sizes
- **Featured Work Section** — Alternating project cards with images, descriptions, and tech stacks
- **Project Grid** — Additional projects displayed in a 2-column grid on desktop
- **Skills Display** — Interactive skill pills showcasing core technologies and expertise
- **Navigation Sidebar** — Fixed sidebar on desktop that collapses to horizontal header on mobile
- **Smooth Animations** — CSS transitions and hover effects for enhanced user experience
- **Accessibility** — Semantic HTML and keyboard-friendly navigation

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, flexbox, media queries, animations
- **JavaScript** — Active navigation state management
- **Fonts** — Inter (sans-serif) and JetBrains Mono (monospace) from Google Fonts

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main portfolio page
├── css/
│   ├── styles.css            # Custom styles and design system
│   └── normalize.css         # CSS normalization
├── javascript/
│   └── scripts.js            # Navigation and interactivity
├── images/                   # Project screenshots and assets
├── visuals:wireframes/       # Design wireframes and mockups
└── README.md                 # This file
```

## 🎯 Sections

### About
Introduction and core skill set displayed as interactive pills (Python, Django, TypeScript, SQL, REST APIs)

### Featured Work
Three main projects highlighted with:
- Project thumbnail image
- Project title and category badge
- Description
- Technology stack

### More Projects
Grid of additional projects with:
- Project title and category badge
- Description
- Link to GitHub repository

### Contact
Call-to-action section with link to connect on LinkedIn

## 🎨 Design System

### Colors
- **Background** — Dark blue (`#0a192f`)
- **Surface** — Elevated dark blue (`#112240`)
- **Text Primary** — Light blue (`#e6f1ff`)
- **Text Secondary** — Muted blue (`#8892b0`)
- **Accent** — Teal (`#64ffda`)

### Typography
- **Headings** — Inter, bold (font-weight: 700)
- **Body** — JetBrains Mono
- **Responsive sizes** — Uses `clamp()` for fluid scaling

### Spacing & Layout
- Sidebar width: 280px—460px (responsive)
- Content max-width: 600px
- Gap between sections: 72px—120px (responsive)
- Gutter padding: 24px—100px (responsive)

## 📱 Responsive Breakpoints

### Desktop (950px+)
- Fixed left sidebar with navigation
- Alternating featured project layouts
- 2-column project grid

### Mobile (<950px)
- Full-width horizontal header
- Stacked project cards with full-width images
- Single-column project grid
- Optimized touch-friendly spacing

## 🚀 Getting Started

1. **Clone or download** the repository
2. **Open `index.html`** in a web browser
3. **Customize content** — Update project information, images, and descriptions
4. **Modify styles** — Edit CSS variables in `:root` for custom colors and spacing
5. **Add projects** — Duplicate project cards and update links/content

## 💡 Customization

### Update Portfolio Content
Edit the HTML in `index.html`:
- Replace project titles, descriptions, and images
- Update technology tags in `.descriptors`
- Modify skill pills in `#skill-pills`
- Update contact links and social profiles

### Customize Colors
Modify CSS custom properties in `css/styles.css`:
```css
:root {
    --bg: #0a192f;                           /* Background color */
    --text-primary: #e6f1ff;                 /* Primary text */
    --accent: #64ffda;                       /* Accent color */
    /* ... more variables */
}
```

### Adjust Spacing & Layout
Update layout variables in `:root`:
```css
--sidebar-width: clamp(280px, 42vw, 460px); /* Sidebar width range */
--section-gap: clamp(72px, 12vh, 120px);    /* Gap between sections */
--gutter: clamp(24px, 5vw, 100px);          /* Padding/margins */
```

## 🔧 Navigation

The navigation sidebar includes links to:
- **ABOUT** — Introduction and skills
- **WORK** — Featured projects (#featured-work)
- **PROJECTS** — Additional project grid (#more-projects)
- **CONTACT** — Get in touch section (#contact)

Active navigation state is managed by `scripts.js` and updates on link click.

## 📄 License

This portfolio template is open for personal use. Feel free to customize and adapt for your own needs.

## 👤 Author

**Jordan Reitz** — Full-stack Developer

- GitHub: [github.com/syuyrw](https://github.com/syuyrw)
- LinkedIn: [linkedin.com/in/jordan-reitz-90b742171](https://www.linkedin.com/in/jordan-reitz-90b742171/)
- Email: jordan.reitz@gmail.com
