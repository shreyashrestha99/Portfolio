# Shreya Shrestha - Portfolio Website

A beautiful, modern, and responsive portfolio website showcasing your skills as a full-stack developer and UI/UX designer.

## ✨ Features

- **Modern Design**: Clean, minimalist design with soft tech aesthetics, supporting light and dark themes.
- **Responsive Layout**: Fully responsive design optimized for mobile, tablet, and desktop screens.
- **Interactive Elements**: Smooth scrolling, hover effects, CSS animations, and star-icon rotated theme-toggle.
- **Project Carousel**: Touch-friendly project carousel with filter categories (Web-based, Code-based, UI/UX Design).
- **Contact Me Section**: Positioned prominently above the About Me section with social links and input validation.
- **Back to Top**: Throttled scroll detection showing a smooth scroll back-to-top button.

## 📁 File Structure

```
portfolio/
├── assets/
│   └── shreya shrestha.cv.pdf  # Downloadable resume
├── images/
│   ├── picture1.jpg            # Hero banner or project images
│   ├── picture2.png
│   ├── picture3.png
│   ├── picture4.png
│   ├── picture5.png
│   ├── picture6.png
│   ├── picture7.png
│   └── picture8.png
├── index.html                  # Main landing page
├── project-biruwa.html         # Biruwa project detail page
├── project-euphoria.html       # Euphoria project detail page
├── project-land.html           # Land Rental project detail page
├── project-nyc311.html         # NYC 311 Data project detail page
├── project-portfolio.html      # Portfolio creation project detail page
├── project-printers.html       # Printers Ecommerce project detail page
├── script.js                   # Client-side interactivity and themes
├── send_message.php            # PHP contact message processing
├── styles.css                  # Main stylesheet with layout & theming variables
└── README.md                   # This documentation file
```

## 🚀 Sections

### 1. Header Navigation
- Fixed sticky navigation with a modern backdrop-blur filter.
- Hamburger icon animation that transforms into an 'X' on mobile screens.
- Light/Dark mode switcher with rotating star animation.
- Active section highlighting dynamically updated on scroll.

### 2. Banner Section
- Interactive hero banner featuring customized blue-yellow gradient overlay and smooth animations.

### 3. Contact Me Section
- Positioned above the About Me section as requested.
- Functional contact form with client-side field validation.
- Links to social media handles and email address.

### 4. About Me Section
- Personal introduction, skills list, and qualifications.
- Call-to-action buttons for downloading CV and viewing projects.

### 5. Projects Section
- Filterable carousel displaying project cards.
- Layout width and image specs are tailored to fit standard layout formats (280px × 380px cards).
- Toggle visibility based on categories: Web-based, Code-based, or UI/UX Design.

### 6. Footer
- Simple copyright notice, quick navigation links, and social links.

## 🎨 Theme Styling (CSS Variables)

```css
/* Light Theme Defaults */
:root {
    --bg: #f7f9fc;
    --text: #080808;
    --primary: #2563eb;
    --accent: #74C0FC;
    --warning: #ffd54a;
    --card: #ffffff;
    --border: #e5e7eb;
    --shadow: 0 8px 24px rgba(16, 24, 40, 0.08);
}

/* Dark Theme Variables */
.dark-mode {
    --bg: #0f172a;
    --text: #ffffff;
    --card: #0b1220;
    --border: #1f2937;
}
```

## 🛠️ Technologies Used

- **HTML5**: Semantic tags for accessibility.
- **CSS3**: Variables, Flexbox, CSS Grid, media queries, keyframe animations.
- **JavaScript (ES6+)**: Custom theme toggle (persisted via LocalStorage), carousel navigation, scroll throttling.
- **PHP**: Back-end contact form handler.

## 🚀 Getting Started

1. Open `index.html` in any web browser.
2. Customize personal information in `index.html` and project pages.
3. Update paths to images in `images/` or styles in `styles.css`.
4. Ensure a local server environment (like XAMPP) is used to run `send_message.php`.
