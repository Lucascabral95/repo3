import { initializeApp } from "firebase/app";

//
import { getFirestore } from "firebase/firestore"
//

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAWagQqtSx9gDSlrIkjW3RqYx2GYk7OHI",
  authDomain: "proyecto-react-prueba-90b72.firebaseapp.com",
  projectId: "proyecto-react-prueba-90b72",
  storageBucket: "proyecto-react-prueba-90b72.appspot.com",
  messagingSenderId: "166887973171",
  appId: "1:166887973171:web:159a0967dea725316dde46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);