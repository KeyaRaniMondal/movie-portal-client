// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import 'dotenv/config'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvTnv5VvIpmkIEMmCPJ6Ow-wk_9hqPD7o",
  authDomain:"movie-4dfed.firebaseapp.com",
  projectId:"movie-4dfed",
  storageBucket:"movie-4dfed.firebasestorage.app",
  messagingSenderId:"1072245117163",
  appId: "1:1072245117163:web:3ee37f8bddcd54cef06eae"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);