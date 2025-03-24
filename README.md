# 🏡 ShelterSeek
https://shelterseek.onrender.com
A **Node.js Express Application** with **SQLite Database**

ShelterSeek is a simple yet efficient web application built using **Node.js**, **Express**, **EJS** for templating, and **SQLite** for database management. It provides **user authentication**, **profile management**, and various views for seamless user interaction.

## ✨ Features

- ✅ **User registration and login functionality**
- 🗄 **SQLite database** for storing user information
- 🎨 **EJS templates** for rendering dynamic views
- 📂 **Static file serving** for CSS, JavaScript, and images
- 🔗 **RESTful API endpoints** for user management
- ⚠️ **Basic error handling and redirection**

## ⚙️ Prerequisites

Ensure you have the following installed before running the application:

- 📌 **Node.js** (v14 or higher)
- 📌 **npm** (usually comes with Node.js)

## 📥 Installation

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/Sumukesh-Reddy/ShelterSeek_node.git
cd ShelterSeek_node
```

### 2️⃣ Install dependencies:
Run the following command to install the required dependencies:
```sh
npm install express ejs better-sqlite3 path
```
Run the following command to install the required dependencies:
```sh
npm install
```

### 3️⃣ Set up the SQLite database:
- 🗃 The application uses **SQLite** for storing user data.
- 📁 The database file (`usersDatabase.db`) will be created automatically if it doesn't exist.
- 🏗 The necessary `users` table will also be created by the application.

### 4️⃣ Run the application:
Start the application using:
```sh
node app.js
```
Alternatively, if you have **nodemon** installed, use:
```sh
nodemon app.js
```

### 5️⃣ Access the application:
Open your web browser and navigate to:
```sh
http://localhost:3000
```

---

## 📂 Project Structure

```
.
├── app.js                  # 🚀 Main application file
├── controller/             # 🔄 Controllers for handling routes
│   └── usercontroller.js   # 👤 User-related controller logic
├── model/                  # 🏛 Database models
│   └── usermodel.js        # 📜 User model and database operations
├── public/                 # 🎨 Static files (CSS, JS, images)
├── views/                  # 🖥 EJS templates for rendering views
│   ├── home.ejs            # 🏠 Home page
│   ├── about.ejs           # ℹ️ About page
│   ├── loginweb.ejs        # 🔑 Login page
│   └── ...                 # 📄 Other EJS templates
├── package.json            # 📦 Project dependencies and scripts
└── README.md               # 📖 This file
```

---

## 🔗 API Endpoints

### **GET /** 🏠
Renders the home page.

### **GET /loginweb** 🔑
Renders the login page.

### **POST /loginweb** 📤
Handles user login and registration.

#### **Request body:**
```json
{
  "type": "signIn" | "signUp",
  "name": "Sumukesh", // Required for signUp
  "email": "sumukesh@example.com",
  "password": "password123",
  "accountType": "user" // Required for signUp
}
```

### **GET /users** 👥
Returns a list of all users (for testing purposes).

### **GET /profile** 📝
Renders the user profile page.

### **GET /dashboard** 📊
Renders the dashboard page.

---

## ⚠️ Error Handling

The application includes **basic error handling middleware**. If an error occurs, users will be redirected to an **error page** displaying a **generic error message**.

---

## 📦 Dependencies

- 🚀 **Express** - Web framework for Node.js.
- 🎨 **EJS** - Templating engine for rendering views.
- 🗄 **better-sqlite3** - SQLite database driver for Node.js.
- 🔄 **Nodemon** - Utility for automatically restarting the server during development (optional).

---

## 🤝 Contributing

💡 Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to **open an issue** or **submit a pull request**.

---

## 🏆 Author
Developed by **Team ShelterSeek** 🏡

---

