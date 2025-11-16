# 🤝 Contributing to Ireland Hotel Analytics Website

Thank you for considering contributing to the **Ireland Hotel Analytics Website** project! 🎉  
Your contributions help improve the dashboard, enhance user experience, and strengthen open‑source collaboration.

This document outlines the guidelines for contributing code, documentation, ideas, or improvements.

---

## 🧭 Table of Contents
- [Code of Conduct](#-code-of-conduct)
- [How to Contribute](#-how-to-contribute)
- [Project Setup](#-project-setup)
- [Branching Strategy](#-branching-strategy)
- [Commit Message Guidelines](#-commit-message-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Coding Style](#-coding-style)
- [Reporting Issues](#-reporting-issues)
- [Feature Requests](#-feature-requests)
- [Project Structure Overview](#-project-structure-overview)

---

## 📘 Code of Conduct
By participating in this project, you agree to uphold a respectful, inclusive, and harassment‑free environment for everyone.

Please read the **CODE_OF_CONDUCT.md** (if available) before contributing.

---

## 🙌 How to Contribute
You can contribute in several ways:

### ✔️ Bug Fixes
Identify bugs, fix them, and submit a pull request.

### ✔️ New Features
Add meaningful features such as:
- new charts or metrics
- improved filtering
- enhanced map visuals
- UI/UX improvements

### ✔️ Documentation
Improve readability, clarity, examples, or add tutorials.

### ✔️ Code Quality
Refactor or optimize code for performance and scalability.

---

## 🔧 Project Setup
Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dineshbarri/Ireland-Hotel-Analytics-Website.git
cd Ireland-Hotel-Analytics-Website
```

### 2️⃣ Start a Local Server
Use Python or any static server:
```bash
python3 -m http.server 8000
```
Visit:
```
http://localhost:8000
```

---

## 🌿 Branching Strategy
We follow a **feature‑branch workflow**:

- `main` → stable production-ready code
- `dev` → active development
- `feature/your-feature-name` → new features or fixes

Example:
```bash
git checkout -b feature/improved-map-clustering
```

---

## 📝 Commit Message Guidelines
Use clear and descriptive commit messages.

### Format:
```
type: short description
```

### Types:
- **feat** – new feature
- **fix** – bug fix
- **style** – formatting, no code change
- **docs** – documentation changes
- **refactor** – code restructure
- **perf** – performance improvements
- **test** – add/update tests

### Example:
```
feat: add price filter panel to dashboard
fix: resolve map marker duplication issue
```

---

## 🔄 Pull Request Process
1. Ensure your branch is updated with `main`:
   ```bash
   git pull origin main
   ```
2. Push your feature branch:
   ```bash
   git push origin feature/my-feature
   ```
3. Submit a PR with:
   - A clear summary
   - Before/after screenshots (if UI changes)
   - Explanation of implementation
4. Wait for review and integrate feedback.

---

## 🎨 Coding Style
### JavaScript
- Use clear function names
- Avoid deeply nested logic
- Comment complex logic
- Keep all chart/map config modular

### HTML/CSS
- Keep components structured
- Use Tailwind classes (if applicable)
- Maintain responsiveness

### Data
- Ensure all JSON files follow the defined structure in `main.js`

---

## 🐞 Reporting Issues
If you find bugs, please open an issue using the template:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

---

## 💡 Feature Requests
Have an idea? Open a **Feature Request issue** with:
- The problem it solves
- Proposed solution
- Optional mockups or diagrams

---

## 📂 Project Structure Overview
```
Ireland-Hotel-Analytics-Website/
├── index.html
├── style.css
├── main.js
├── data/
├── assets/
├── design.md
├── outline.md
└── README.md
```

---

## 🎉 Final Notes
Thank you for helping improve the **Ireland Hotel Analytics Website**.  
Your contributions make the project better, more stable, and more impactful.

If you have any questions, feel free to open an issue or start a discussion!

