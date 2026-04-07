# 🛒 Royal Ensembles - High-Performance Cart System

A modern, high-performance e-commerce cart implementation built with **React** and **Zustand**. This project demonstrates advanced state management techniques, including persistent storage and optimized re-renders.

## 🚀 Features
* **Global State Management:** Powered by Zustand for a lightweight and fast experience.
* **Optimized Rendering:** Uses `useShallow` selectors to prevent unnecessary component re-renders.
* **Persistent Cart:** Cart data survives page refreshes using Zustand's `persist` middleware.
* **Toast Notifications:** Real-time feedback for user actions (Add/Remove/Clear).
* **Responsive UI:** Built with Tailwind CSS for a seamless mobile and desktop experience.

## 🛠️ Tech Stack
* **Frontend:** React 19
* **State Management:** Zustand (with Persist Middleware)
* **Icons:** Lucide-React
* **Styling:** Tailwind CSS
* **Routing:** React Router Dom

## 🧠 What I Learned
During this project, I moved beyond the **Context API** to master **Zustand**. I learned how to:
1. Handle complex cart logic (updating quantities vs. adding new items).
2. Implement **Migration** logic for persistent state versioning.
3. Separate **Logic from UI** by returning status objects from store actions.

## 📦 Installation
1. Clone the repository: `git clone <your-repo-link>`
2. Install dependencies: `npm install`
3. Run the project: `npm run dev`
