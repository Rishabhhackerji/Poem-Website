import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5wRmiOYd94GpB3IWooi3ed5VtHGlyL0A",
    authDomain: "rishabh-6eb40.firebaseapp.com",
    databaseURL: "https://rishabh-6eb40-default-rtdb.firebaseio.com",
    projectId: "rishabh-6eb40",
    storageBucket: "rishabh-6eb40.appspot.com",
    messagingSenderId: "755049547663",
    appId: "1:755049547663:web:ef3f1fc6edb8eeeba1adfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app); // Initialize Firestore

let uid = "Uid here!";
document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    
                    // User successfully logged in
                    uid = userCredential.user.uid;
                    localStorage.setItem('UID',uid);
                    localStorage.setItem('email',email);

                    // Redirect user to dashboard or another page
                    window.location.href = "../home.html";
                })
                .catch((error) => {
                    // Handle login error
                    const errorMessage = error.message;
                    console.error("Login error:", errorMessage);
                    document.getElementById('errorMessage').textContent = errorMessage;
                    document.getElementById('errorMessage').style.display = 'block';
                });
        });
        
   