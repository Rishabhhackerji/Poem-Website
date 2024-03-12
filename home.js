import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { getFirestore, collection, doc, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5wRmiOYd94GpB3IWooi3ed5VtHGlyL0A",
    authDomain: "rishabh-6eb40.firebaseapp.com",
    databaseURL: "https://rishabh-6eb40-default-rtdb.firebaseio.com",
    projectId: "rishabh-6eb40",
    storageBucket: "rishabh-6eb40.appspot.com",
    messagingSenderId: "755049547663",
    appId: "1:755049547663:we   b:ef3f1fc6edb8eeeba1adfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics();
const auth = getAuth();
const db = getFirestore(); // Initialize Firestore

console.log(app);

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in');
        console.log(window.location);
    } else {
        // No user is signed in
        console.log('No user is signed in');
        console.log(window.location.pathname);
        // Redirect to the login or sign-up page only if not already on the login or sign-up page
        if (window.location.pathname !== '/Auth/login.html' && window.location.pathname !== '/Auth/Register.html') {
            window.location.href = '/Auth/login.html';
        }
    }
});
document.getElementById("Rishabhpapa").addEventListener('click', ()=>{
    console.log("Rishabh")
})
// Logout button click event listener
// document.getElementById('Rishabhpapa').addEventListener('click', () => {
//     console.log("hello papa")
//     // Sign out the user
//     auth.signOut().then(() => {
//         // Sign-out successful
//         console.log('User signed out');
//         // Redirect to login page or perform other actions if needed
//         window.location.href = '/Auth/login.html';
//     }).catch((error) => {
//         // An error happened
//         console.error('Sign-out error:', error);
//     });
// });


// Getting user data using it's UID------------------------------
function readUserData(uid) {
    console.log(uid)
    const colRef = collection(db, "users")
    getDocs(colRef).then((snapshot) => {
        // console.log("papa", snapshot.docs);
        let users = []
        snapshot.docs.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id })

        })
        // console.log(users)
        const userWithDesiredEmail = users.find(user => user.id === uid);

        if (userWithDesiredEmail) {
            console.log("User found:", userWithDesiredEmail);
            document.getElementById("heading-here").innerText="Hello, "+userWithDesiredEmail.name;
        } else {
            console.log("User not found with the desired email.");
        }

    }).catch(err => {
        console.log(err.message)
    })
}
let uid = localStorage.getItem("UID");
readUserData(uid);

function navBtn(){

    const admin = document.getElementById('admin');
    const accountDetails = document.getElementById('accountDetails');
    const menuInput = document.getElementById('accountBtn');
    
    admin.addEventListener('click', () => {
        accountDetails.classList.toggle('visible');
        // accountDetails
        console.log("Hello papa")
    });
    
    menuInput.addEventListener('click', () => {
        document.getElementById('menu-input').classList.toggle('visible');
        // accountDetails
        // alert("Hello papa")
    });
    document.getElementById('navSearch').addEventListener('click', ()=>{
        window.location.href = "/poemview/index.html";

    })
    document.getElementById('navHome').addEventListener('click', ()=>{
        window.location.href = "../home.html";
        console.log("papa")
    })
}
   
navBtn();


// menu-container size adjustment on click-----------------
