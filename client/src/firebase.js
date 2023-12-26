// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-941b5.firebaseapp.com",
  projectId: "mernestate-941b5",
  storageBucket: "mernestate-941b5.appspot.com",
  messagingSenderId: "701982859006",
  appId: "1:701982859006:web:6df49689f53cb398bd0faf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);