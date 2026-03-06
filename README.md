---

# 🛒 MyStore – React E-Commerce Application

![React](https://img.shields.io/badge/React-18-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-purple)
![License](https://img.shields.io/badge/License-MIT-green)

A modern **React E-Commerce Web Application** built with **React, Tailwind CSS, and FakeStore API**.
This project demonstrates core e-commerce functionality including authentication, product browsing, cart management, session handling, and responsive UI.

Designed as a **learning project and academic submission** for understanding frontend architecture and state management.

---

# 🌐 Live Features

* 🛍 Product listing using FakeStore API
* 🔍 Product search
* 🧭 Category filtering
* 🛒 Add to cart functionality
* 🔢 Quantity management
* 📦 Order summary calculation
* 🔐 Login & Registration system
* ⏱ Session expiration system
* 🌙 Dark / Light mode toggle
* 🔔 Toast notification alerts
* 📱 Fully responsive layout
* 🚫 Protected routes for secure pages

---

# 📸 Application Screens

You can include screenshots here when pushing to GitHub.

Example sections:

```
Dashboard UI
Products Page
Cart Page
Login Page
```

---

# ⚙ Tech Stack

### Frontend

* React
* Tailwind CSS
* React Router
* React Icons
* React Toastify

### API

* FakeStore API

### Storage

* localStorage

### Build Tool

* Vite

---

# 🔐 Authentication System

Users must **register before logging in**.

### Flow

```
Register → Login → Session Created (5 minutes)
                         ↓
                    Access Pages
                         ↓
                  Session Expires
                         ↓
                  Automatic Logout
```

After login:

* A **5-minute session timer** is created
* Timer is visible on screen
* When the session expires, user is automatically logged out

---

# ⏱ Session Management

A **session timer** runs after login.

Features:

* Session duration: **5 minutes**
* Timer visible at bottom-right corner
* Automatic logout when timer reaches `00:00`
* Cart and session data cleared automatically

---

# 🛒 Cart System

Cart state is managed using **localStorage**.

Capabilities:

* Add product to cart
* Increase / decrease quantity
* Remove items automatically
* Calculate total order amount
* Real-time UI updates
* Cart clears automatically on logout

---

# 📂 Project Structure

```
src
│
├── components
│   ├── Navbar
│   ├── ProductCard
│   ├── CategorySidebar
│   ├── SearchBar
│   ├── Loader
│   ├── SessionTimer
│
├── pages
│   ├── Login
│   ├── Register
│   ├── Dashboard
│   ├── Products
│   ├── Cart
│   ├── Profile
│
├── services
│   └── productService
│
├── utils
│   ├── cart
│   └── sessionManager
```

---

# ⚠ Limitations of localStorage Authentication

This project stores user data and sessions in **localStorage** for learning purposes.

However, this approach has limitations.

### Security Risk

Data stored in the browser can be accessed easily.

Example:

```
localStorage.getItem("user")
```

---

### No Server Validation

There is **no backend authentication**.

Real applications verify credentials using backend APIs.

---

### Data Loss

If the browser storage is cleared:

```
Clear Browser Storage → User Account Deleted
```

---

### Single User Limitation

Only one user can exist at a time because a single object is stored.

---

# 🌍 Real-World Production Architecture

Professional applications follow this structure:

```
React Frontend
       ↓
Backend API (Node / Laravel / Django)
       ↓
Database (MySQL / MongoDB)
       ↓
Secure Authentication (JWT / OAuth)
```

This provides:

* Secure login
* Multiple users
* Encrypted passwords
* Persistent data

---

# 📱 Responsive Design

The UI is optimized for:

* Mobile devices
* Tablets
* Desktop screens

Tailwind CSS ensures flexible layout across screen sizes.

---

# ▶ Installation & Setup

Clone the repository:

```
git clone https://github.com/yourusername/mystore.git
```

Navigate into the project:

```
cd mystore
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the application:

```
http://localhost:5173
```

---

# 🎯 Learning Objectives

This project demonstrates practical understanding of:

* React component architecture
* State management
* API integration
* localStorage usage
* Authentication logic
* Protected routes
* Session handling
* Responsive UI design

---

# 📌 Future Improvements

Possible enhancements:

* Backend authentication
* Database integration
* Payment gateway integration
* Order history
* User profile management
* Product reviews system

---

# 📄 License

This project is released under the **MIT License**.

---

# 👨‍💻 Author

Developed by **Nihar Patel**

---

⭐ If you found this project useful, consider giving it a **star on GitHub**.

---
