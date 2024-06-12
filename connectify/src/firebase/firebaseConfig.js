// Import the functions you need from the SDKs you need
// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOda-OistPqVDB7cSO7B3OnAUqlt0sFOg",
  authDomain: "connectifydatabase.firebaseapp.com",
  projectId: "connectifydatabase",
  storageBucket: "connectifydatabase.appspot.com",
  messagingSenderId: "223154428511",
  appId: "1:223154428511:web:192b758cff488e20d2d9ea",
  measurementId: "G-N3YC21XQ3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };