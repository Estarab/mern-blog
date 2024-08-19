// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "world-zambia.firebaseapp.com",
  projectId: "world-zambia",
  storageBucket: "world-zambia.appspot.com",
  messagingSenderId: "837543923731",
  appId: "1:837543923731:web:ac42041bb8845fc02b6fe6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);