import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMV6jc7c7-8dpMiLs1FlaD9L_ex50ObXc",
  authDomain: "myfirstapp-d6bbe.firebaseapp.com",
  projectId: "myfirstapp-d6bbe",
  storageBucket: "myfirstapp-d6bbe.firebasestorage.app",
  messagingSenderId: "533966072196",
  appId: "1:533966072196:web:114e54fb50f06c3d5355d1",
  measurementId: "G-TFS8G36H7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
