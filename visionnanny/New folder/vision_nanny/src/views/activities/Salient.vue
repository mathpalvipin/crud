<template>
  <div class="base">
    <side-bar class="side">
      <ul class="list-items">
        

                <li class="menu-item">
          <h3>Highlight Color</h3>
          <object-color
            :color-name="objColor"
            @picked-objcolor="objcolor"
          ></object-color>
        </li>
        <li class="menu-item" style="display: inline-block">
          <h3>Toggle Background Color</h3>
          <toggle-switch
            defaultchecked="true"
            @change-made="darkmode"
          ></toggle-switch>
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

      <div class="carousel-inner">
                    <img :id="index" style="height: '60vh'" :src="backdrop" alt="" class="image" />

        <div
          v-for="(item, index) in set1"
          :key="index"
          :class="{
            'carousel-item active': index === 0,
            'carousel-item': index != 0,
          }"
        >
          <div class="mx-auto">
            <img
              :src="item.overlay" 
              class=" image"
              :style="{ filter: filter,  }"

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

export default {
  data() {
    return {
 
      set1: [
        {
           overlay: "assets/activity/salient/cat_empty.png",
        },
        {
           overlay: "assets/activity/salient/cat_1.png",
        },
        {
           overlay: "assets/activity/salient/cat_2.png",
        },
        {
           overlay: "assets/activity/salient/cat_3.png",
        },
      ],
      last: "",
      run: true,
      category: "Duck",
      backdrop:"assets/activity/salient/cat_0.png",
      backgroundColor: "black",
      filter:
        "invert(16%) sepia(94%) saturate(6763%) hue-rotate(358deg) brightness(111%) contrast(112%)",
    };
  },



  methods: {


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
    darkmode() {
      this.dark = !this.dark;
      if (this.dark) {
        this.backgroundColor = "white";
      } else {
        this.backgroundColor = "black";
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
  left: 10vw;
  right: 0;
   width: 60vw;
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
