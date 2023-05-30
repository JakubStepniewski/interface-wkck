import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSL6Y082Urvf4noD6HDYpIjA7qZ_hFWUQ",
  authDomain: "wkck-js2.firebaseapp.com",
  projectId: "wkck-js2",
  storageBucket: "wkck-js2.appspot.com",
  messagingSenderId: "558483321138",
  appId: "1:558483321138:web:37dc299b07fe3f1219272b",
  measurementId: "G-RMR0CW1ZKC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default firebaseConfig;
export const db = getFirestore(app);
