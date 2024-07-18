// import { GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';


// const firebaseConfig = {
//     apiKey: "AIzaSyBOLqlL45T9_CFWTOTt4OMgpHb7A8aZs8k",
//     authDomain: "eco-edix6667.firebaseapp.com",
//     projectId: "eco-edix6667",
//     storageBucket: "eco-edix6667.appspot.com",
//     messagingSenderId: "287359257793",
//     appId: "1:287359257793:web:c0ea9c0a895378cf1f5840",
//     measurementId: "G-824EFLBPV0"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const googleLogin = document.getElementById("btn");
// googleLogin.addEventListener("click", function () {
//     alert(5);
// })

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyBOLqlL45T9_CFWTOTt4OMgpHb7A8aZs8k",
    authDomain: "eco-edix6667.firebaseapp.com",
    projectId: "eco-edix6667",
    storageBucket: "eco-edix6667.appspot.com",
    messagingSenderId: "287359257793",
    appId: "1:287359257793:web:c0ea9c0a895378cf1f5840",
    measurementId: "G-824EFLBPV0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// const googleLogin = document.getElementById("btn");
// googleLogin.addEventListener("click", function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const user = result.user;
//             Window.location.href = "../logged.html";
//         }).catch((error) => {

//             const errorCode = error.code;
//             const errorMessage = error.message;

//         });
// })

document.addEventListener('DOMContentLoaded', () => {
    const googleLogin = document.getElementById("btn");
    if (googleLogin) {
        googleLogin.addEventListener("click", function () {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    // Redirect to logged.html after successful login
                    window.location.href = "./pages/logged.html";
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error('Error during sign in:', errorCode, errorMessage);
                });
        });
    } else {
        console.error("Google login button with id 'btn' not found");
    }
});
