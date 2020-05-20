import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCJc1s5gnEI1jyD96jwL6Wm1tRzihnPfnE",
  authDomain: "friends-reminder-e17c0.firebaseapp.com",
  databaseURL: "https://friends-reminder-e17c0.firebaseio.com",
  projectId: "friends-reminder-e17c0",
  storageBucket: "friends-reminder-e17c0.appspot.com",
  messagingSenderId: "232215369152",
  appId: "1:232215369152:web:d2c6f7e1e9238151aba425",
  measurementId: "G-87GTKDZXB7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;