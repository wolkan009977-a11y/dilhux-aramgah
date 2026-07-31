import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4smdsM1Ld2Bi6GlrLf9nE_3tx9tc1dqg",
  authDomain: "dilhux-aramgah.firebaseapp.com",
  projectId: "dilhux-aramgah",
  storageBucket: "dilhux-aramgah.firebasestorage.app",
  messagingSenderId: "314736222111",
  appId: "1:314736222111:web:a63e5eb2aeaea05267e7aa",
  measurementId: "G-1T7H0KWC7R"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
