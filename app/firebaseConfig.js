import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCj_HzG2Jl9U1aulwdfsOp_spQf7JeDRXQ",
    authDomain: "lms-app-c508c.firebaseapp.com",
    projectId: "lms-app-c508c",
    storageBucket: "lms-app-c508c.appspot.com",
    messagingSenderId: "1057158215562",
    appId: "1:1057158215562:web:62a1c513fa34cc2f8a3a73",
    measurementId: "G-DSV7BG2YTJ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);

export { storage };