# Smart Task Manager

This project is a Smart Task Manager application built as part of the Tech Pioneer Program 2025 Case Study Round. The application enables users to manage their tasks efficiently with features like categorization, deadline management, and real-time synchronization.

---

## Features

- Add, edit, and delete tasks
- Set deadlines and visually identify tasks due today or upcoming
- Mark tasks as completed (with visual confirmation)
- Organize tasks into categories: Work, Personal, Learning
- Filter tasks by category or deadline
- Firebase Authentication (email/password or Google)
- Real-time sync using Firebase Firestore
- Responsive design for mobile and desktop devices
- Unit testing for utility functions using Jest

---

## Tech Stack

**Frontend:** React (Vite)  
**State Management:** React Hooks  
**Authentication:** Firebase Auth  
**Database:** Firebase Firestore (NoSQL)  
**Styling:** CSS  
**Date Handling:** Day.js  
**Testing:** Jest  

---

## How to Run the Project

1. **Clone the repository**



```bash
git clone https://github.com/your-username/smart-task-manager.git
cd smart-task-manager
npm install
```

2. **Configure Firebase**

Go to https://console.firebase.google.com

Create a new Firebase project

Enable Firestore in test mode

Enable Authentication (Email/Password or Google Sign-In)

Copy your Firebase config object and paste it in src/firebase.js:

// src/firebase.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

3. **Start the development server**
npm run dev

4. **Run unit tests**
npm test


## Assumptions Made
Each user can manage only their own tasks.

Task reminders are implemented visually and do not trigger browser or email notifications.

Firestore stores deadlines in a standard date string format (YYYY-MM-DD).

App assumes an internet connection is available for data sync.

The project uses Firebase Authentication to isolate user data by UID.

Tasks are synced across sessions and devices in real time.

## Improvements If More Time Was Available
Add push/email notifications for task deadlines

Support offline-first functionality and task queuing

Introduce task priorities and subtasks

Integrate drag-and-drop support for task reordering

Enhance UI with theme support (dark/light)

Add a calendar view or Kanban board mode

Improve Firestore security rules for role-based access control

Refactor state management using a library like Zustand or Redux for scalability

Add complete unit and integration tests for all components