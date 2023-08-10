// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARsRbgg6jhHoHhExLQ2ScDFo97qAnGIBQ",
  authDomain: "login-70cf7.firebaseapp.com",
  projectId: "login-70cf7",
  storageBucket: "login-70cf7.appspot.com",
  messagingSenderId: "7264377156",
  appId: "1:7264377156:web:d84c782629e22f124ddf11",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
