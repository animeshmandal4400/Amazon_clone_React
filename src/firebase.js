import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjik3vamMzadsohPIgmg6wCfvVOsPXwqQ",
  authDomain: "clone-4a714.firebaseapp.com",
  projectId: "clone-4a714",
  storageBucket: "clone-4a714.appspot.com",
  messagingSenderId: "874031753512",
  appId: "1:874031753512:web:c9bf76d4896352ed5ec81d",
  measurementId: "G-4762P014BR"
  };

  const app = initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};