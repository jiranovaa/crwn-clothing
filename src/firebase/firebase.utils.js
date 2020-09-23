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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;