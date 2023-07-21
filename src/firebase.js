// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy12Tdj_iAG4e_tBKBzgqn1a68aNY7OPg",
  authDomain: "podcast-app-a27f6.firebaseapp.com",
  projectId: "podcast-app-a27f6",
  storageBucket: "podcast-app-a27f6.appspot.com",
  messagingSenderId: "389147614695",
  appId: "1:389147614695:web:e560e1bfa36447020df142",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
