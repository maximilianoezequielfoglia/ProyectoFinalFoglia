import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_apiKey;
const authDomain = import.meta.env.VITE_authDomain;
const projectId = import.meta.env.VITE_projectId;
const storageBucket = import.meta.env.VITE_storageBucket;
const messagingSenderId = import.meta.env.VITE_messagingSenderId;
const appId = import.meta.env.VITE_appId;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
