// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDRreAWo2GsDjSzS38Jc0QvpCD9UQktFYY",
  authDomain: "movie-station-1ada2.firebaseapp.com",
  projectId: "movie-station-1ada2",
  storageBucket: "movie-station-1ada2.appspot.com",
  messagingSenderId: "542247811315",
  appId: "1:542247811315:web:72c30e7a9256759a8c1f86",
  measurementId: "G-DHXZYLYGTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export const signIn = ()=>{
  signInWithPopup(auth, provider).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err);
  })
}

export {auth, provider};