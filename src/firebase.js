import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYi7B_EWYUOsTj9y9R6XxyDEFcFNXLHy0",
  authDomain: "internee-b088e.firebaseapp.com",
  projectId: "internee-b088e",
  storageBucket: "internee-b088e.appspot.com",
  messagingSenderId: "808008438534",
  appId: "1:808008438534:web:6870cc06a4168612770487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

export const firestore= getFirestore(app);