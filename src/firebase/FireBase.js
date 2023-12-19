// import { initializeApp } from "firebase/app";

// import { getFirestore,collection } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyAFcgtSxqe4zbnNgQZ6BA7yCrsWl9LAGiQ",
//   authDomain: "filmyverse-77359.firebaseapp.com",
//   projectId: "filmyverse-77359",
//   storageBucket: "filmyverse-77359.appspot.com",
//   messagingSenderId: "568911254707",
//   appId: "1:568911254707:web:eab441d41720aed08e8cc6"
// };

// // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
// export const  db = getFirestore(app) 

// export const moviesRef = collection(db,"movies")
// export const reviewsRef = collection(db,"reviews")
// export const usersRef = collection(db,"users")

// export default app


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAxyFngKMQ0a6UxXSBAReyv9R96xdE9MBE",
  authDomain: "filmyverse-6f36f.firebaseapp.com",
  projectId: "filmyverse-6f36f",
  storageBucket: "filmyverse-6f36f.appspot.com",
  messagingSenderId: "98253838287",
  appId: "1:98253838287:web:29bf8e9fb949015f7564ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app) 

export const moviesRef = collection(db,"movies")
export const reviewsRef = collection(db,"reviews")
export const usersRef = collection(db,"users")

export default app