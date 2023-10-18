// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgHZYQK_i7em2mr7k-zuAnpbA_Ulatv3w",
  authDomain: "girly-project-client-auth.firebaseapp.com",
  projectId: "girly-project-client-auth",
  storageBucket: "girly-project-client-auth.appspot.com",
  messagingSenderId: "317439071786",
  appId: "1:317439071786:web:db6f58ce4a135aceb45553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;