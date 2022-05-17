import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBeW425yTQnl8ifHonRiSZiZof-pzHEfwM",
  authDomain: "mymoney-d7eaa.firebaseapp.com",
  projectId: "mymoney-d7eaa",
  storageBucket: "mymoney-d7eaa.appspot.com",
  messagingSenderId: "1057584813100",
  appId: "1:1057584813100:web:4799dfc9dc7d8425b8ad89"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
