// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ca-5d0fd.firebaseapp.com",
  projectId: "ca-5d0fd",
  storageBucket: "ca-5d0fd.appspot.com",
  messagingSenderId: "688948663595",
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default getFirestore();


