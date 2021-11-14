import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArIy7cIQOGU0siixANyIkEncYG-4i-b0c",
    authDomain: "pgr-bet.firebaseapp.com",
    projectId: "pgr-bet",
    storageBucket: "pgr-bet.appspot.com",
    messagingSenderId: "705136966246",
    appId: "1:705136966246:web:690cf84fa32ea02a3a0ba7"
  };

  if(!firebase.apps.length){
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({ experimentalForceLongPolling: true });
  }

  export default firebase;