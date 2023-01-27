import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "chat-b58c3.firebaseapp.com",
  projectId: "chat-b58c3",
  storageBucket: "chat-b58c3.appspot.com",
  messagingSenderId: "289059754644",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-MKB2TX5TD1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
