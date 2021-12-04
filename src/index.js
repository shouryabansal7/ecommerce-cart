import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4W9enpVNA5OMYC7MOuGN1PbVzkRVRVqg",
  authDomain: "ecommerce-cart-34a17.firebaseapp.com",
  projectId: "ecommerce-cart-34a17",
  storageBucket: "ecommerce-cart-34a17.appspot.com",
  messagingSenderId: "208946262899",
  appId: "1:208946262899:web:f2e0bb345e4797b54f0b06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
