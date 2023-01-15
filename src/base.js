// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { loginWithFb } from "./slices/authSlice";
import localService from "./services/localService";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyA0QvN0ZIO19DSMRzpA4qkB3Os9_xMCkIk",
   authDomain: "jiraclone-59e71.firebaseapp.com",
   projectId: "jiraclone-59e71",
   storageBucket: "jiraclone-59e71.appspot.com",
   messagingSenderId: "845143171943",
   appId: "1:845143171943:web:46318ce00cdd1adbe105c2",
   measurementId: "G-CZHN9LFY27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.languageCode = "it";

const provider = new FacebookAuthProvider();
provider.addScope("user_birthday");

provider.setCustomParameters({
   display: "popup",
});

export const loginWithFacebook = () => {
   signInWithPopup(auth, provider)
      .then((result) => {
         // The signed-in user info.
         const user = result.user;

         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
         const credential = FacebookAuthProvider.credentialFromResult(result);
         const accessToken = credential.accessToken;

         localService.user.set({
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            accessToken: accessToken,
         });

         // ...
      })
      .catch((error) => {
         // Handle Errors here.
         // const errorCode = error.code;
         // const errorMessage = error.message;
         // The email of the user's account used.
         // const email = error.customData.email;
         // The AuthCredential type that was used.
         // const credential = FacebookAuthProvider.credentialFromError(error);
         // ...
      });
};

export const logoutFacebook = () => {
   signOut(auth)
      .then(() => {
         // Sign-out successful.
         localService.user.remove();
         console.log("sign out successful");
      })
      .catch((error) => {
         // An error happened.
      });
};
