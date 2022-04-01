import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxvAJlNNVqnvVFE7gwYXNm3SoA6MB5UeA",
    authDomain: "sample-db-tesy.firebaseapp.com",
    projectId: "sample-db-tesy",
    storageBucket: "sample-db-tesy.appspot.com",
    messagingSenderId: "931457345834",
    appId: "1:931457345834:web:435d8e9c40b1d6b08f1653"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig)

//Initialize Services
const projectFirestore = firebase.firestore()

export { projectFirestore }