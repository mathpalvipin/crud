
<template>
  <div>
    <h1>System List</h1>
    <ul>
      <li :key="item.key" v-for="item in testCollection">{{item}}</li>
      <button @click="add">add</button>
      <button @click="delet">delete</button>
      <button @click="deletefield">deletefield in user with id LA</button>
      <button @click="updatefield">updatefield in user with id LA</button>
      <button @click="createuser">createuser </button>
      <button @click="signin">sign in</button>
      <button @click="signout">signout</button>
      <button @click="verify">verify</button>
      <button @click="updateprofile">updateprofile</button>
      <button @click="addpatient">addpatient</button>
    </ul>
  </div>
</template>

<script>
// import {getFirestore, collection, getDocs } from 'firebase/firestore';
// import {getFirestore ,collection } from 'firebase/firestore';
const axios = require('axios');
import { getDoc,updateDoc, deleteField,getFirestore, deleteDoc,collection, doc, setDoc,getDocs, query, where } from "firebase/firestore"; 
import app from './firebase.js';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged ,signOut ,sendEmailVerification ,updateProfile} from "firebase/auth";
export default {
  data() {
    return {
      testCollection: [],
    };
  },
 async mounted() {

// **********
//const db = getFirestore(app);
// const docRef =  collection(db, 'activities');
// const querySnapshot = await getDocs(docRef);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.data());
// });




// const q = collection(db, "activities");
// let arr=[];
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// arr.push(doc.data());

// });
// console.log(arr);

//const q = collection(db,"activities");
const db = getFirestore(this.$app);

const q = collection(db,"activities","pic/id");

let arr=[];
// const q=collection(qt,"animals");
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
arr.push(doc.data());

});

 const docRef = doc(db, "activities","complexity card");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
        console.log("Document data:", docSnap.data());
        } 
        else {
          console.log("No such document!");
            }

axios.get("https://firestore.googleapis.com/v1/projects/crud-firebase-569b9/databases/(default)/documents/activities/picture%20dictionary/animals").then((res)=>{
  console.log(res);
})
//***
 

const auth = getAuth();
// signInAnonymously(auth)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // ...
//   });

onAuthStateChanged(auth, (user) => {
  if (user) {

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  //  const uid = user.uid;
    console.log(user);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//const db = getFirestore(app);
//   const citiesCol = collection(db, 'user');
//   getDocs(citiesCol).then(data=>{
    
//   data.docs.forEach(doc=>{
//     console.log(doc.data());

//   })
// })
  
//   const cityRef = collection(db,'user');

//  getDocs(cityRef).then(data=>{
// const doc=data.docs;

// if (!doc) {
//   console.log('No such document!');
// } else {
//    data.docs.forEach(doc=>{
//     console.log(doc.data());

//   })
// }})
            



// const docRef =  collection(db, 'User');
// const querySnapshot = await getDocs(docRef);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.data());
// });






// if (!docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
 },
 methods: {
  add(){
  const db = getFirestore(app);
 const data = {
  name: 'Los Angeles',
phone :8958983216,
};
//LA is id 
setDoc(doc(db, "User", "LA"),data);
},
  async delet(){
  const db = getFirestore(app);  
 await deleteDoc(doc(db, "User", "LA"));
 
},
 async deletefield(){
  const db = getFirestore(app); 
  const userRef = doc(db, 'User', 'LA'); 
 await updateDoc(userRef,{
name:deleteField()}
);
 
},
 async updatefield(){
  const db = getFirestore(app); 
  const userRef = doc(db, 'User', 'LA'); 
   const data = {
  name: 'Los updated',
phone :895898316,
};
 await updateDoc(userRef,data
);
 
},
async createuser(){
  const auth = getAuth();
  const db = getFirestore(app);
  const email="vipinmathpal1@gmail.com";
  const password = 'qwer123'
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);

 const data = {
  id:user.uid,
 name:"Vipin",
type :"expert",
patients:[]
};
//LA is id 
setDoc(doc(db, "User", user.uid),data);

    // ...
  })
  .catch((error) => {
    console.log(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
  });
},
async signin(){


const auth = getAuth();
 const email="vipinmathpal11@gmail.com";
  const password = 'qwer123'
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
      console.log(auth.user.emailVerified);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+errorMessage);
  });
},
async signout(){


const auth = getAuth();

signOut(auth).then(() => {
  // Sign-out successful.
  console.log('signout');
}).catch((error) => {
  console.log(error);
  // An error happened.
});
 },
 verify(){
  const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
 },
 updateprofile(){
  const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: "User", photoURL: "https://example.com/jane-q-user/profile.jpg",

}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  console.log(error);
  // An error occurred
  // ...
});
 },

async addpatient(){
  const auth = getAuth();
  const db = getFirestore(app);
 var patients=[];
 const user=auth.currentUser;
 console.log(user.uid);
const q = query(collection(db, "User"),where("id", "==", user.uid));


const querySnapshot = await getDocs(q);
console.log(querySnapshot);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.data());
  patients= doc.data().patients;
  console.log(patients);

 
});
patients.push('raiii');
 const userRef = doc(db, 'User', user.uid); 
   const data = {
 patients:patients
};
 await updateDoc(userRef,data);


}
}
};
</script>

<style lang="scss">
</style>