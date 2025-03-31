// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUkOwtJryaKvvMDYTXKBhk6qddzFZa6g8",
  authDomain: "psm-06.firebaseapp.com",
  projectId: "psm-06",
  storageBucket: "psm-06.firebasestorage.app",
  messagingSenderId: "89007468816",
  appId: "1:89007468816:web:f13a7d9abd54ebb35ff595",
  measurementId: "G-Q8HD1M0ESF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);