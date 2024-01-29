import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  //initialise firebase
const app=initializeApp(firebaseConfig) 
// var signupFormDB=firebase.database().ref("signinForm");
// var signinFormDB = firebase.database().ref("signinForm");
// var signupFormDB = firebase.database().ref("signupForm");
const auth = getAuth(app);

document.querySelector('.btn').addEventListener('click',authCreateAccout);
// document.querySelector('.btn').addEventListener('click',()=>{
//     alert('hello');
// });



function authCreateAccout(){
    const email = document.getElementsByClassName('email').value;
    const password = document.getElementsByClassName('password').value;
    console.log(email+" "+password);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    // alert('create')
    showlogged();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


}
function showlogged(){
    // window.location.href='signin.html';
    alert('logged in');
}


document.getElementById('signinForm').addEventListener('submit',submitForm);
const saveMessage = (Contact, newPassword) => {
    var newsigninForm = signinFormDB.push();
    newsigninForm.set({
        Contact : Contact,
        Password : newPassword

    });
};

function submitForm(e){
    e.preventDefault();
    var Contact = getElementVal("Contact");
    var newPassword = getElementVal("newPassword");

    saveMessage(Contact, newPassword);
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
}


