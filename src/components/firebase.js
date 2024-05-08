import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC4qa-X9JIKcUqT1lk5eNkSjoGlv01YRF4",
  authDomain: "imgsitas.firebaseapp.com",
  projectId: "imgsitas",
  storageBucket: "imgsitas.appspot.com",
  messagingSenderId: "988788936396",
  appId: "1:988788936396:web:40c1ba7700322a27033c69"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { firebase, storage };
