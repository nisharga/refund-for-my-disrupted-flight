// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5WDhNNlhkoZ-iF416vVnKbPsFGwUkXaw",
  authDomain: "refund-for-my-disrupted-flight.firebaseapp.com",
  projectId: "refund-for-my-disrupted-flight",
  storageBucket: "refund-for-my-disrupted-flight.appspot.com",
  messagingSenderId: "611000664713",
  appId: "1:611000664713:web:38ad4e36dc4f29422bbc58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;