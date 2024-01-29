import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAne_5yqDgav8ME45UpMWgbhUTTel_ZUBk",
  authDomain: "a-cab-booking-site.firebaseapp.com",
  databaseURL: "https://a-cab-booking-site-default-rtdb.firebaseio.com",
  projectId: "a-cab-booking-site",
  storageBucket: "a-cab-booking-site.appspot.com",
  messagingSenderId: "461329956746",
  appId: "1:461329956746:web:a529820679a2428173d273"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app)
console.log(auth);
// document.querySelector('.btn').addEventListener('click',authCreateAccount)
const email = document.getElementById('Contact').value;
const password = document.getElementById('newPassword').value;
console.log(email+" "+password)
// function authCreateAccount(){

//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//     alert('hello')
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// }

// function showlogged(){
//   alert('logged');
// }