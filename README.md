# 💰 Smart Expense Tracker

A smart, lightweight, and interactive web application designed to help users track their daily expenses, manage monthly budgets, and visualize their spending habits. 

Built as part of my **BCA 3rd Year** practical learning journey!

---

## 🚀 Live Demo
🔗** https://unnatisuthar01.github.io/smart-expense-tracker/**

---

## ✨ Key Features

* **Add & Track Expenses:** Easily log your daily expenses with titles, amounts, and specific categories (Food, Travel, Entertainment, Shopping, etc.).
* **Persistent Storage (LocalStorage):** Your data is saved locally in your browser! Refreshing the page won't delete your logged expenses.
* **Smart Budget Alert:** Set a monthly budget limit. The application will dynamically warn you when your expenses cross **80%** of your target limit.
* **Visual Analytics:** Interactive charts (using Chart.js) that display category-wise breakdowns of your spending habits.
* **Fully Responsive:** A clean, modern UI with a beautiful glassmorphic theme that works smoothly on both desktops and mobile devices.

---

## 🛠️ Tech Stack Used

* **Frontend:** HTML5, CSS3 (Custom Animations & Glassmorphism)
* **JavaScript:** Vanilla JS (ES6+, DOM Manipulation)
* **Libraries:** Chart.js (for beautiful data visualizations & Pie/Bar charts)
* **Storage:** Browser LocalStorage (for offline data persistence)

---

## 📂 Project Structure

```text
├── index.html         # Main dashboard / Home page (Add & delete expenses)
├── budget.html        # Page to set, view, and manage monthly budget limits
├── analytics.html     # Visual representation & dynamic graphs using Chart.js
├── about.html         # About the developer & modern typing animation introduction
├── style.css          # Core global styling sheet (Glassmorphism layout)
└── script.js          # Main JavaScript logic (Data calculations & LocalStorage sync)
