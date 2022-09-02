import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrZvf3PC0RXaRMnVua0D5gu9s0YxgECq8",
    authDomain: "disclone-withlovedese.firebaseapp.com",
    projectId: "disclone-withlovedese",
    storageBucket: "disclone-withlovedese.appspot.com",
    messagingSenderId: "497476182384",
    appId: "1:497476182384:web:02a75a79102940cd42efb5",
    measurementId: "G-WZ244V9XS3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider, signInWithPopup }
export default db