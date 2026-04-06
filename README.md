# Full-Stack Task Tracker (Angular + FastAPI)

## Overview

This project is a **Full-Stack Task Tracker Application** built using **Angular (Frontend)** and **FastAPI (Backend)**.

The application allows users to:

* Sign up and log in
* Create tasks
* View tasks
* Delete tasks
* Filter tasks by status

The frontend communicates with the backend using **Angular HttpClient**, and the backend uses **FastAPI with Pydantic models**.

---

# Tech Stack

### Frontend

* Angular
* RxJS (BehaviorSubject for state management)
* Angular Router
* Angular HttpClient

### Backend

* FastAPI
* Uvicorn
* Pydantic

---

# Project Structure

```
task-manager
│
├── frontend (Angular)
│   └── src/app
│       ├── components
│       │   ├── login
│       │   ├── signup
│       │   ├── dashboard
│       │   ├── task
│       │   └── task-form
│       │
│       ├── services
│       │   └── task.service.ts
│       │
│       ├── guards
│       │   └── auth.guard.ts
│       │
│       ├── app.routes.ts
│       └── app.config.ts
│
└── backend
    └── main.py
```

---

# Setup Instructions

## 1. Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/task-tracker.git
cd task-tracker
```

---

# Backend Setup (FastAPI)

### Install Dependencies

```
py -m pip install fastapi uvicorn
```

### Run Backend Server

Navigate to backend folder:

```
cd backend
```

Run the server:

```
py -m uvicorn main:app --reload
```

Backend will run at:

```
http://localhost:8000
```

API Documentation (Swagger UI):

```
http://localhost:8000/docs
```

---

# Frontend Setup (Angular)

Navigate to frontend folder:

```
cd task-manager
```

Install dependencies:

```
npm install
```

Run Angular app:

```
ng serve
```

Frontend will run at:

```
http://localhost:4200
```

---

# Application Workflow

1. User signs up
2. User logs in
3. Dashboard loads tasks
4. User can:

   * Create tasks
   * View tasks
   * Delete tasks
   * Filter tasks by status

Angular communicates with FastAPI using REST APIs.

---

# API Endpoints

### Authentication

POST `/auth/signup`
Create a new user

POST `/auth/login`
Returns a mock authentication token

---

### Tasks

GET `/tasks`
Retrieve all tasks

POST `/tasks`
Create a task

PUT `/tasks/{id}`
Update task

DELETE `/tasks/{id}`
Delete task

---

# Data Models

### User

```
{
  "id": int,
  "username": str,
  "email": str,
  "password": str
}
```

### Task

```
{
  "id": int,
  "user_id": int,
  "title": str,
  "description": str,
  "status": "Open | In Progress | Completed"
}
```

---

# Notes

* Data is stored in memory (no database required)
* This project was built for demonstrating Angular + FastAPI full-stack development
* Authentication uses a mock token

---

# Author

Developed as part of a technical assignment demonstrating:

* Angular component architecture
* RxJS state management
* FastAPI asynchronous API handling
* Angular ↔ FastAPI integration
