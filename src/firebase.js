import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// import process from 'dotenv';

const firebaseConfig = {
  apiKey: 'AIzaSyBnDlda0PS-74FfRPj8lZYBAwzgUUmPHGQ',
  authDomain: 'chat-41a87.firebaseapp.com',
  projectId: 'chat-41a87',
  storageBucket: 'chat-41a87.appspot.com',
  messagingSenderId: '503771373256',
  appId: '1:503771373256:web:1dae32620d624a95aa0ffd',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
