// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqdlIQL_NS7jEUF80sderdPfLneMZcYWg",
  authDomain: "maloonmerchant.firebaseapp.com",
  projectId: "maloonmerchant",
  storageBucket: "maloonmerchant.appspot.com",
  messagingSenderId: "526181878355",
  appId: "1:526181878355:web:ab2589e767fe16dc5154a6",
  measurementId: "G-R268NR4V0H"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db=getFirestore(app);