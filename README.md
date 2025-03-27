# Chill Gamer 🎮  

### Live Site: [Chill Gamer](https://chill-gamer-dcfd9.web.app)

## 📌 About Chill Gamer  
**Chill Gamer** is a user-friendly game review platform where gamers can explore, review, and share their thoughts on various games. The platform provides a seamless experience for users to engage with game reviews, manage their personal watchlist, and update their own reviews. Built with a clean and responsive UI, **Chill Gamer** ensures a smooth browsing experience on all devices.

## 🚀 Features  
- 🔐 **User Authentication:** Secure login and registration system with email/password authentication and social login (Google/GitHub).
- 📝 **Add & Manage Reviews:** Users can add, update, and delete their own game reviews with ratings, descriptions, and genres.
- 🔎 **Explore Reviews:** View all game reviews with sorting and filtering options based on rating and year.
- 📌 **Game Watchlist:** Add games to your watchlist from the review details page for easy tracking.
- 🎨 **Dark/Light Mode:** Toggle between dark and light themes for a personalized experience.
- ⚡ **Real-Time Notifications:** Toast notifications for actions like login, logout, review updates, and errors.
- 🔄 **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- ❌ **404 Page:** A custom-designed Not Found page for invalid routes.

## 🛠️ Tech Stack  
- **Frontend:** React.js, Tailwind CSS, React Router, Firebase Authentication
- **Backend:** Node.js, Express.js, MongoDB
- **Hosting:** Netlify (Frontend), Vercel (Backend)
- **Libraries & Packages:** Axios, SweetAlert, React Hook Form, Lottie React, React Awesome Reveal

## 📂 Project Structure  
```
Chill-Gamer/
│── client/            # Frontend React application
│── server/            # Backend with Express and MongoDB
│── README.md          # Project documentation
│── .env               # Environment variables (not included in repo)
```

## 🔧 Installation & Setup  
### Clone the Repository:
```bash
git clone https://github.com/yourusername/chill-gamer.git
cd chill-gamer
```
### Install Client Dependencies:
```bash
cd client
npm install
```
### Install Server Dependencies:
```bash
cd ../server
npm install
```
### Set Up Environment Variables:
Create a `.env` file in both client and server directories to store Firebase and MongoDB credentials securely.

### Run the Project:
#### Start the Backend:
```bash
cd server
npm start
```
#### Start the Frontend:
```bash
cd client
npm start
```
The application will be live at `http://localhost:3000/`.

## 📌 Deployment  
- **Frontend:** Hosted on Netlify ([Live Site](Your_Live_Site_Link_Here))
- **Backend:** Hosted on Vercel ([API Link](Your_API_Link_Here))

## 🎯 Challenges & Enhancements  
- Implemented a **Dark/Light Theme Toggle**.
- Added **Sorting & Filtering** for game reviews.
- Integrated **Lottie Animations** for interactive elements.
- Used **React Awesome Reveal** for smooth animations.

## 🤝 Contributing  
Contributions are welcome! Feel free to fork the repository, submit pull requests, and suggest improvements.

## 📜 License  
This project is open-source and available under the **MIT License**.

---  
🚀 Built with ❤️ by **[Your Name]**
