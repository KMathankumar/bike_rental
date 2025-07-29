# 🛵 Online Bike Rental & Booking Management System

> A full-stack web platform that connects users to nearby motorbike rental vendors — offering real-time availability, Aadhaar-based authentication, and centralized dashboards for vendors and admins.

---

## 🚀 Overview

The **Online Bike Rental and Booking System** is a centralized platform developed to streamline the bike rental process. It eliminates the need for physical visits by allowing customers to:
- Search nearby vendors
- View available bikes
- Compare prices
- Book online securely

Meanwhile, vendors and admins have their own dashboards to manage listings, monitor bookings, and ensure a smooth workflow.

---

## 🧩 Modules

### 1. 👤 User Module
- Register/Login using phone number and OTP
- Aadhaar-based authentication
- Search bikes by location, price, availability
- Real-time booking and UPI payment (Razorpay)
- View booking history

### 2. 🧑‍🔧 Vendor Module
- Add/manage bikes (model, image, price, status)
- Accept/reject bookings
- View customer info & booking history
- Revenue and analytics dashboard
- Real-time updates on bike status

### 3. 👨‍💼 Admin Module
- Manage users, vendors, and listings
- View reports and system analytics
- Monitor complaints & feedback
- Handle data security and system compliance

---

## 🛠️ Tech Stack

| Layer       | Tech Used                     |
|-------------|-------------------------------|
| Frontend    | React.js, Tailwind CSS        |
| Backend     | Node.js, Express.js           |
| Database    | MongoDB (Cloud - Atlas)       |
| Auth        | Aadhaar-based Auth, JWT       |
| Payment     | Razorpay (UPI Integration)    |
| APIs Used   | Google Maps API, Razorpay API |
| Tools       | VS Code, Postman, GitHub      |

---

## 🖥️ Folder Structure (Summary)

```
project-root/
│
├── user/                # React-based user portal
│   ├── components/
│   └── pages/
│
├── vendor/              # Vendor dashboard for bookings & bikes
│   ├── components/
│   └── views/
│
├── admin/               # Admin panel for global control
│   ├── dashboard/
│   └── auth/
│
├── backend/ (optional if you host backend separately)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
```

---

## 🔐 Features

- ✅ Real-Time Bike Availability
- ✅ Aadhaar-Based Authentication
- ✅ Secure UPI Payments via Razorpay
- ✅ Admin Approval System
- ✅ Predictive Dashboard for Vendors
- ✅ Optimized Search (QuickSort / MergeSort)
- ✅ Responsive Design (Mobile & Desktop)

---

## 🧪 Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/bike-rental-system.git
cd bike-rental-system
```

### 2. Install Frontend (User/Vendor/Admin)

```bash
cd user
npm install
npm run dev
```

```bash
cd vendor
npm install
npm run dev
```

```bash
cd admin
npm install
npm run dev
```

### 3. Backend Setup (if separate)

```bash
cd backend
npm install
npm run start
```

### 4. MongoDB Setup

- Use MongoDB Atlas or local instance.
- Create `.env` file in backend:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
```

---

## 📸 Screenshots

> You can upload images later to GitHub and embed like this:

```markdown
![User Booking Page](screenshots/user-booking.png)
![Vendor Dashboard](screenshots/vendor-dashboard.png)
```

---

## 💡 Future Enhancements

- 📱 Mobile App (React Native)
- 🔒 Smart Helmet Lock with Bluetooth
- 🤖 AI-Based Demand Forecasting
- ⚡ Blockchain Smart Contracts for rental agreements

---

## 📚 References

- Blockchain-Based Smart Motorcycle Rental System Using Smart Contracts – *IRJMETS (2023)*
- Enhancing Vehicle Rental Platforms Using AI – *Indian Journal of Computer Applications (2022)*
- Vehicle Availability Forecasting Using ML – *IJETT (2021)*

---

## 🧑‍💻 Authors

| Name           | Roll Number       |
|----------------|-------------------|
| Jeevanantham R | 922221104020      |
| Mathankumar K  | 922221104029      |
| Pandeeswaran T | 922221104034      |
| Vishnu M       | 922221104052      |


---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
