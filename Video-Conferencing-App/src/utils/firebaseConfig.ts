import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBR0B2t45R2CMtHXcNxRZKlDQS1c_eUUyo",
  authDomain: "zoom-clone-81749.firebaseapp.com",
  projectId: "zoom-clone-81749",
  storageBucket: "zoom-clone-81749.appspot.com",
  messagingSenderId: "1085903568385",
  appId: "1:1085903568385:web:5995d5a41eb68380e64a00",
  measurementId: "G-BL9K6GL4M0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
