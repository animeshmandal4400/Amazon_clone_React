import { initializeApp } from "firebase/app";
import {  getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDjik3vamMzadsohPIgmg6wCfvVOsPXwqQ",
  authDomain: "clone-4a714.firebaseapp.com",
  projectId: "clone-4a714",
  storageBucket: "clone-4a714.appspot.com",
  messagingSenderId: "874031753512",
  appId: "1:874031753512:web:c9bf76d4896352ed5ec81d",
  measurementId: "G-4762P014BR"
}

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();

  

