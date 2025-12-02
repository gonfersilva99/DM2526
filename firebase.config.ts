// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArCGloG1PbH9xTYycokjN-IgCKTpc0FDI",
  authDomain: "teste-bdb00.firebaseapp.com",
  projectId: "teste-bdb00",
  storageBucket: "teste-bdb00.firebasestorage.app",
  messagingSenderId: "969521799548",
  appId: "1:969521799548:web:72cc27c19206f0f49c44f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
