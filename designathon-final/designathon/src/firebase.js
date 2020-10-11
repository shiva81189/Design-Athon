import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_9x7bM59JivTuJrcgMpiriLryxcjDL3A",
  authDomain: "designathon123.firebaseapp.com",
  databaseURL: "https://designathon123.firebaseio.com",
  projectId: "designathon123",
  storageBucket: "designathon123.appspot.com",
  messagingSenderId: "173368454858",
  appId: "1:173368454858:web:21b33ece7bfd6b2f038e33",
  measurementId: "G-RVZ0SSNX9N"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db, auth};