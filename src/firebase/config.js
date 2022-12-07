import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBORa1hioH8DGTupDQNlfiFbpWbD9mFKDg",
  authDomain: "grouptaskapp-4eccd.firebaseapp.com",
  projectId: "grouptaskapp-4eccd",
  storageBucket: "grouptaskapp-4eccd.appspot.com",
  messagingSenderId: "247010408403",
  appId: "1:247010408403:web:2601d61aedaa9908026126"
};

  //init

  firebase.initializeApp(firebaseConfig)

  // services

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timesstamp
  const timestamp = firebase.firestore.Timestamp

  // exports

  export { projectFirestore, projectAuth, timestamp, projectStorage } 