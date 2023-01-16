// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'moviex-d001a.firebaseapp.com',
  projectId: 'moviex-d001a',
  storageBucket: 'moviex-d001a.appspot.com',
  messagingSenderId: '1061496270378',
  appId: '1:1061496270378:web:c21fc7e45b82ef40441d53',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStoreage(app)

export default app;
