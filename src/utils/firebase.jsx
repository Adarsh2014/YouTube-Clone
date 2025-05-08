// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYCssnDjJ96-UDbVdoaZihEZ_J7ifv26w",
    authDomain: "fir-ccb00.firebaseapp.com",
    projectId: "fir-ccb00",
    storageBucket: "fir-ccb00.firebasestorage.app",
    messagingSenderId: "1092052893566",
    appId: "1:1092052893566:web:b8c9347a630f0be94ebd2f",
    measurementId: "G-86HXJJJ2SX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
