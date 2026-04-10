# 🎯 Face Recognition Attendance System

A modern web-based attendance system that uses face recognition to mark attendance automatically.

---

## 🚀 Features

- 👤 Face Registration
- 🎥 Real-time Face Detection using Webcam
- 🧾 Attendance Marking
- 🔔 Toast Notifications (No alerts)
- 🔊 Sound Feedback on Attendance
- 💾 LocalStorage-based data persistence
- 🎨 Premium UI using Material UI

---

## 🛠️ Tech Stack

- ReactJS
- face-api.js
- TensorFlow.js
- Material UI
- react-toastify

---

## 📂 Project Structure
src/
├── components/
│ ├── Camera.js
│ ├── Register.js
│ ├── Attendance.js
├── App.js
├── utils.js

---

## ⚙️ Installation & Setup

1. Clone the repository
git clone https://github.com/your-username/face-attendance-system.git

2. Navigate to project folder
cd face-attendance-system

3. Install dependencies
npm install
4. Start the application
npm start

---

## 📸 How It Works

1. Register your face using webcam
2. Face descriptor is stored locally
3. While marking attendance:
   - Face is detected
   - Compared using Euclidean distance
4. If matched → Attendance marked

---

## 🧠 Key Concepts
- Face Detection & Recognition
- Euclidean Distance Matching
- React Hooks (useState, useEffect)
- Component-based Architecture

---

## ⚠️ Limitations

- Works only in browser (no backend)
- Uses LocalStorage instead of database
- Not suitable for large-scale production

---

## 🔮 Future Enhancements

- Backend integration (Node.js + MongoDB)
- Cloud storage for face data
- Admin dashboard
- Export attendance to Excel

---

## 👨‍💻 Author

- Purva Patil

---

## 📌 Note

This project is developed for academic submission and demonstration purposes.