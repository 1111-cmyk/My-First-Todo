# ToDo App - Next.js SSR with Firestore

A simple and efficient ToDo application built using **Next.js** with **Server-Side Rendering (SSR)** and **Firebase Firestore** as the backend database. This app provides real-time updates and offers a seamless user experience with a responsive design suitable for both desktop and mobile devices.

## 🚀 Features

- **Server-Side Rendering (SSR)**: Optimized for SEO and fast initial page loads.
- **Firebase Firestore**: Real-time data storage and retrieval.
- **User-Friendly UI**: Create, view, and delete tasks with ease.
- **Responsive Design**: Fully functional on both desktop and mobile devices.

## 🛠️ Tech Stack

- **Next.js** (React Framework)
- **Firebase Firestore**
- **Tailwind CSS**

## ⚙️ Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/1111-cmyk/My-First-Todo.git
cd My-First-Todo
```

### 2. Install Dependencies

Ensure you have **Node.js** installed. Then, run:

```bash
npm install
```

### 3. Set Up Firebase

- Go to the [Firebase Console](https://console.firebase.google.com/).
- Create a new Firebase project (if you don’t already have one).
- Enable **Firestore** in your Firebase project.
- Navigate to **Project Settings > Service Accounts**, and generate a new private key.
- Download the `firebase.json` file or follow the Firebase setup instructions.

### 4. Configure Firebase in Your Project

Create a `.env.local` file in the root directory of the project and add your Firebase credentials:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```

> Replace `YOUR_*` with the actual values from the Firebase Console under **Project Settings > General > Your Apps**.

### 5. Run the Development Server

Start the app by running:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🖼️ Screenshots

_(Optional: Include screenshots or a GIF to showcase the app’s functionality.)_

## 📂 Project Structure

```
/components   - Reusable React components
/app        - Next.js pages (includes SSR logic)
/styles       - Tailwind CSS styles
```

## 🌟 Contributing

Contributions are welcome! If you’d like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
