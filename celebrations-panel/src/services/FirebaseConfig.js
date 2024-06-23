// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY2ZkQAx-vXN1_YoChnZOLt0J4oaWqAJw",
  authDomain: "celebrations-panel.firebaseapp.com",
  projectId: "celebrations-panel",
  storageBucket: "celebrations-panel.appspot.com",
  messagingSenderId: "793471791490",
  appId: "1:793471791490:web:dd62b37f64b1e37ef7df9b",
  measurementId: "G-RMDKLHMY7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);