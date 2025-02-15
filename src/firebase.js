import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot  } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyCW20_Zj2dATCS2vkSIxb1VKfwwWZbAqI0",
  authDomain: "disneyplus-clone-20366.firebaseapp.com",
  projectId: "disneyplus-clone-20366",
  storageBucket: "disneyplus-clone-20366.appspot.com",
  messagingSenderId: "1023912143801",
  appId: "1:1023912143801:web:d328476e80a04f2ab96468",
  measurementId: "G-9BP3YTFVE7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage };
export default db;
export {collection, onSnapshot };
