// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMQOTJdYmGb9U-eo6C5EZncXR2blsbjB4",
  authDomain: "portfolio-25a83.firebaseapp.com",
  projectId: "portfolio-25a83",
  storageBucket: "portfolio-25a83.firebasestorage.app",
  messagingSenderId: "538986863901",
  appId: "1:538986863901:web:b0478b0b9ddd772e8e95f4",
  measurementId: "G-97VJT93R1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };