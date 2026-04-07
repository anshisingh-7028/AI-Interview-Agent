
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-55ea8.firebaseapp.com",
  projectId: "interview-55ea8",
  storageBucket: "interview-55ea8.firebasestorage.app",
  messagingSenderId: "326087909247",
  appId: "1:326087909247:web:2ab56f4d04798bf5e2044a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}