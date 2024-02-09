// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlRCOw5Uy6o2jzuHRHgyFD8Y2m63wTKk0",
  authDomain: "vite-contact-8971d.firebaseapp.com",
  projectId: "vite-contact-8971d",
  storageBucket: "vite-contact-8971d.appspot.com",
  messagingSenderId: "199760479011",
  appId: "1:199760479011:web:895fbfd00fb050f5608296"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);