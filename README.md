# 🛒 E-Shopy — Modern E-Commerce Store

A fast, fully responsive, and production-ready e-commerce frontend built using the latest industry standards. The project focuses on clean state management, scalable layout design, and smooth user interactions.

---

## 🚀 Tech Stack

- **Core Framework:** React 19 (Latest) & Vite 8 (For blazing fast builds and performance)
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`) & React-Redux
- **Routing:** React Router v7 (Dynamic and protected route structures)
- **Forms & Backend Integration:** Formspree API (Zero-server email notifications)
- **UI & Icons:** React Icons

---

## ✨ Key Features & Technical Implementations

### 📦 Global Cart System (Redux Toolkit)
- Engineered a scalable global state architecture using **Redux Toolkit** to handle all shopping cart logic (`Add to Cart`, `Remove Items`, dynamic price calculation).
- Handled state immutability safely using standard Redux slices, preventing data leaks across components.

### 💼 Production-Ready Contact Form
- Built a functional, interactive customer query section integrated with **Formspree** for real-time customer data intake.
- Fixed complex structural bugs like **JSON parsing payload errors** by ensuring appropriate structural syntax (`name` attributes, strict native HTML validation, and appropriate element type scopes).

### 📱 100% Fluid & Responsive UI
- Written from-scratch CSS (leveraging advanced selector nesting concepts) that guarantees cross-device compatibility from 320px mobile viewports up to 4K displays.
- Designed with high attention to user experience (UX) by adding micro-interactions like soft transitions (`transition: opacity 0.2s ease-in-out`) on modern call-to-action hover elements.

---

## 🛠️ Performance Optimization & Best Practices
- **Clean Code Architecture:** Separate directories for components, pages, hooks, and Redux slices to match standard production workflows.
- **Strict Validation:** Integrated native HTML forms rules (`required` attributes, correct semantic types like `type="email"`) to minimize invalid server payloads.

---

## 🔧 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_GITHUB_USERNAME/e-shopy.git](https://github.com/YOUR_GITHUB_USERNAME/e-shopy.git)