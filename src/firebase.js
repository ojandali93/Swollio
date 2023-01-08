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

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

app = getApp();

const db = getFirestore()

module.exports = {app, db}