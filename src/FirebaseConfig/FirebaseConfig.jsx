import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzZTe6RF2pZoxpYSn5tXE7BukMEHA1bz0",
  authDomain: "trac-39f87.firebaseapp.com",
  projectId: "trac-39f87",
  storageBucket: "trac-39f87.appspot.com",
  messagingSenderId: "1078270280491",
  appId: "1:1078270280491:web:f7a077a8bb07a675aafb6e",
  measurementId: "G-Z8BWS5JXJV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth(app);
export const GoogleSignProvider = new GoogleAuthProvider();
export const DataBase = getFirestore(app);
