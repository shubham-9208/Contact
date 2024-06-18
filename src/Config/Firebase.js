// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN_IN0v59TYYoJhxE3i7dSyUVl44549yU",
    authDomain: "contact-us-todo.firebaseapp.com",
    projectId: "contact-us-todo",
    storageBucket: "contact-us-todo.appspot.com",
    messagingSenderId: "694709443632",
    appId: "1:694709443632:web:92ab3d6d2be4ab4095e1f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const db=getFirestore(app);