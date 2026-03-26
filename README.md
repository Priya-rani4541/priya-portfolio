# Priya Rani - Personal Portfolio (MERN Stack)

A modern, production-ready personal portfolio website built with MongoDB, Express.js, React.js, and Node.js.

## 🚀 Features

- **Modern UI**: Built with Tailwind CSS and Framer Motion for smooth animations.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Dark/Light Mode**: Seamless theme toggling.
- **Dynamic Content**: Projects and skills are fetched from the MongoDB database.
- **Contact Form**: Functional contact form with Nodemailer integration for email notifications.
- **Clean Architecture**: MVC pattern in the backend for scalability.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion, Lucide Icons, Axios.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ODM).
- **Communication**: Nodemailer (for emails).

---

## 📂 Project Structure

```text
portfolio/
├── backend/
│   ├── config/         # Database connection
│   ├── controllers/    # Route logic
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   ├── middleware/     # Error handling
│   ├── utils/          # Helper functions
│   ├── server.js       # Entry point
│   └── seeder.js       # Data seeding script
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── App.jsx     # Main application layout
│   │   └── main.jsx    # Frontend entry point
│   ├── tailwind.config.js
│   └── index.html
└── .env                # Environment variables
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites
- Node.js installed
- MongoDB Atlas account

### 2. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your credentials:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_uri
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECEIVER_EMAIL=priyaranikumari891@gmail.com
   NODE_ENV=development
   ```
4. Seed the database with initial projects and skills:
   ```bash
   node seeder.js
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🌍 Deployment Guide

### Backend (Render/Heroku)
1. Push your code to a GitHub repository.
2. Create a new "Web Service" on [Render](https://render.com/).
3. Connect your repository.
4. Set the build command: `npm install`
5. Set the start command: `node server.js`
6. Add all environment variables from your `.env` file in the Render dashboard.

### Frontend (Vercel/Netlify)
1. Connect your repository to [Vercel](https://vercel.com/).
2. Vercel will automatically detect Vite.
3. In `frontend/src/`, ensure API calls point to your production backend URL instead of `localhost:5000`.
4. Deploy!

### Database (MongoDB Atlas)
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Get your connection string and replace it in the backend `.env`.

---

## 👤 Author
**Priya Rani**
- GitHub: [Priya-rani4541](https://github.com/Priya-rani4541)
- LinkedIn: [Priya Rani](https://www.linkedin.com/in/priyaranikumari/)
- Email: [priyaranikumari891@gmail.com](mailto:priyaranikumari891@gmail.com)
