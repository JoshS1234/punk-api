// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB18Z_ZwZjL_DJcHT5EbMQA0J4DsYJ9xg4",
  authDomain: "punk-api-2fb69.firebaseapp.com",
  projectId: "punk-api-2fb69",
  storageBucket: "punk-api-2fb69.appspot.com",
  messagingSenderId: "220618906851",
  appId: "1:220618906851:web:e6c96f3d9c12e3efec39d6",
  measurementId: "G-1TJ7K0XBW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
