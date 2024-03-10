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

    // console.log(app);

//     Listen for authentication state changes
// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in');
        console.log(window.location)
        // Redirect to the home page only if not already on the home page
        if (window.location.pathname !== '../home.html') {
            // window.location.href = '../home.html';
        }
    } else {
        // No user is signed in
        console.log('No user is signed in');
        console.log(window.location.pathname)
        // Redirect to the login or sign-up page only if not already on the login or sign-up page
        if (window.location.pathname !== '/Auth/login.html' && window.location.pathname !== '/Auth/Register.html') {
            window.location.href = 'login.html'; // or 'signup.html'
        }
    }
});
// const loginMessage = "Welcome to the login page!";

// export { loginMessage };

