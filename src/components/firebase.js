import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDf7J2Cb6-syPS6Xg_D24PQysPIrAOcYkI",
  authDomain: "react-movie-project-firebase.firebaseapp.com",
  projectId: "react-movie-project-firebase",
  storageBucket: "react-movie-project-firebase.appspot.com",
  messagingSenderId: "186283237082",
  appId: "1:186283237082:web:e577cfe8f8fa5da7f44fe3",
  measurementId: "G-PEMV6R332F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export default db;
export { auth };
