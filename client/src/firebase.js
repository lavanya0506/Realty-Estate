// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realty-estate-369f5.firebaseapp.com",
  projectId: "realty-estate-369f5",
  storageBucket: "realty-estate-369f5.firebasestorage.app",
  messagingSenderId: "827879520453",
  appId: "1:827879520453:web:da8669b0d492382a4418ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;