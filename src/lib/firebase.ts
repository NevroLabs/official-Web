// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-8802150107-215ec",
  "appId": "1:368670764367:web:8728198a7c4b1a7990693a",
  "storageBucket": "studio-8802150107-215ec.firebasestorage.app",
  "apiKey": "AIzaSyCty2jCoEmzIm2TEsnuWDnmue1r3hqqgts",
  "authDomain": "studio-8802150107-215ec.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "368670764367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
