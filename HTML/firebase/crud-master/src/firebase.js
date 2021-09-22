import { initializeApp } from 'firebase/app';
//import firebase from '@firebase/app';
// import { getFirestore} from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the folowing with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYNfjT-MlOsINFwdKUI9a93ghD9NecEgc",
  authDomain: "crud-firebase-569b9.firebaseapp.com",
  databaseURL: "https://crud-firebase-569b9-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-569b9",
  storageBucket: "crud-firebase-569b9.appspot.com",
  messagingSenderId: "676629913315",
  appId: "1:676629913315:web:cd3325e1aef0fc1f13afd6",
  measurementId: "G-ZHT93NR3DD"
};

const app = initializeApp(firebaseConfig);

export default app;