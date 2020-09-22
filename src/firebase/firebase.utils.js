import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVrF0wEjUVk59_MEWaeXvh_gJVHasyGZc",
    authDomain: "crwn-db-20b26.firebaseapp.com",
    databaseURL: "https://crwn-db-20b26.firebaseio.com",
    projectId: "crwn-db-20b26",
    storageBucket: "crwn-db-20b26.appspot.com",
    messagingSenderId: "115848684025",
    appId: "1:115848684025:web:da28582b0f0c78d703dd28",
    measurementId: "G-08HYVCF972"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;