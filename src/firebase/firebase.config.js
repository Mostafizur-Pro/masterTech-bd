// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDChdZQJnz52LTHRUY4QCgWhHvVKITk8jo",
  authDomain: "mastertech-bd.firebaseapp.com",
  projectId: "mastertech-bd",
  storageBucket: "mastertech-bd.appspot.com",
  messagingSenderId: "947247108563",
  appId: "1:947247108563:web:c0363d19fce410a52f1f26",
  measurementId: "G-EX6DF8QWHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
