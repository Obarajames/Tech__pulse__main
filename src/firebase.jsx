// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm3S__AOIoan6UoF3s_IYhKaehDNJFdwI",
  authDomain: "social-blog-login-signup-db.firebaseapp.com",
  projectId: "social-blog-login-signup-db",
  storageBucket: "social-blog-login-signup-db.appspot.com",
  messagingSenderId: "1041207869109",
  appId: "1:1041207869109:web:31dce1cd0ec848305f08fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
