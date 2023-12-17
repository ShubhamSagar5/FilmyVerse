import { initializeApp } from "firebase/app";

import { getFirestore,collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAFcgtSxqe4zbnNgQZ6BA7yCrsWl9LAGiQ",
  authDomain: "filmyverse-77359.firebaseapp.com",
  projectId: "filmyverse-77359",
  storageBucket: "filmyverse-77359.appspot.com",
  messagingSenderId: "568911254707",
  appId: "1:568911254707:web:eab441d41720aed08e8cc6"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app) 

export const moviesRef = collection(db,"movies")

export default app