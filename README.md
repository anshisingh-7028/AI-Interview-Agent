# 🤖 AI Interview Agent

> An AI-powered interview preparation platform that helps users prepare for technical interviews through resume analysis and personalized interview generation.

## 🚀 Live Demo

🔗 **Live Application:** https://ai-interview-agent-70em.onrender.com/

## 📌 Overview

AI Interview Agent is a full-stack web application designed to provide an interactive interview preparation experience.

The platform allows users to upload their resumes, receive resume-based analysis, and prepare for interviews using AI-generated questions and interview workflows.

## ✨ Features

* 📄 Resume upload and analysis
* 🤖 AI-powered interview generation
* 🔐 User registration and login
* 👤 User profile management
* 💳 Online payment integration
* 📊 Interview preparation workflow
* 🔒 Protected routes
* 📱 Responsive user interface
* ⚡ REST API based backend

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Firebase Authentication
* JWT

### Payment

* Razorpay

### Deployment

* Vercel
* Render

## 🏗️ Project Architecture

```text
                    ┌──────────────────┐
                    │   React Frontend │
                    │   + Tailwind CSS │
                    └────────┬─────────┘
                             │
                             │ REST API
                             ▼
                    ┌──────────────────┐
                    │  Node + Express  │
                    │     Backend      │
                    └────────┬─────────┘
                             │
                ┌────────────┴────────────┐
                ▼                         ▼
        ┌──────────────┐          ┌──────────────┐
        │   MongoDB    │          │   External   │
        │   Database   │          │   Services   │
        └──────────────┘          │ Firebase     │
                                  │ Razorpay     │
                                  └──────────────┘
```

## 📂 Project Structure

```text
AI-Interview-Agent/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone ...
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Configure environment variables

Create `.env` files for the frontend and backend.


Never commit your real `.env` file.

### 5. Start the application

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev
```

## 📸 Screenshots

Add screenshots of:

* Login page
* Dashboard
* Resume upload
* Interview page
* Profile
* Payment page

## 🔐 Security

* JWT-based authentication
* Protected API routes
* Environment variables for sensitive credentials
* Role/user authorization where required

## 📚 What I Learned

While developing this project, I improved my understanding of:

* Full-stack application architecture
* REST API development
* Authentication and authorization
* MongoDB database design
* React application development
* API integration
* Payment gateway integration
* Deployment and production debugging

## 🔮 Future Improvements

* Advanced AI interview feedback
* Voice-based interviews
* Interview performance analytics
* More programming languages and interview categories
* Personalized learning recommendations

## 👩‍💻 Author

### Anshika Singh

Full Stack Developer | MERN Stack | Java Full Stack

🔗 GitHub
🔗 LinkedIn
🌐 Portfolio
