// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYhBKRXhgqWY5qQPniKqvACL7JpTN_rdA",
  authDomain: "goodplots-22a5d.firebaseapp.com",
  projectId: "goodplots-22a5d",
  storageBucket: "goodplots-22a5d.appspot.com",
  messagingSenderId: "114628943447",
  appId: "1:114628943447:web:0a607764ce842e16378d12",
  measurementId: "G-3R8QQ11T2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
