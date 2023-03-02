// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChcOAntzjsYCUn2ZpbpLce6BB8WJ8UIrc",
  authDomain: "techshopinghere.firebaseapp.com",
  databaseURL: "https://techshopinghere-default-rtdb.firebaseio.com",
  projectId: "techshopinghere",
  storageBucket: "techshopinghere.appspot.com",
  messagingSenderId: "1057491772216",
  appId: "1:1057491772216:web:3b78ed3168daadb65dd7cd",
  measurementId: "G-ZLBZRXPS9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
