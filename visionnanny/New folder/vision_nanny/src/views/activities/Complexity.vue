<template>
  <div class="base">
    <side-bar class="side">
      <ul class="list-items">
        <li class="menu-item">
          <div class="dropdown">
            <h3>Select Target</h3>

            <button
              style="background-color: #e84e4e; border: none; width: 160px;"
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ category }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" @click="category = 'Duck'">Duck</a>
              </li>
              <li>
                <a class="dropdown-item" @click="category = 'Ball'">Ball</a>
              </li>
            </ul>
          </div>
        </li>

        <li class="menu-item">
          <router-link to="/activities">
            <div class="single_form text-center">
              <base-button>Back</base-button>
            </div>
          </router-link>
        </li>
      </ul>
    </side-bar>

    <div
      id="mycarousel"
      :style="{ background: backgroundColor }"
      class="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <ol class="carousel-indicators carousel-indicators-numbers">
        <li data-bs-target="#mycarousel" data-bs-slide-to="0" class="active">
          0
        </li>
        <li data-bs-target="#mycarousel" data-bs-slide-to="1">1</li>
        <li data-bs-target="#mycarousel" data-bs-slide-to="2">2</li>
        <li data-bs-target="#mycarousel" data-bs-slide-to="3">3</li>
        <li data-bs-target="#mycarousel" data-bs-slide-to="4">4</li>
        <li data-bs-target="#mycarousel" data-bs-slide-to="5">5</li>
        <li data-bs-target="#mycarousel" data-bs-slide-to="6">6</li>
        <li data-bs-target="#mycarousel" data-bs-slide-to="7">7</li>
        <li data-bs-target="#mycarousel" data-bs-slide-to="8">8</li>
      </ol>
      <div class="carousel-inner">
        <div
          v-for="(item, index) in set"
          :key="index"
          :class="{
            'carousel-item active': index === 0,
            'carousel-item': index != 0,
          }"
        >
          <div class="mx-auto">
            <img :id="index" :src="item.pathLong" alt="" class="image" />
            <img
              :src="targetsrc"
              class="target"
              :style="[
                index === 0
                  ? {
                      top: windowHeight + 'px',
                      left: windowWidth + 'px',
                      position: 'absolute',
                      height: '60vh',
                      width: '60vw',
                      transform: 'translate(-50%, -50%)',
                      'margin-left': imageWidth * item.left + 'px',
                      'margin-top': imageHeight * item.top + 'px',
                    }
                  : {
                      top: windowHeight + 'px',
                      left: windowWidth + 'px',
                      position: 'absolute',
                      height: scale + 'vh',
                      width: scale + 'vw',
                      transform: 'translate(-50%, -50%)',
                      'margin-left': imageWidth * item.left + 'px',
                      'margin-top': imageHeight * item.top + 'px',
                    },
              ]"
            />
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev text-decoration-none w-auto ps-3"
                style="height:15%; margin-top:  45vh;"

        href="#mycarousel"
        role="button"
        data-bs-slide="prev"
        @click="remove"
      >
        <i class="fas fa-chevron-left"></i>
      </a>
      <a
        class="carousel-control-next text-decoration-none w-auto pe-3"
                style="height:15%; margin-top:  45vh;"

        href="#mycarousel"
        role="button"
        data-bs-slide="next"
        @click="remove"
      >
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import firebase from '../../firebase.js';
import {getFirestore,collection,getDocs } from "firebase/firestore"; 
export default {
  data() {
    return {
      object:[],
      set:[],
      scale: 10,
      imageWidth: 0,
      imageHeight: 0,
      windowHeight: 0,
      windowWidth: 0,
      // set1: [
      //   {
      //     pathLong: "assets/activity/complexity/set1/0.svg",
      //     left: "0",
      //     top: "0",
      //   },
      //   {
      //     pathLong: "assets/activity/complexity/set1/1.svg",
      //     left: "0",
      //     top: "0.3",
      //   },
      //   {
      //     pathLong: "assets/activity/complexity/set1/2.svg",
      //     left: "-0.15",
      //     top: "0.1",
      //   },
      //   {
      //     pathLong: "assets/activity/complexity/set1/3.svg",
      //     left: "0.4",
      //     top: "0.3",
      //   },
      //   {
      //     pathLong: "assets/activity/complexity/set1/4.svg",
      //     left: "-0.02",
      //     top: "-0.225",
      //   },
      //   {
      //     pathLong: "assets/activity/complexity/set1/5.svg",
      //     left: "-0.3",
      //     top: "0.3",
      //   },
      //   {
      //     pathLong: "assets/activity/complexity/set1/6.svg",
      //     left: "-0.15",
      //     top: "-0.04",
      //   },
      //   {
      //     pathLong: "assets/activity/complexity/set1/7.svg",
      //     left: "0.3",
      //     top: "0.01",
      //   },
      //   {
      //     pathLong: "assets/activity/complexity/set1/8.svg",
      //     left: "-0.02",
      //     top: "0.1",
      //   },
      // ],
      last: "",
      run: true,
      category: "Duck",
      backgroundColor: "black",
      filter:
        "invert(16%) sepia(94%) saturate(6763%) hue-rotate(358deg) brightness(111%) contrast(112%)",
    };
  },
  async mounted(){
     //console.log(this.set1);
    window.addEventListener("resize", this.myEventHandler);
    this.windowHeight = window.innerHeight / 2;
    this.windowWidth = window.innerWidth / 2;
    if (450 / 318.18 < window.innerWidth / window.innerHeight) {
      this.imageWidth = window.innerHeight * (450 / 318.18);
      this.imageHeight = window.innerHeight;
    } else {
      this.imageWidth = window.innerWidth;
      this.imageHeight = window.innerWidth / (450 / 318.18);
    }
        var complexity_object=[];
      const db = getFirestore(firebase);
      const q = collection(db,"activities" ,"activities/complexity card/complexity card/Object");
      let item={};

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
       {
      
      item=doc.data();
  
                         var obj={

                          name:doc.id,
                          img:item['link']
                                 }
             complexity_object.push(obj);

                }); 
      this.object=complexity_object;
     
      var dict=[];
       const qt = collection(db,"activities" ,"activities/complexity card/complexity card/Set");
      let itemofset={};

      const querySnapshotofset = await getDocs(qt);
      querySnapshotofset.forEach((doc) =>
       {
      
      itemofset=doc.data();
    
     
                         var obj={

                          name:doc.id,
                          pathLong:itemofset['link'],
                          left:itemofset['left'],
                          top:itemofset['top']
                                 }
             dict.push(obj);

                });
      this.set=dict;
     
      console.log(this.set);
  
  },
  computed: {
    targetsrc() {
      if (this.category) {
        if(this.object.find(ob => ob.name === this.category)){
          return this.object.find(ob => ob.name === this.category).img;
        }else{
          return "link"
         //return this.object['duck'];
        }
      }
      else {
        return ""
      }
    },
  },

  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      this.windowHeight = window.innerHeight / 2;
      this.windowWidth = window.innerWidth / 2;
      if (450 / 318.18 < window.innerWidth / window.innerHeight) {
        this.imageWidth = window.innerHeight * (450 / 318.18);
        this.imageHeight = window.innerHeight;
      } else {
        this.imageWidth = window.innerWidth;
        this.imageHeight = window.innerWidth / (450 / 318.18);
      }
    },

    objcolor(value) {
      if (value == "black") {
        this.filter =
          "invert(0%) sepia(0%) saturate(7%) hue-rotate(148deg) brightness(102%) contrast(102%)";
      } else if (value == "white") {
        this.filter =
          "invert(93%) sepia(100%) saturate(28%) hue-rotate(91deg) brightness(104%) contrast(110%)";
      } else if (value == "red") {
        this.filter =
          "invert(16%) sepia(94%) saturate(6763%) hue-rotate(358deg) brightness(111%) contrast(112%)";
      } else if (value == "orange") {
        this.filter =
          "invert(72%) sepia(40%) saturate(6133%) hue-rotate(3deg) brightness(113%) contrast(102%)";
      } else if (value == "yellow") {
        this.filter =
          "invert(87%) sepia(60%) saturate(985%) hue-rotate(357deg) brightness(108%) contrast(107%)";
      } else if (value == "green") {
        this.filter =
          "invert(62%) sepia(88%) saturate(3491%) hue-rotate(82deg) brightness(120%) contrast(122%)";
      } else if (value == "dodgerblue") {
        this.filter =
          "invert(7%) sepia(99%) saturate(7445%) hue-rotate(247deg) brightness(110%) contrast(143%)";
      } else if (value == "hotpink") {
        this.filter =
          "invert(52%) sepia(99%) saturate(508%) hue-rotate(293deg) brightness(100%) contrast(102%)";
      } else if (value == "violet") {
        this.filter =
          "invert(17%) sepia(100%) saturate(3389%) hue-rotate(282deg) brightness(105%) contrast(134%)";
      }
    },
  },
};
</script>

<style scoped>
#filter {
  filter: brightness(0%) saturate(100%) invert(98%) sepia(31%) saturate(7499%)
    hue-rotate(357deg) brightness(105%) contrast(104%);
}
.image {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
}

.base {
  position: fixed;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.object {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.list-items {
  list-style: none;
  padding: 0;
}

.list-items h3 {
  color: aliceblue;
  font-size: 1em;
}

.menu-item {
  margin: 0 0 50px 0;
}

.side {
  position: absolute;
  z-index: 200;
}

#mycarousel {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}

.carousel-inner {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

#mycarousel .carousel-indicators li {
  margin-top: 50px;
  border: 10px;
  background-color: #e84e4e;
}
#mycarousel .carousel-control-next i,
#mycarousel .carousel-control-prev i {
  color: #e84e4e !important;
  font-size: 2.8em !important;
}

@media (min-width: 576px) {
  .tempaltemo-carousel .h1 {
    font-size: 1em !important;
  }
}

/*// Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
  #mycarousel .carousel-item {
    min-height: 30rem !important;
  }
}

/* Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
}
</style>
