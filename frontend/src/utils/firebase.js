
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fresherai-39547.firebaseapp.com",
  projectId: "fresherai-39547",
  storageBucket: "fresherai-39547.firebasestorage.app",
  messagingSenderId: "666953691026",
  appId: "1:666953691026:web:a897fd84168f258ba91b4b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}