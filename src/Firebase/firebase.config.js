// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeRGq3ePCPTr9IlefHVkJiorjlqZVnB0U",
  authDomain: "refund-my-disrupt-flight.firebaseapp.com",
  projectId: "refund-my-disrupt-flight",
  storageBucket: "refund-my-disrupt-flight.appspot.com",
  messagingSenderId: "556200466128",
  appId: "1:556200466128:web:70907af94ca3fc604ff0d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;