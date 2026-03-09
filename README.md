✍️ SignMe Website

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-ready-blue?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🔐 Secure Digital Signatures for Everyone

**SignMe** is a modern **SaaS platform for digital signatures**, designed to simplify how individuals and organizations sign and manage documents online.

A **digital signature** is an encrypted electronic stamp used to verify the authenticity and integrity of digital information such as:

- 📄 Electronic documents  
- 📧 Email messages  
- 📑 Contracts and agreements  
- ⚙️ Software macros or files  

Digital signatures ensure that:

- ✅ The document **originates from the verified signer**
- 🔒 The content **has not been altered after signing**
- 🕒 The signature **can be verified at any time**

In many ways, a **digital signature is the electronic equivalent of a handwritten signature**, but with stronger **security, traceability, and reliability**.

With **SignMe**, users can:

- ✍️ Sign documents electronically  
- 📤 Send documents for signature  
- 🔍 Verify the authenticity of signatures  
- ☁️ Securely manage signed documents in the cloud  

The project is built with a **modern frontend stack using React, TypeScript, and Vite**, ensuring fast performance and a smooth developer experience.

---

# 🚀 Tech Stack

- ⚛️ **React** – Modern UI library
- 🟦 **TypeScript** – Type-safe JavaScript
- ⚡ **Vite** – Lightning-fast development and build tool
- 🐳 **Docker** – Containerized deployment

---

# 📦 Installation

Follow these steps to install and run the project locally.

## 1️⃣ Clone the repository

```bash
git clone https://github.com/darixsamani/signme-website.git
cd signme-website
```

## 2️⃣ Install dependencies

Make sure you have **Node.js (>=18)** installed.

```bash
npm install
```

or

```bash
yarn install
```

## 3️⃣ Run the development server

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will start at: http://localhost:5173

## 🏗️ Build for Production

To build the optimized production version:

```bash
npm run build
```
Preview the production build locally:

```bash
npm run preview
```

## 🐳 Run with Docker

If Docker is installed on your machine:

```bash
docker build -t signme-website .
docker run -p 5173:5173 signme-website
```

---

## 📁 Project Structure


```
signme-website
│
├── public/          # Static assets
├── src/             # Application source code
│   ├── components/  # Reusable UI components
│   ├── pages/       # Application pages
│   ├── assets/      # Images and styles
│   └── main.tsx     # Application entry point
│
├── vite.config.ts
├── package.json
└── README.md
```

## 📜 License

This project is licensed under the MIT License.