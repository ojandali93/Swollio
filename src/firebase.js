import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3nS9zgQYLb2A9tBWumTkvohwA60ZPBlI",
  authDomain: "swollio.firebaseapp.com",
  projectId: "swollio",
  storageBucket: "swollio.appspot.com",
  messagingSenderId: "859654648065",
  appId: "1:859654648065:web:fd44edeadf3ff166486b00",
  measurementId: "G-PD4H9JER9T"
};

// let auth;
// if (!getApps().length) {
//   auth = initializeApp(firebaseConfig);
// }

// auth = getApp();

const auth = initializeApp(firebaseConfig);

const db = getFirestore()

export {auth, db}