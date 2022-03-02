import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7lI4nmMhX-0fmPkU2yRe6d3g2dVq7GDo",
  authDomain: "react-demo-16122.firebaseapp.com",
  projectId: "react-demo-16122",
  storageBucket: "react-demo-16122.appspot.com",
  messagingSenderId: "536091460992",
  appId: "1:536091460992:web:1c5380223a44d6a1d5ed65",
  measurementId: "G-52YWP5FGRZ"
};

export default firebase.initializeApp(firebaseConfig) 