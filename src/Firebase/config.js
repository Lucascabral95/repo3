import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBAWagQqtSx9gDSlrIkjW3RqYx2GYk7OHI",
  authDomain: "proyecto-react-prueba-90b72.firebaseapp.com",
  projectId: "proyecto-react-prueba-90b72",
  storageBucket: "proyecto-react-prueba-90b72.appspot.com",
  messagingSenderId: "166887973171",
  appId: "1:166887973171:web:159a0967dea725316dde46"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)