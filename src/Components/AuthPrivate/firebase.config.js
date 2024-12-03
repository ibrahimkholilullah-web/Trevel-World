// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJGf-TXIW3d-o67J6ZoZT6l3dnAwYMwFE",
  authDomain: "b10-a10-projects.firebaseapp.com",
  projectId: "b10-a10-projects",
  storageBucket: "b10-a10-projects.firebasestorage.app",
  messagingSenderId: "15947801714",
  appId: "1:15947801714:web:04514a3cf4dee248158eeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
