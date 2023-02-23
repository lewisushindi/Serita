// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATbNjJXMWC-F-LPD8H6IukvN2KVmD3gIs",
  authDomain: "seritahealth.firebaseapp.com",
  projectId: "seritahealth",
  storageBucket: "seritahealth.appspot.com",
  messagingSenderId: "597467249811",
  appId: "1:597467249811:web:e6ddf3d183ce0683352166",
  measurementId: "G-G2GKC4MZ14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);