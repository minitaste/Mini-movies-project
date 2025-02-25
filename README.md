# 🎭 Mini Theater

## 📌 Description
**Mini Theater** is a web application that provides access to all movies from [TMDB](https://www.themoviedb.org/). Users can browse and search for movies, and based on their search queries, the platform generates a personalized **Top 5 Movie Recommendations**.

---

# 🚀 Installation Guide

## 🖥️ Backend Setup

1. **Download & Install Python**
   - [Download Python 3.13.2](https://www.python.org/downloads/release/python-3132/)

2. **Install Dependencies**
   ```sh
   pip install -r requirements.txt
   ```

3. **Apply Migrations**
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Run Development Server**
   ```sh
   python manage.py runserver
   ```

---

## 🎨 Frontend Setup

1. **Install npm** (if not installed):  
   [Download Node.js](https://nodejs.org/)

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start Development Server**
   ```sh
   npm run dev
   ```

4. **Configure Environment Variables**
   - Create a `.env.local` file in the frontend directory.
   - Add your TMDB API Key as follows:
     ```sh
     VITE_TMDB_API_KEY="your-tmdb-api-key-here"
     ```

---

## 🛠 Technologies Used

- **Backend:** Django, Django REST Framework (DRF)
- **Frontend:** React, Vite
- **Other Tools:** dotenv, Django CORS Headers, TMDB API

---

🎉 **Your project is now set up! Enjoy coding!** 🚀

