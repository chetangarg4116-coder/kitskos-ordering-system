import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOa-PHa9GaK48SsQvqxWQc1zFc_ihkhfs",
  authDomain: "kitskos-ordering.firebaseapp.com",
  projectId: "kitskos-ordering",
  storageBucket: "kitskos-ordering.firebasestorage.app",
  messagingSenderId: "678318059790",
  appId: "1:678318059790:web:4cca414f4478f56ea8a75f",
  measurementId: "G-KP9ZPZ9TFX"
};

const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

export default app;