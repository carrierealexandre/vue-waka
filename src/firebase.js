

import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCKpHb84HFINt9Km82LhO6jqictOTwjS3g",
    authDomain: "wakaconnection-4f240.firebaseapp.com",
    databaseURL: "https://wakaconnection-4f240.firebaseio.com",
    projectId: "wakaconnection-4f240",
    storageBucket: "wakaconnection-4f240.appspot.com",
    messagingSenderId: "540289827904",
    appId: "1:540289827904:web:2056547848d2632f8f0ba5",
    measurementId: "G-QWKJYVL9LT"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  firebase.analytics();