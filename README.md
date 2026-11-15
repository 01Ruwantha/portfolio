# Ruwantha Madhushan – Professional Developer Portfolio

> **Live Portfolio & GitHub Pages Ready**  
> Modern, responsive, high-performance portfolio website built with semantic HTML5, modern CSS3 (Dark/Light themes), and vanilla JavaScript. Zero heavy dependencies.

---

## 🌟 Overview & Highlights

- **Profile:** Ruwantha Madhushan (P.V. Ruwantha Madhushan)
- **Role:** Mobile App Developer (Flutter) | Web Developer | Full-Stack Developer | Game Developer
- **Education:** Bachelor of Science (Honours) in Electronics and Computer Science Undergraduate, University of Kelaniya, Sri Lanka
- **Experience:** Former Mobile App Developer Intern at **ARTecX Solutions** (Dec 2025 – Jun 2026, 7 mos / 26 weeks · 6 real-world Flutter apps)
- **Affiliation:** Co-Owner & Developer at **Madhushan Studios**
- **Core Technologies:** Flutter, Dart, Firebase (FCM, Auth, Firestore), BLoC, Riverpod, Provider, GoRouter, Dio, React Native, React, Spring Boot, Java (OOP, Swing), Python (Flask, FastAPI), MySQL, MongoDB, Hive, Unreal Engine 5, Blender.
- **Resume URL:** [https://01ruwantha.github.io/CV/](https://01ruwantha.github.io/CV/)
- **Contact:** `01ruwantha@gmail.com` | `076-0018969` / `+94 76 001 8969` | Horana, Sri Lanka
- **GitHub:** [https://github.com/01Ruwantha](https://github.com/01Ruwantha)
- **LinkedIn:** [https://www.linkedin.com/in/01ruwantha/](https://www.linkedin.com/in/01ruwantha/)

---

## 📂 Project Structure

```text
portfolio/
├── index.html               # Main portfolio landing page with interactive filters & modal deep-view
├── calculator.html          # Dedicated showcase page for Smart Calculator (Google Play App)
├── vrnt-engineers.html      # Dedicated showcase page for VRNT Engineers (Google Play App)
├── cat-tap-hunt.html        # Dedicated showcase page for Cat Tap Hunt (Google Play Game)
├── todo-list.html           # Dedicated showcase page for Todo List (Google Play App)
├── assets/
│   ├── css/
│   │   └── style.css        # Responsive styling, modern CSS variables, dark/light themes, animations
│   ├── js/
│   │   └── main.js          # Dynamic project renderer, category filtering, modal & lightbox, email copy
│   └── images/              # Local high-res assets, screenshots, and profile images
└── README.md                # Deployment and customization guide
```

---

## 🚀 How to Publish to GitHub Pages

You can publish this portfolio in **2 ways** using GitHub Pages for free:

### Option A: Your Personal Primary GitHub Site (`01ruwantha.github.io`)
If you want the website to be accessible directly at **`https://01ruwantha.github.io`**:

1. Go to [GitHub](https://github.com) and create a new repository named exactly:
   ```
   01ruwantha.github.io
   ```
   *(Make sure it is **Public**)*.

2. In your local terminal inside this folder (`c:\Users\HP\Desktop\portfolio`), run:
   ```bash
   git init
   git add .
   git commit -m "feat: launch Ruwantha Madhushan modern developer portfolio"
   git branch -M main
   git remote add origin https://github.com/01Ruwantha/01ruwantha.github.io.git
   git push -u origin main
   ```

3. GitHub Pages will build automatically! Within 1–2 minutes, your website is live at:  
   👉 **`https://01ruwantha.github.io`**

---

### Option B: A Project Repository (e.g., `https://01ruwantha.github.io/portfolio`)
If you want to keep the repository named `portfolio`:

1. Create a repository named `portfolio` on your GitHub account (`01Ruwantha`).
2. In your terminal:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio release"
   git branch -M main
   git remote add origin https://github.com/01Ruwantha/portfolio.git
   git push -u origin main
   ```
3. In GitHub, open your `portfolio` repository:
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: **`main`**, Folder: **`/(root)`**, and click **Save**.
4. In about 1 minute, your portfolio will be live at:  
   👉 **`https://01ruwantha.github.io/portfolio/`**

---

## 🛠️ Features Included

1. **Category Filtering:** Filter projects seamlessly across:
   - `All Projects (11)`
   - `Mobile Apps (Flutter & RN)`
   - `Web & AI (Flask & JS)`
   - `Java & Software`
   - `Game Dev & 3D (UE5 & Blender)`
2. **Dedicated Experience Section:**
   - Detailed showcase of the 6 production Flutter applications built during the internship at ARTecX Solutions (PawlyMark Doc, Seller-App-PawlyMark, Amano Air, Pet Care User App, Card Chat, ChatInPay).
   - Responsive design standard (`flutter_screenutil`) highlight across all apps.
3. **Madhushan Studios Spotlight:**
   - Dedicated showcase of live published apps on Google Play Store (*Smart Calculator, VRNT Engineers, Cat Tap Hunt, Todo List*).
4. **Interactive Deep-View Modal:**
   - Clicking any project card opens a rich modal with bullet points, architecture decisions, team contributors, external links, and full screenshot galleries.
   - Deep-linking supported (e.g., sharing `index.html#project-calculator` automatically opens the corresponding modal).
5. **Full-Screen Lightbox:**
   - Click any screenshot to inspect it in high resolution with left/right arrow navigation.
6. **Theme Switcher:**
   - Toggle between **Dark Mode** (sleek tech modern aesthetic) and **Light Mode** (clean Google aesthetic). User preference is remembered in `localStorage`.
7. **One-Click Email Copy & Toast Notification:**
   - Click the "Copy" button to copy `01ruwantha@gmail.com` to clipboard with an animated status toast.

---

## 📝 Customization & Maintenance

- **Add or Edit Projects:**  
  Open `assets/js/main.js` and modify or add entries in the `projectsData` array. The grid, tags, modal, and screenshots update automatically.
- **Update CV Link:**  
  Search for `https://01ruwantha.github.io/CV/` in `index.html` and replace it whenever you update your CV location.
- **Colors & Typography:**  
  Edit the CSS variables in `assets/css/style.css` under `:root` and `[data-theme="light"]`.

---

© 2026 Ruwantha Madhushan • Madhushan Studios. Built with care and precision.
