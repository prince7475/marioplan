import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoIcER2-rDDnpvaWuMKGAnraZfeBN1Lnc",
    authDomain: "marioplan-370cc.firebaseapp.com",
    databaseURL: "https://marioplan-370cc.firebaseio.com",
    projectId: "marioplan-370cc",
    storageBucket: "marioplan-370cc.appspot.com",
    messagingSenderId: "399461562967"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;