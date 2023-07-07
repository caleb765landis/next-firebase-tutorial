import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsNf9Tth8_LPUGV5OkIZORYIEaSNVfXYU",
    authDomain: "next-firebase-tutorial-54f93.firebaseapp.com",
    projectId: "next-firebase-tutorial-54f93",
    storageBucket: "next-firebase-tutorial-54f93.appspot.com",
    messagingSenderId: "597531581119",
    appId: "1:597531581119:web:5634a7740ccd3e14bb840a"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();