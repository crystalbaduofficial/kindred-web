import * as firebase from "firebase";

export const firebaseConfig = {
    apiKey: "AIzaSyCKzrzhPGdNZR67nS9ND5zg68EbcH8PPRQ",
    authDomain: "kindred-development.firebaseapp.com",
    databaseURL: "https://kindred-development-default-rtdb.firebaseio.com",
    projectId: "kindred-development",
    storageBucket: "kindred-development.appspot.com",
    messagingSenderId: "523208186663",
    appId: "1:523208186663:web:3af243452f3d00dfd86702"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
