<template>
  <div
    class="base" id="save"
    v-scroll-lock="open"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div id="pdf">
      <figure v-show="previewVisibility" class="preview draggable">
        <img id="preview" />
        <figcaption>Preview</figcaption>
      </figure>
      <span class="material-icons dropzone" id="deleteicon"
        >delete_outline</span
      >
      <div id="container"></div>
      <div class="canvas-container">
        <canvas
          id="textCanvas"
          width="400"
          height="200"
          hidden="false"
        ></canvas>
      </div>
    </div>
    <side-bar class="side">
      <ul class="list-items" style = "margin-top:200px">
        <li class="menu-item">
          <textarea 
            @input="preview"
            v-model="text"
            rows="2"
            aria-label="Text"
            id="textInput"
          ></textarea>
        </li>
        <li class="menu-item">
          <button class="add" @click="addtext">Add text to canvas</button>
        </li>
        <br />
        <li class="menu-item">
          <label class="add">
            <input type="file" accept="image/*" @change="addimage($event)"/>
            Add Images 
          </label>
        </li>
        <li class="menu-item">
          <button class="add" @click="img">Save as image</button>
        </li>
        <li class="menu-item">
          <h3>Bubble Color</h3>
          <bubble-color
            :color-name="defaultcolor"
            @picked-objcolor="outline"
          ></bubble-color>
        </li>
        <li class="menu-item">
          <h3>Font Size: {{ fontsize }}</h3>
          <range-slider
            min="16"
            max="300"
            step="1"
            :default="fontsize"
            @change-value="FontSize"
          ></range-slider>
        </li>
        <li class="menu-item">
          <h3>Bubble Thickness: {{ bubblethickness }}</h3>
          <range-slider
            min="1"
            max="20"
            step="1"
            :default="bubblethickness"
            @change-value="BubbleThickness"
          ></range-slider>
        </li>
        <li class="menu-item">
          <h3>Bubble Gap: {{ bubblegap }}</h3>
          <range-slider
            min="1"
            max="50"
            step="1"
            :default="bubblegap"
            @change-value="BubbleGap"
          ></range-slider>
        </li>
        <li class="menu-item" style="display: inline-block">
          <h3>Light Mode</h3>
          <toggle-switch
            defaultchecked="true"
            @change-made="darkmode"
          ></toggle-switch>
        </li>
        <li class="menu-item" style="display: inline-block">
          <h3>Remove Text</h3>
          <toggle-switch
            defaultchecked="false"
            @change-made="blankmode"
          ></toggle-switch>
        </li>
        <li class="menu-item" style="display: inline-block">
          <h3>Write Normal Text</h3>
          <toggle-switch
            defaultchecked="false"
            @change-made="normaltextmode"
          ></toggle-switch>
        </li>
        <li></li>
            <li class="menu-item">
          <router-link to="/activities">
            <div class="single_form text-center">
              <base-button>Back</base-button>
            </div>
          </router-link>
          <br />
          <br />
        </li>
      </ul>
    </side-bar>
  </div>
</template>

<script>
import bubble from "@/scripts/bubble.js";
import custominteract from "@/scripts/custominteract.js";


export default {
  mixins: [bubble, custominteract],

  data() {
    return {
      open: false,
      i: 0,
      previewVisibility: false,
      binVisibility: false,
      backgroundColor: "black",
      fontsize: 70,
      bubblethickness: 9,
      bubblegap: 11,
      defaultcolor: "red",
      outlinecolor: [255, 0, 0],
      lastcolor: 'red',
      text: "",
      dark: true,
      blank: false,
      normaltext: false,
      color: {
        red: [255, 0, 0],
        orange: [255, 165, 0],
        yellow: [255, 255, 0],
        green: [0, 255, 0],
        dodgerblue: [30, 144, 255],
        hotpink: [255, 105, 180],
        violet: [238, 130, 238],
        black: [0,0,0],
        white: [255, 255, 255]
      },
    };
  },
  methods: {
    
    addtext() {
      this.previewVisibility = false;
      ++this.i;
      let idVal = this.i.toString();
      this.renderImage(idVal);
    },
    addimage(event) {
      ++this.i;
      let idVal = this.i.toString();
      let imgElement = document.createElement("img");
      imgElement.className = "draggable real";
      imgElement.id = idVal;
      document.getElementById("container").appendChild(imgElement);

      let output = document.getElementById(idVal);
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src); // free memory
      };
    },
    preview() {
      this.renderImage("preview");
      if (this.text === "") {
        this.previewVisibility = false;
        let paras = document.getElementsByClassName("prev");
        while (paras[0]) {
          console.log("deleting");
          paras[0].parentNode.removeChild(paras[0]);
        }
      } else {
        this.previewVisibility = true;
      }
    },
    FontSize(value) {
      this.fontsize = value;
      this.preview();
    },
    BubbleThickness(value) {
      this.bubblethickness = value;
      this.preview();
    },
    BubbleGap(value) {
      this.bubblegap = value;
      this.preview();
    },
    outline(value) {
      if (value != 'black' && value != 'white') {      
      this.lastcolor = value;
      }
      this.outlinecolor = this.color[value];
      this.preview();
    },
    darkmode() {
      this.dark = !this.dark;
      if (this.dark) {
        this.backgroundColor = "black";
      } else {
        this.backgroundColor = "white";
      }
    },
    blankmode() {
      this.blank = !this.blank;
      this.preview();
    },
    normaltextmode() {
      this.normaltext = !this.normaltext;
      if (this.normaltext && this.dark){
        this.outline('black');
       } else if (this.normaltext && !this.dark){
        this.outline('white');
 
      } else {
            this.outline(this.lastcolor);
 
      }
    },
  },
  mounted() {
    this.drag();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
.drop-active {
  visibility: visible !important;
}
.drop-target {
  color: rgb(0, 255, 0) !important;
}
.draggable {
  -ms-touch-action: none;
  touch-action: none;
  user-select: none;
}
.dropzone {
  position: fixed;
  visibility: hidden;
  color: rgb(255, 255, 255);
  font-size: 50px;
  z-index: 100;
  bottom: 10px;
  left: 10px;
}

i {
  padding: 10px;
  margin: 10px;
  color: red;
}
.preview {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  border: 1px solid rgb(255, 255, 255);
}
figcaption {
  background-color: black;
  color: white;
  font-size: 1em;
  padding: 2px;
  text-align: center;
}
.add {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #ffffff;
  padding: 0.3em 1.2em;
  border-radius: 30px;
  color: #000000;
  background-size: 100% 100%;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  width: 200px;
  height: 30px;
}
#add:active {
  text-decoration: none;
  background-color: greenyellow;
}
#container {
  touch-action: none;
}
#textInput {
  width: 95%;
  height: 100px;
  resize: none;
  background-color: #ececec;
  font-size: 1em;
}
textarea {
  font-size: 1em;
  margin-top: 50px;
}
.canvas-container {
  position: absolute;
  z-index: 0;
}

.list-items {
  list-style: none;
  padding: 0;
}

.list-items h3 {
  color: aliceblue;
  font-size: 1em;
  padding-top: 5%;
}

.menu-item {
  margin: 0 0 10px 0;
}

.side {
  position: absolute;
  z-index: 100;
}

.base {
  position: fixed;
  z-index: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100vh;
    -webkit-user-select: none;
  -webkit-touch-callout: none;
 }
</style>
