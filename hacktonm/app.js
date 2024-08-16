import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth,
    createUserWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPUG239vRVgo-oInEpmWMXtIhsKNL_Xzg",
  authDomain: "signup-ea6f2.firebaseapp.com",
  projectId: "signup-ea6f2",
  storageBucket: "signup-ea6f2.appspot.com",
  messagingSenderId: "279170789806",
  appId: "1:279170789806:web:647e328c3fc5cee1b9183f",
  measurementId: "G-7Y3NW3P3C7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



document.getElementById(email);
document.getElementById(password);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
