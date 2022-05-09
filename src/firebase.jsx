import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB34da3r3zu5WCX4HsxoQn7qnXoZbj6gU0",
  authDomain: "login-form-f5028.firebaseapp.com",
  projectId: "login-form-f5028",
  storageBucket: "login-form-f5028.appspot.com",
  messagingSenderId: "2074212318",
  appId: "1:2074212318:web:95ca13b6454df0ffb24f4f",
  measurementId: "G-XSRTLX126V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
