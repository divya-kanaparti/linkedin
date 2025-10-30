# 💼 LinkedIn Clone – Full Stack Developer Internship Project (AppDost)

A simple social media web application inspired by **LinkedIn**, where users can **sign up, log in, create posts, and view posts from all users** in a shared public feed.

This project was built as part of the **Full Stack Developer Internship Assignment** for **AppDost**.

---

## 🚀 Features

### 🔐 User Authentication
- User **Signup** and **Login** using email and password.
- Passwords are validated for security (uppercase, lowercase, number, special character, minimum 8 characters).
- Logged-in user’s name is displayed in the navigation bar.
- Logout functionality.

### 📝 Create Post
- Users can create posts with:
  - **Text content**
  - **Optional image upload**
  - **Timestamp**
  - **User’s name**

### 🌍 Public Feed
- Displays all posts created by registered users.
- Posts are ordered with the **latest posts first**.
- Each post includes the author’s name, message, time, and any uploaded image.

### 💬 Bonus Features (Optional but Implemented)
- 👍 Like button (users can like once per account).
- 💭 Comment button for engagement.
- 🧑 Simple profile card with username.
- 🖼️ Optional image upload for posts.
- 📱 Clean and responsive UI across devices.

---

## 🧰 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, HTML5, CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Deployment** | Frontend: Netlify / Vercel<br>Backend: Render / Railway |

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/linkedin-clone.git
cd linkedin-clone
For Backend:
cd backend
npm install

For Frontend:
cd ../frontend
npm install

Run the Backend Server
npm start


Your backend will run at:
👉 http://localhost:5000

5️⃣ Run the Frontend
npm start


Your frontend will run at:
👉 http://localhost:3000


Deployment Links
Frontend (React) → https://your-frontend-name.netlify.app
Backend (Node/Express) → https://your-backend-api.onrender.com
GitHub Repository → https://github.com/your-username/linkedin-clone
