// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAhF1jR6Lq7myM98szrI2ZmCfYZBcCYyw",
  authDomain: "punk-api-29858.firebaseapp.com",
  projectId: "punk-api-29858",
  storageBucket: "punk-api-29858.appspot.com",
  messagingSenderId: "647176987834",
  appId: "1:647176987834:web:07533d91a438d2154f8e83",
  measurementId: "G-0GSLQJ0LNH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
