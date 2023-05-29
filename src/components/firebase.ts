import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaAPuTWFe6JlGxD0FPTNSCvBJqql41fv8",
  authDomain: "wkck-js.firebaseapp.com",
  projectId: "wkck-js",
  storageBucket: "wkck-js.appspot.com",
  messagingSenderId: "457108316049",
  appId: "1:457108316049:web:791cf8c7da8163b29e0430",
  measurementId: "G-YD5TJG748M"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default firebaseConfig;

