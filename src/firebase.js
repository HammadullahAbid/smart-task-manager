// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv2nkDDKS5WoBuHhTyB7dVSAdmZGpHhWM",
  authDomain: "smarttaskmanager-22275.firebaseapp.com",
  projectId: "smarttaskmanager-22275",
  storageBucket: "smarttaskmanager-22275.firebasestorage.app",
  messagingSenderId: "473177911589",
  appId: "1:473177911589:web:318b1816a0bed242faeacc",
  measurementId: "G-07KL8Q9D12"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
