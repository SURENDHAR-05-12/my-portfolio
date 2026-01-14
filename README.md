# ⚡ Surendhar Arasappan - Premium Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white)

[**Live Demo**](https://surendhar-05-12.github.io/my-portfolio/) | [**Report Bug**](https://github.com/SURENDHAR-05-12/my-portfolio/issues) | [**Request Feature**](https://github.com/SURENDHAR-05-12/my-portfolio/issues)

</div>

<br />

> A high-performance, visually stunning developer portfolio designed to showcase skills and projects with a premium touch. Built with an "Anti-Gravity" theme, featuring interactive particle physics, glassmorphism, and seamless animations.

---

## 🌟 Key Features

### 🎨 Visual Experience

- **Anti-Gravity Particles**: A custom Canvas-based background (`ParticlesBackground.tsx`) where thousands of distinct particles react to mouse movements, creating a repulsion effect that feels organic and fluid.
- **Glassmorphism UI**: Heavy use of backdrop filters, translucent layers, and subtle gradients to create a modern, depth-filled aesthetic (seen in the Mobile Menu and various cards).
- **Floating Mobile Menu**: A unique, detached modal-style navigation for mobile devices that floats above the content with a neon glow, rejecting the traditional full-screen drawer.

### ⚡ Interaction & Motion

- **Magnetic Cursor**: A custom-built cursor (`CustomCursor.tsx`) that snaps to interactive elements, morphing its shape to highlight links and buttons, providing tactile feedback.
- **Scroll Progress**: A gradient indicator (`ScrollProgress.tsx`) fixed at the top that visualizes how far the user has read, encouraging scroll depth.
- **Staggered Animations**: Content elements do not just appear; they cascade in with orchestrated delays using `Framer Motion`, giving the site a "waking up" feel.
- **3D Tilt Effects**: Project cards and profile sections feature 3D tilt interactions on hover for a premium feel.

### 🛠 Technical Excellence

- **Component-Based Architecture**: Modular and reusable components for maintainability.
- **Fully Responsive**: Painstakingly crafted breakpoints ensure the site looks perfect on a 4K monitor or a 320px mobile screen.
- **Performance First**: Optimized assets, lazy-loading concepts, and lightweight animations ensure a 90+ Lighthouse score.

---

## 📂 Architecture & File Structure

This project follows a clean, feature-based structure for easy scalability.

```bash
src/
├── components/          # Reusable UI Components
│   ├── About.tsx        # "About Me" section with grid layout
│   ├── Contact.tsx      # Contact form with email integration
│   ├── CustomCursor.tsx # Logic for the magnetic cursor effect
│   ├── Footer.tsx       # Standard footer
│   ├── Hero.tsx         # High-impact landing area
│   ├── Navbar.tsx       # Responsive nav (Desktop & Mobile variants)
│   ├── ParticlesBackground.tsx # Canvas logic for background
│   ├── Projects.tsx     # Dynamic project grid
│   ├── ScrollProgress.tsx # Reading progress bar
│   └── Skills.tsx       # Skill badges and categorization
├── App.tsx              # Main Layout assembler
├── index.css            # Global Tailwind directives & fonts
└── main.tsx             # React DOM entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the Repo**

    ```bash
    git clone https://github.com/SURENDHAR-05-12/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🎨 Customization Guide

### Changing the Theme

The site uses **Tailwind CSS**. You can adjust the color palette in `tailwind.config.js` or modify the gradients in `index.css`.

- **Primary Color**: Cyan (`cyan-400`, `cyan-500`)
- **Secondary Color**: Purple (`purple-500`, `purple-600`)

### modifying Project Data

Currently, project data is hardcoded in `Projects.tsx` for simplicity. To update:

1.  Open `src/components/Projects.tsx`
2.  Edit the `projects` array object.
3.  Replace images in the `/public/assets` folder.

### Particles Configuration

Want more or fewer particles?

- Open `src/components/ParticlesBackground.tsx`.
- Adjust `particleCount` logic in `initParticles`.
- Modify `maxDistance` to change how far particles repel from the mouse.

---

## � Deployment

This project is configured for **GitHub Pages**.

1.  **Build the Project**

    ```bash
    npm run build
    ```

    This generates a optimized `dist` folder.

2.  **Deploy**
    ```bash
    npm run deploy
    ```
    (Ensure you have the `gh-pages` script setup in `package.json`).

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📬 Contact

**Surendhar Arasappan** - [surendhar6384@gmail.com](mailto:surendhar6384@gmail.com)

Project Link: [https://github.com/SURENDHAR-05-12/my-portfolio](https://github.com/SURENDHAR-05-12/my-portfolio)
