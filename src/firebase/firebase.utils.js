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

export const createUserProfileDocument = async (userAuth, additionaldata) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
            })
        }
        catch (error) {
            console.log('Error Creating User: ', error.message)
        }

    }

    return userRef;
}


firebase.initializeApp(config)
export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;