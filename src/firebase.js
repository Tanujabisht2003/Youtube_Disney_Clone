// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW20_Zj2dATCS2vkSIxb1VKfwwWZbAqI0",
    authDomain: "disneyplus-clone-20366.firebaseapp.com",
    projectId: "disneyplus-clone-20366",
    storageBucket: "disneyplus-clone-20366.firebasestorage.app",
    messagingSenderId: "1023912143801",
    appId: "1:1023912143801:web:d328476e80a04f2ab96468",
    measurementId: "G-9BP3YTFVE7"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();




