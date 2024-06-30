import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDY2ZkQAx-vXN1_YoChnZOLt0J4oaWqAJw",
  authDomain: "celebrations-panel.firebaseapp.com",
  projectId: "celebrations-panel",
  storageBucket: "celebrations-panel.appspot.com",
  messagingSenderId: "793471791490",
  appId: "1:793471791490:web:dd62b37f64b1e37ef7df9b",
  measurementId: "G-RMDKLHMY7Z"
};

export const app = initializeApp(firebaseConfig);
