import * as firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB0UNwIphetvh94u0up2SHMWZXIqi7ZhaY",
    authDomain: "gqlreactnode-70b16.firebaseapp.com",
    projectId: "gqlreactnode-70b16",
    storageBucket: "gqlreactnode-70b16.appspot.com",
    // messagingSenderId: "266034738406",
    appId: "1:266034738406:web:f8b38e79b0686f20043727",
    measurementId: "G-G7FTTJ2B48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.googleAuthProvider()