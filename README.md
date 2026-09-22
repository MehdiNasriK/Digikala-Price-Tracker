# 🏷️ Digikala Price Tracker

A full-stack product price tracking application built to simplify monitoring product prices on Digikala.

## 📌 About The Project

Checking hundreds of products manually every day can be extremely time-consuming.

The original workflow was simple but repetitive:

1. Open a product on Digikala
2. Check its current price
3. Repeat the process for hundreds of products

This project was created to automate the repetitive part of that workflow.

Instead of manually checking every product, you can search for products on Digikala, add the products you want to monitor to your personal list, and refresh the list to retrieve their latest prices.

---

## ✨ Features

- 🔎 Search Digikala products
- ➕ Add products to a personal tracking list
- 📋 View all tracked products
- 🔄 Refresh product prices
- 📦 Track product availability
- 🗑️ Remove products from the tracking list
- 💾 Persist tracked products in PostgreSQL
- 🐳 Run the entire application with Docker Compose
- 🧩 Separated frontend and backend architecture

---

## 🏗️ Tech Stack

### Frontend

- React
- React Router
- Axios
- Vite
- CSS

### Backend

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Digikala API

### DevOps

- Docker
- Docker Compose

---

## 🧱 Architecture

The project is divided into three main services:

```text
┌──────────────────────┐
│      React App       │
│      Frontend        │
│       :8080          │
└──────────┬───────────┘
           │
           │ REST API
           ▼
┌──────────────────────┐
│    Express Server    │
│       Backend        │
│        :3000         │
└──────────┬───────────┘
           │
           │ Prisma
           ▼
┌──────────────────────┐
│      PostgreSQL      │
│        :5432         │
└──────────────────────┘
```
## 🐳 Running With Docker
1. Clone the repository
```text
git clone https://github.com/MehdiNasriK/Digikala-Price-Tracker.git
```
2. Start the application
```text
docker compose up --build
```

## 🎯 Why I Built This
This project started from a real-world problem:
Manually checking hundreds of product prices every day is repetitive and inefficient.
Instead of treating the task as a manual process, I built a small system around it.
The project gave me practical experience with:
- Building a full-stack application
- REST API design
- React component architecture
- Express.js
- Prisma ORM
- PostgreSQL
- Docker
- API integration
- Error handling
- Separating business logic from database logic

## ⚠️ Disclaimer
This project is intended for educational and personal automation purposes.
It interacts with publicly accessible product information and should be used responsibly and in accordance with the relevant service's terms and policies.