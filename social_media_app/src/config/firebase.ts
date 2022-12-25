// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2It0_yDtnDClvKMTZf-m8-VIagEDupMo",
  authDomain: "fir-social-media-a4850.firebaseapp.com",
  projectId: "fir-social-media-a4850",
  storageBucket: "fir-social-media-a4850.appspot.com",
  messagingSenderId: "1012328274887",
  appId: "1:1012328274887:web:363b56c2c168c7ba6397e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);