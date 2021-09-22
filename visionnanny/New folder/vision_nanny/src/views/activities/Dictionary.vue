<template>
  <section id="home" class="header_area">
    <div id="header_navbar" class="header_navbar sticky">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <router-link to="/">
                <a class="navbar-brand">
                  <img id="logo" src="assets/images/logo-2.svg" alt="Logo" />
                </a>
              </router-link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav ml-auto">
                  <router-link to="/">
                    <li class="nav-item">
                      <a class="page-scroll">Home</a>
                    </li>
                  </router-link>
                                    <router-link to="/activities">

                  <li class="nav-item">
                    <a class="page-scroll " href="#activities"
                      >Activities</a
                    >
                  </li>
                  </router-link>
                    <li class="nav-item">
                      <a class="page-scroll active">Dictionary</a>
                    </li>

                  <li class="nav-item">
                    <a @click="logout" role="button" class="page-scroll">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="activities" class="features_area pt-120 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section_title text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              Picture Dictionary
            </h4>

          </div>
        </div>
      </div>
      <div class="row ">
              
         <div class="pb-50 col-lg-4 col-md-6 background" v-for="pic in pics" :key="pic.name">
          <div
            class=" single_features text-center mt-60 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <router-link :to="`/activities/dictionary/${pic.name}`"  >
              <img id="img" :src="pic.img" />
              <h4 class="features_title">{{pic.name}}</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>
   
   
  </section>
</template>

<script>
//  import axios from 'axios';
  import firebase from '../../firebase.js';
import {getFirestore,collection,getDocs } from "firebase/firestore"; 
export default {
data(){
  return {
    pics:[],
  };
},
  async mounted(){
       var dict=[];
      const db = getFirestore(firebase);
      const q = collection(db,"activities" ,"activities/picture dictionary");
      let items={};

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
       {
      
      items=doc.data();
     
       Object.keys(items)
            .map(function(key){
                         var obj={
                          name:key,
                          img:items[key]
                                 }
             dict.push(obj);

                             });
      this.pics=dict;
      });
      

//     var dict=[];
//   axios.get("https://firestore.googleapis.com/v1/projects/crud-firebase-569b9/databases/(default)/documents/activities/picture%20dictionary").then((res)=>{
    
//       Object.keys(res.data.fields)
//       .map(function(key){
//       var obj={
//         name:key,
//         img:res.data.fields[key].stringValue
//       }
//     dict.push(obj)
//   });
     
// this.pics=dict;
//     });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
#img {
  display: inline-block;
  width: 60%;
}
.background {
  /* background-color: rgb(250, 250, 250); */
}
a {
    text-decoration: none;
}
</style>