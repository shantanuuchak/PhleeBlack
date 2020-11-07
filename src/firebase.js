import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//api key from firebase
var firebaseConfig = {
  apiKey: "AIzaSyCgrEK8xdC8fU79PKO3COK6G23w5lpQ2_g",
  authDomain: "react-slack-clone-a7293.firebaseapp.com",
  databaseURL: "https://react-slack-clone-a7293.firebaseio.com",
  projectId: "react-slack-clone-a7293",
  storageBucket: "react-slack-clone-a7293.appspot.com",
  messagingSenderId: "63671964302",
  appId: "1:63671964302:web:3fb3cc7653766285aeefdf",
  measurementId: "G-21L1RF6MVY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
