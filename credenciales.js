// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSAV2td6Q873vx-c9M3v58VmjDYN_lfgU",
  authDomain: "dsp2025-83dd8.firebaseapp.com",
  projectId: "dsp2025-83dd8",
  storageBucket: "dsp2025-83dd8.firebasestorage.app",
  messagingSenderId: "649092584520",
  appId: "1:649092584520:web:d33403c7c702e017aeb47d",
  measurementId: "G-C7GJZHXV48"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default appFirebase;