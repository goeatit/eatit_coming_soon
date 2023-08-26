import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Initialize Firebase with your project's config
const firebaseConfig = {
  apiKey: "AIzaSyDKDpUfLGneCSK3iU3gW4u9rGpUb9o6bYQ",
  authDomain: "eatit-b1140.firebaseapp.com",
  projectId: "eatit-b1140",
  storageBucket: "eatit-b1140.appspot.com",
  messagingSenderId: "72145658012",
  appId: "1:72145658012:web:51d9ca6a1473cf3f904d59",
  measurementId: "G-EQ2N3TR3WL"
};

const app = firebase.initializeApp(firebaseConfig);

export const database = app.firestore();
