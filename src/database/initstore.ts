import * as firebase from 'firebase/app';
import {
    getFirestore,
    collection
} from 'firebase/firestore';

const projectId = 'pharmacie';
const app = firebase.initializeApp({
    apiKey: "AIzaSyBiJU2GbCiIiqZiROYvmWM081z14O73HtQ",
    authDomain: "pharmacie-8a52e.firebaseapp.com",
    databaseURL: "https://pharmacie-default-rtdb.firebaseio.com",
    projectId: projectId,
    storageBucket: "pharmacie.appspot.com",
    messagingSenderId: "939426916660",
    appId: "1:939426916660:web:96880684e0eb9a22cf9d61",
});
const firestoreDatabase = getFirestore(app);
const firestoreCollection = collection(firestoreDatabase, 'users-other');

export {firestoreDatabase, firestoreCollection, projectId};