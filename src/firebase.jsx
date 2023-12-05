import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD2PMnTvC3AYivKreV7RmmRQGTBezWbOm0",
    authDomain: "myblog-57211.firebaseapp.com",
    projectId: "myblog-57211",
    storageBucket: "myblog-57211.appspot.com",
    messagingSenderId: "396012625368",
    appId: "1:396012625368:web:6cb932c7e8d0e4a8e966ad"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app)
export {
    auth,
    db
}
