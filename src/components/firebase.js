import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
   apiKey: "AIzaSyDmqx-ixwVMUveJXYUXp9EjEL-KnZVVYfU",
  authDomain: "saturin-2df57.firebaseapp.com",
  projectId: "saturin-2df57",
  storageBucket: "saturin-2df57.appspot.com",
  messagingSenderId: "170839087316",
  appId: "1:170839087316:web:0af1b9a0929c6ee7b4c341"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { firebase, storage };
