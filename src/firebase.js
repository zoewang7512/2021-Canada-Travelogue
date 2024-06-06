// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV-r9a3XFuoVlfF62wv7JPqvpjW58eSJo",
  authDomain: "ca-5d0fd.firebaseapp.com",
  projectId: "ca-5d0fd",
  storageBucket: "ca-5d0fd.appspot.com",
  messagingSenderId: "688948663595",
  appId: "1:688948663595:web:fb91734d45f47519bd616e"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//export default getFirestore();
export const app = initializeApp(firebaseConfig);
export default getFirestore();


