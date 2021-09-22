<template>
  <div class="bgcolorPicker">
    <input
      class="black"
      type="radio"
      name="hc"
      ref="black"
      id="hc-black"
      @click = "color('black')"
      :checked ="colorCheck == 'black'"

    />
    <label class="black" for="hc-black">black</label>
    <input
      class="white"
      type="radio"
      name="hc"
      ref="white"
      id="hc-white"
      @click = "color('white')"
      :checked ="colorCheck == 'white'"
    />
    <label class="white" for="hc-white">white</label>
    <input
      class="red"
      type="radio"
      name="hc"
      ref="red"
      id="hc-red"
      @click = "color('red')"
      :checked ="colorCheck == 'red'"
    />
    <label class="red" for="hc-red">red</label>
    <input
      class="orange"
      type="radio"
      name="hc"
      ref="orange"
      id="hc-orange"
      @click = "color('orange')"
      :checked ="colorCheck == 'orange'"
    />
    <label class="orange" for="hc-orange">orange</label>
    <input
      class="yellow"
      type="radio"
      name="hc"
      ref="yellow"
      id="hc-yellow"
      @click = "color('yellow')"
      :checked ="colorCheck == 'yellow'"
    />
    <label class="yellow" for="hc-yellow">yellow</label>
    <input
      class="green"
      type="radio"
      name="hc"
      ref="green"
      id="hc-green"
      @click = "color('green')"
      :checked ="colorCheck == 'green'"
    />
    <label class="green" for="hc-green">green</label>
    <input
      class="blue"
      type="radio"
      name="hc"
      ref="blue"
      id="hc-blue"
      @click = "color('dodgerblue')"
      :checked ="colorCheck == 'dodgerblue'"
    />
    <label class="blue" for="hc-blue">blue</label>
    <input
      class="pink"
      type="radio"
      name="hc"
      ref="pink"
      id="hc-pink"
      @click = "color('hotpink')"
      :checked ="colorCheck == 'hotpink'"
    />
    <label class="pink" for="hc-pink">pink</label>
    <input
      class="violet"
      type="radio"
      name="hc"
      ref="violet"
      id="hc-violet"
      @click = "color('violet')"
      :checked ="colorCheck == 'violet'"
    />
    <label class="violet" for="hc-violet">violet</label>
  </div>
</template>

<script>
export default {
emits: ['picked-bgcolor'],
props: ['colorName'],

data(){
    return{
      colorCheck: this.colorName
    }
},

methods:{
    color(value){
      this.$emit('picked-bgcolor', value);
    },
}
};
</script>

<style scoped>

.bgcolorPicker {
  margin-top: 0;
  font-size: 0.875em;
  text-align: center;
  display: inline-table;
  table-layout:auto;
  width: 100%;
  max-width: 20em;
  background: #fff;
  padding: 2px;
  border-radius: 0.35em;
  box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.15);
}
.bgcolorPicker label {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;
  display: table-cell;
  cursor: pointer;
  vertical-align: middle;
  padding: 0.5em 1em;
  text-transform: capitalize;
  letter-spacing: -0.5em;
  color: transparent;
  opacity: 1;
  width: 1%;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(0, 0, 0, 0.1)
  );
}
.bgcolorPicker label.black {
  background-color: #000000;
  -webkit-tap-highlight-color: #000000;
}
.bgcolorPicker label.white {
  background-color: #ffffff;
  -webkit-tap-highlight-color: #ffffff;
}
.bgcolorPicker label.red {
  background-color: #ff3e05;
  -webkit-tap-highlight-color: #ff3e05;
}
.bgcolorPicker label.orange {
  background-color: #ff8d05;
  -webkit-tap-highlight-color: #ff8d05;
}
.bgcolorPicker label.yellow {
  background-color: #ecca05;
  -webkit-tap-highlight-color: #ecca05;
}
.bgcolorPicker label.green {
  background-color: #40af04;
  -webkit-tap-highlight-color: #40af04;
}
.bgcolorPicker label.blue {
  background-color: #057fff;
  -webkit-tap-highlight-color: #057fff;
}
.bgcolorPicker label.pink {
  background-color: #FF69B4;
  -webkit-tap-highlight-color: #FF69B4;
}
.bgcolorPicker label.violet {
  background-color: #cc6fcc;
  -webkit-tap-highlight-color: #cc6fcc;
}
.bgcolorPicker label:first-of-type {
  border-radius: 0.25em 0 0 0.25em;
}
.bgcolorPicker label:last-of-type {
  border-radius: 0 0.25em 0.25em 0;
}
.bgcolorPicker label:hover {
  opacity: 1;
  color: #fff;
  letter-spacing: normal;
}
.bgcolorPicker input {
  display: none;
}
.bgcolorPicker input:checked + label {
  width: 90%;
  opacity: 1;
  color: rgb(255, 255, 255);
  letter-spacing: normal;
}

.bgcolorPicker label.white:hover {
  opacity: 1;
  color: rgb(27, 27, 27);
  letter-spacing: normal;
}
.bgcolorPicker input:checked + label.white {
  width: 90%;
  opacity: 1;
  color: rgb(27, 27, 27);
  letter-spacing: normal;
}
</style>
