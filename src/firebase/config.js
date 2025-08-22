// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCujS3NeikfwQuM1FpUkBURumv-lhi6Rl4",
  authDomain: "contact-4a857.firebaseapp.com",
  projectId: "contact-4a857",
  storageBucket: "contact-4a857.appspot.com",
  messagingSenderId: "204665065122",
  appId: "1:204665065122:web:881d059dbf6137929791fb",
  measurementId: "G-W8GDT6YKE8"
};

// Initialize Firebase
let app;
let db;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch (error) {
    console.error("Error initializing Firebase:", error);
}

// Export the database instance and Timestamp for use in other components
export { db, Timestamp };
