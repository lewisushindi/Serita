import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";        
const firebaseConfig = {
    apiKey: "AIzaSyATbNjJXMWC-F-LPD8H6IukvN2KVmD3gIs",
    authDomain: "seritahealth.firebaseapp.com",
    projectId: "seritahealth",
    storageBucket: "seritahealth.appspot.com",
    messagingSenderId: "597467249811",
    appId: "1:597467249811:web:e6ddf3d183ce0683352166",
    measurementId: "G-G2GKC4MZ14"
};		
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);