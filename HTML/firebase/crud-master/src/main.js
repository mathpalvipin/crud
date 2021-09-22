import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'



import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
const db = getFirestore(app);

//Get a list of cities from your database
  const citiesCol = collection(db, 'user');
  getDocs(citiesCol).then(data=>{
  data.docs.forEach(doc=>{
    console.log(doc.data());

  })
})
  


createApp(App)
.use(store)
.use(router)
.use(app)
.mount('#app')