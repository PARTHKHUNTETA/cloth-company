import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8QtBpjowRKZGraaJzQwto_KpoiPdsnuo",
    authDomain: "lion-clothing.firebaseapp.com",
    projectId: "lion-clothing",
    storageBucket: "lion-clothing.appspot.com",
    messagingSenderId: "346480195530",
    appId: "1:346480195530:web:9a395c43a3cb3378820133",
    measurementId: "G-YQN0QJWMZF"
};

firebase.initializeApp(config)
export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;