import * as firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDPTfKDcd1JVsPo2EdqbLn_WvWWrDEPemI",
    authDomain: "spherical-frame-256816.firebaseapp.com",
    databaseURL: "https://spherical-frame-256816.firebaseio.com",
    projectId: "spherical-frame-256816",
    storageBucket: "spherical-frame-256816.appspot.com",
    messagingSenderId: "943383720267",
    appId: "1:943383720267:web:ba13cbb4d15a72352378ce",
    measurementId: "G-H48N5M5YDP"
})

export default app;