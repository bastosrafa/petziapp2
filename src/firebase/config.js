// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

// TODO: Colocar o firebaseConfig do seu app aqui abaixo
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnLH-WPXrw6LbXTo6FhHogwjFApEOXIos",
  authDomain: "petzia-f86b4.firebaseapp.com",
  projectId: "petzia-f86b4",
  storageBucket: "petzia-f86b4.firebasestorage.app",
  messagingSenderId: "375896389326",
  appId: "1:375896389326:web:dddf24146bf368fc88029f",
  measurementId: "G-SZJ3S8XPKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const messaging = getMessaging(app);
const analytics = getAnalytics(app);

// Timestamp
const timestamp = serverTimestamp();

// Google Sign In
const googleProvider = new GoogleAuthProvider();

export { app, db, auth, storage, timestamp, googleProvider, messaging, analytics };
