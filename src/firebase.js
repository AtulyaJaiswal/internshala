import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
     apiKey: "AIzaSyD5aQl1a--7ydtoSj4EXRrkp0Lg0kwEjO4",
     authDomain: "tradeg-84523.firebaseapp.com",
     projectId: "tradeg-84523",
     storageBucket: "tradeg-84523.appspot.com",
     messagingSenderId: "350271668306",
     appId: "1:350271668306:web:10079b270ebc0a36695f8b",
     measurementId: "G-PX1E7SZ5XM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
// db will allow access to database from any file
const db=firebaseApp.firestore();

export default db;