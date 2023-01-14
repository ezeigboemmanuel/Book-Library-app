import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYyl3fhMwaoyMJ1lPkon4Ryvp-3itvY_0",
  authDomain: "book-library-feda1.firebaseapp.com",
  projectId: "book-library-feda1",
  storageBucket: "book-library-feda1.appspot.com",
  messagingSenderId: "731332214260",
  appId: "1:731332214260:web:6d71cd1bd4a3f4fb014da1",
  measurementId: "G-60RKJ6WYPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);