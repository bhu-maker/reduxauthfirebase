// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeVddlFkvewilOxDiyGzXWzgzcgJLFko0",
  authDomain: "project1-43bda.firebaseapp.com",
  projectId: "project1-43bda",
  storageBucket: "project1-43bda.appspot.com",
  messagingSenderId: "516737912180",
  appId: "1:516737912180:web:aab3ad8af5acc7cd4db021",
  measurementId: "G-C2VFT7HFNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)