import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.RREACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.RREACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket: process.env.RREACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.RREACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.RREACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

export const firestore= getFirestore(app);

export const collectionRef= collection(firestore, "userData")

 //to get all data from db
// getDocs(collectionRef)
// .then((snapshot) =>{
//   let users=[]
//   snapshot.docs.forEach((doc)=>{
//     users.push({...doc.data(), id: doc.id})
//   })
//   console.log(users)
// })
// .catch(err=>{
//   console.log(err.message)
// })


