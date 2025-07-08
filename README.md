# 📚 Library Management System (Frontend)

A responsive and modern Library Management System frontend built using **React**, **Redux Toolkit (RTK)**, **RTK Query**, and **TypeScript**. This application allows users to manage books, authors, categories, and library members with ease.

## 🔧 Tech Stack

- ⚛️ React
- 🧠 Redux Toolkit
- 📡 RTK Query
- 🌀 TypeScript
- 💅 CSS Modules / Tailwind 
- 📁 Vite / CRA (depending on setup)

---

## 🚀 Features

- 📖 View, add, edit, and delete books
<!-- - 🧑‍💼 Manage authors 
- 🗂️ Categorize books
- 🔍 Search and filter functionality -->
- 🔄 Data fetching and caching via RTK Query
- ⚡ Fully typed using TypeScript
- 🔄 Optimistic UI updates for a better UX

---

## 🛠️ Installation

```bash
git clone https://github.com/Joyanti-Chowdhury/library-management-system-client
cd library-management-system-client
npm install

npm run dev       

// src/api/baseApi.ts
baseUrl: 'http://localhost:5000/api', 

src/
├── app/                 # Redux store setup
├── features/            # Slices and RTK Query endpoints
├── components/          # Reusable UI components
├── pages/               # Route-based pages
├── api/                 # RTK Query API service
├── types/               # Global TypeScript types
├── hooks/               # Custom hooks
└── main.tsx             # Entry point

🧱 State Management
Redux Toolkit is used for managing application state.

RTK Query handles data fetching, caching, and syncing with the backend.
📸 Screenshots


📌 To Do
 Add authentication flow (login/signup)

 Pagination for book lists

 Unit and integration tests

 Role-based access control (admin vs user)


Live Link : https://mellifluous-cocada-d99bf4.netlify.app















