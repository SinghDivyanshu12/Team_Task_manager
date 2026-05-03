# Team_Task_manager

A full-stack web application to manage projects and tasks with **role-based access (Admin/Member)**, task assignment, and progress tracking.

---

## 🚀 Features

### 🔐 Authentication
- User Signup & Login (JWT-based)
- Secure password hashing using bcrypt

### 👥 Role-Based Access Control
- **Admin**
  - Create projects
  - Manage team
- **Member**
  - View projects
  - Work on assigned tasks

### 📁 Project & Team Management
- Create and manage projects
- Add team members to projects

### 🧾 Task Management
- Create tasks
- Assign tasks to users
- Set deadlines
- Update task status:
  - Pending
  - In Progress
  - Done

### 📊 Dashboard
- Total tasks
- Completed tasks
- Pending tasks
- Overdue tasks

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router

### Backend
- Node.js
- Express.js
- Sequelize ORM

### Database
- SQLite (for development)

### Deployment
- Netlify


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/team-task-manager.git

cd team-task-manager

### 2️⃣ Backend Setup


cd backend
npm install
npm run dev


Backend runs on:

http://localhost:5000


---

### 3️⃣ Frontend Setup


cd frontend
npm install
npm run dev


Backend runs on:

http://localhost:5000


---

### 3️⃣ Frontend Setup


cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


---

## 🔗 API Endpoints

### Auth
- POST `/api/auth/signup`
- POST `/api/auth/login`

### Projects
- GET `/api/projects`
- POST `/api/projects` (Admin only)

### Tasks
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id/status`

### Dashboard
- GET `/api/dashboard`

---

## 🔐 Environment Variables

For development (SQLite), no environment variables required.

For production:

PORT=5000
JWT_SECRET=your_secret_key


---

## 🚀 Deployment

### Backend (Railway)
- Connect GitHub repo
- Set root directory → `backend`
- Deploy

### Frontend (Netlify)
- Build command → `npm run build`
- Publish directory → `dist`

---

## ⚠️ Known Limitations

- SQLite database resets on redeploy
- Basic UI (can be enhanced with Tailwind)
- No real-time updates

---

## 📈 Future Improvements

- Switch to PostgreSQL (production-ready DB)
- Add drag-and-drop Kanban board
- Add notifications
- Improve UI (Tailwind / Material UI)
- Add pagination & search
