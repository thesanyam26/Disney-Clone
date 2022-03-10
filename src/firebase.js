import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { setUserLoginDetails } from './features/user/userSlice';
// import { useDispatch, useSelector } from "react-redux";

const firebaseConfig = {
    apiKey: "AIzaSyBO05OfvMjfmqWOlVS423BngFHjjKXZivo",
    authDomain: "disneyplus-clone-b8b54.firebaseapp.com",
    projectId: "disneyplus-clone-b8b54",
    storageBucket: "disneyplus-clone-b8b54.appspot.com",
    messagingSenderId: "226320485256",
    appId: "1:226320485256:web:99c0c21704488fbd57c83d",
    measurementId: "G-PSMPZ09FWD"
  };
   
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  

  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();


  export const signInWithGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        // const name = result.user.displayName;
        // const email = result.user.email;
        // const profilePic = result.user.photoURL;
  
        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  // const storage = firebase.storage();

export default db;