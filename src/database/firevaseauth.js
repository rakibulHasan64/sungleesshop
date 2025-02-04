// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4fOWDN2CTnY8EgTAsWQQ_cwzlsWqP6-s",
  authDomain: "shart-2d649.firebaseapp.com",
  projectId: "shart-2d649",
  storageBucket: "shart-2d649.firebasestorage.app",
  messagingSenderId: "731751802598",
  appId: "1:731751802598:web:de951502274f17deb03d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };