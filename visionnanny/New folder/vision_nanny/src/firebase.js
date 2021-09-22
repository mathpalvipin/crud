import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API,
  // authDomain: process.env.FIREBASE_AUTH_DOMIAN,
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  // projectId: process.env.FIREBASE_APP_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID
   apiKey: process.env.FIREBASE_API,
  authDomain:  process.env.FIREBASE_AUTH_DOMIAN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "vision-nanny-725f8",
  storageBucket:process.env.FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId:  process.env.FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);

export default app;