import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnzQBt77SenLGmUlmsFewpO8W6LrkpAgQ",
    authDomain: "simplitrain-auth1.firebaseapp.com",
    databaseURL: "https://simplitrain-auth1.firebaseio.com",
    projectId: "simplitrain-auth1",
    storageBucket: "simplitrain-auth1.appspot.com",
    messagingSenderId: "224741994474",
    appId: "1:224741994474:web:851e84e485cb5212fd8c93",
    measurementId: "G-LWKNM4WMLX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});


