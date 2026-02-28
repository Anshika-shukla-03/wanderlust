<div align="center">

# 🏡 Wanderlust

### *Find your perfect stay, anywhere in the world.*

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Mapbox](https://img.shields.io/badge/Mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white)](https://www.mapbox.com/)

<br/>

> 🌍 A **full-stack vacation rental platform** inspired by Airbnb — built with the power of the MEN stack (MongoDB, Express.js, Node.js). Explore listings, share your space, drop reviews, and manage your account — all in one seamless experience.

<br/>

---

</div>

## ✨ Features at a Glance

| Feature | Description |
|--------|-------------|
| 🔐 **User Authentication** | Secure Login, Logout & Profile Management |
| 🏠 **Listings CRUD** | Create, Read, Update & Delete property listings |
| ⭐ **Review System** | Post and delete reviews on any listing |
| 🗺️ **Interactive Maps** | Powered by Mapbox for location visualization |
| 🖼️ **Image Uploads** | Cloud-based image storage via Cloudinary |
| 🛡️ **Data Security** | Password hashing & encrypted session management |
| 👤 **Account Management** | Update profile, change passwords securely |
| 💬 **Flash Messages** | Real-time user feedback on all actions |

---

## 🛠️ Tech Stack

### Backend
- **Node.js** — JavaScript runtime environment
- **Express.js** — Fast, unopinionated web framework
- **MongoDB** — NoSQL database for flexible data storage
- **Mongoose** — Elegant MongoDB object modeling

### Authentication & Security
- **Passport.js** — Flexible authentication middleware
- **Passport Local** — Username/password strategy
- **Passport Local Mongoose** — Mongoose plugin for Passport
- **Cookie Parser** — Cookie parsing middleware
- **Express Session** — Session management
- **Connect Mongo** — MongoDB session store

### Storage & Media
- **Cloudinary** — Cloud image storage & transformation
- **Multer** — File upload handling middleware

### Maps & UI
- **Mapbox** — Interactive, customizable maps
- **EJS** — Embedded JavaScript templating engine
- **Connect Flash** — Flash messages for user notifications

### Validation & Config
- **Joi** — Powerful schema-based data validation
- **Dotenv** — Environment variable management

---

## 📁 Project Structure

```
WanderNest/
│
├── 📂 controllers/          # Route handler logic
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── 📂 models/               # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── 📂 routes/               # Express routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── 📂 views/                # EJS templates
│   ├── listings/
│   ├── users/
│   └── partials/
│
├── 📂 public/               # Static assets (CSS, JS, images)
├── 📂 utils/                # Helper utilities & error handlers
├── 📂 middleware/            # Custom middleware functions
│
├── 📄 app.js                # Entry point
├── 📄 cloudConfig.js        # Cloudinary configuration
├── 📄 schema.js             # Joi validation schemas
└── 📄 .env                  # Environment variables (not committed)
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/wandernest.git
cd wandernest
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:
```env
# MongoDB
ATLASDB_URL=your_mongodb_connection_string

# Session
SECRET=your_session_secret_key

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Mapbox
MAP_TOKEN=your_mapbox_access_token
```

**4. Start the development server**
```bash
node app.js
```

**5. Open in browser**
```
http://localhost:8080
```

---

## 🔐 Authentication Flow

```
User Registers ──► Password Hashed & Stored ──► Session Created
     │
     ▼
User Logs In ──► Credentials Verified ──► Passport Session ──► Access Granted
     │
     ▼
Protected Routes ──► Middleware Checks Session ──► Redirect if Unauthorized
```

---

## 📸 Core Functionality

### 🏠 Listings
- Browse all available property listings
- View listing details with interactive Mapbox location
- Create new listings with image upload (Cloudinary)
- Edit or delete your own listings (authorization protected)

### ⭐ Reviews
- Leave reviews on any property listing
- Delete your own reviews
- Reviews tied to authenticated users

### 👤 User Account
- Register with a unique username & email
- Secure login using Passport.js local strategy
- Update username and password
- Session-based authentication with MongoDB store

---

## 🌐 API & Route Overview

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/listings` | View all listings |
| GET | `/listings/new` | New listing form |
| POST | `/listings` | Create a listing |
| GET | `/listings/:id` | View a listing |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |
| POST | `/listings/:id/reviews` | Add a review |
| DELETE | `/listings/:id/reviews/:rid` | Delete a review |
| GET | `/signup` | Register form |
| POST | `/signup` | Register user |
| GET | `/login` | Login form |
| POST | `/login` | Authenticate user |
| GET | `/logout` | Logout user |

---

## 🛡️ Security Highlights

- ✅ Passwords are **hashed and salted** using `passport-local-mongoose`
- ✅ Sessions are stored securely in **MongoDB** via `connect-mongo`
- ✅ **Authorization middleware** protects listing & review mutations
- ✅ Input validated with **Joi** to prevent malformed data
- ✅ Environment secrets managed via **dotenv** — never exposed in code

---

## 🧰 Dependencies

```json
{
  "cloudinary": "^2.x",
  "connect-flash": "^0.1.x",
  "connect-mongo": "^5.x",
  "cookie-parser": "^1.4.x",
  "dotenv": "^16.x",
  "ejs": "^3.x",
  "express": "^4.x",
  "express-session": "^1.x",
  "joi": "^17.x",
  "mongoose": "^7.x",
  "multer": "^1.x",
  "multer-storage-cloudinary": "^4.x",
  "passport": "^0.6.x",
  "passport-local": "^1.x",
  "passport-local-mongoose": "^8.x"
}
```

---

## 🗺️ Roadmap

- [ ] 🚀 Deploy to Render / Railway
- [ ] 💳 Booking & Payment Integration (Stripe)
- [ ] 📅 Availability Calendar
- [ ] 🔍 Advanced Search & Filters
- [ ] 🌟 Wishlist / Saved Listings
- [ ] 📱 Mobile-Responsive Design Improvements
- [ ] 📧 Email Notifications

---

## 🤝 Contributing

Contributions are always welcome! Here's how:

```bash
# Fork the project
# Create your feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m 'Add some AmazingFeature'

# Push to the branch
git push origin feature/AmazingFeature

# Open a Pull Request
```

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

### 💙 Built with passion using Node.js, Express & MongoDB

*If you found this project helpful, please consider giving it a ⭐ on GitHub!*

---

**Made by [Anshika Shukla](https://github.com/Anshika-shukla-03)**

</div>
