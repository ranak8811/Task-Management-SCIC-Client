# **Task Management System** 📝🚀

A **Jira-like** task management system that allows users to **add, edit, delete, reorder, and drag-and-drop tasks** between different categories (**To-Do, In Progress, Done**). Tasks are stored in **MongoDB**, and changes are synchronized in **real-time** with the database.

This project is built using **React 19**, **Tailwind CSS**, **Dnd-kit** for drag-and-drop functionality, and **Firebase Authentication**.

---

## 🌍 **Live Demo**

🔗 **Frontend:** [Deployed Link](https://task-management-scic-4cd85.web.app/)

---

## 📌 **Features**

✅ **User Authentication** (Firebase)  
✅ **Add, Edit, Delete Tasks**  
✅ **Drag & Drop Tasks** between columns  
✅ **Task Reordering** within the same column  
✅ **Auto-Save Changes to Database** (MongoDB)  
✅ **Responsive UI** (Mobile, Tablet, Desktop)  
✅ **Smooth Animations with Lottie**  
✅ **Toast Notifications** (react-hot-toast)

---

## 🛠 **Technologies Used**

### **Frontend** 🖥

- **React 19** – UI framework
- **Tailwind CSS 4** – Styling
- **Dnd-kit** – Drag-and-drop functionality
- **React Router v7** – Routing
- **Axios** – API requests
- **Lottie-react** – Animations
- **React-hot-toast** – Notifications
- **Firebase** – Authentication

### **Backend** 🖥

- **Node.js & Express.js** – API & Server
- **MongoDB** – Database
- **Cors & Morgan** – Security & Logging
- **Dotenv** – Environment variables

---

## 📦 **Installation Guide**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/ranak8811/Task-Management-SCIC-Client.git
cd task-management
```

### **2️⃣ Backend Setup**

```sh
cd backend
npm install
```

✅ **Create a `.env` file** in the `backend` folder and add:

```env
PORT=4000
MONGO_URI=mongodb+srv://your-mongodb-uri
```

🔹 **Start the backend server**

```sh
npm run dev
```

Backend will run at: **http://localhost:4000**

---

### **3️⃣ Frontend Setup**

```sh
cd frontend
npm install
```

✅ **Create a `.env` file** in the `frontend` folder and add:

```env
VITE_API_URL=http://localhost:4000
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

🔹 **Start the frontend server**

```sh
npm run dev
```

Frontend will run at: **http://localhost:5173**

---

## 🔗 **API Endpoints**

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| GET    | `/tasks?userId=` | Fetch user’s tasks              |
| POST   | `/add-task`      | Add a new task                  |
| PATCH  | `/task/:id`      | Edit task (title, status, etc.) |
| DELETE | `/task/:id`      | Delete a task                   |

---

## 📌 **Project Structure**

```
/frontend
  ├── src
  │   ├── components
  │   │   ├── TaskBoard.jsx
  │   │   ├── Column.jsx
  │   │   ├── TaskCard.jsx
  │   │   ├── TaskModal.jsx
  │   │   ├── AddTaskModal.jsx
  │   ├── providers
  │   │   ├── AuthProvider.jsx
  │   ├── App.jsx
  │   ├── main.jsx
  │   ├── index.css
  │
/backend
  ├── server.js
  ├── config
  ├── models
  ├── routes
  ├── .env
  ├── package.json
```

---

## 🎯 **Upcoming Features**

🚀 **Dark Mode Support**  
🚀 **Real-time Collaboration**  
🚀 **Task Comments & Attachments**

---

## 👨‍💻 **Contributors**

👤 **Md. Anwar Hossain** – [GitHub](https://github.com/ranak8811)

---

## 📄 **License**

📝 **MIT License** – Free to use and modify.

---

### ⭐ **If you like this project, don't forget to star the repo!** 🚀

🔗 **GitHub Repository:** [Task Manager](https://github.com/ranak8811/Task-Management-SCIC-Client.git)
