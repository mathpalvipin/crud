<template>
   <div class="colorPicker">
    <input
      class="black"
      type="radio"
      name="hat-color"
      ref="black"
      id="hat-color-black"
      @click = "color('black')"
      :checked ="colorCheck == 'black'"
    />
    <label class="black" for="hat-color-black">black</label>
    <input
      class="white"
      type="radio"
      name="hat-color"
      ref="white"
      id="hat-color-white"
      @click = "color('white')"
      :checked ="colorCheck == 'white'"

    />
    <label class="white" for="hat-color-white">white</label>
    <input
      class="red"
      type="radio"
      name="hat-color"
      ref="red"
      id="hat-color-red"
      @click = "color('red')"
      :checked ="colorCheck == 'red'"

    />
    <label class="red" for="hat-color-red">red</label>
    <input
      class="orange"
      type="radio"
      name="hat-color"
      ref="orange"
      id="hat-color-orange"
      @click = "color('orange')"
      :checked ="colorCheck == 'orange'"
    />
    <label class="orange" for="hat-color-orange">orange</label>
    <input
      class="yellow"
      type="radio"
      name="hat-color"
      ref="yellow"
      id="hat-color-yellow"
      @click = "color('yellow')"
      :checked ="colorCheck == 'yellow'"
    />
    <label class="yellow" for="hat-color-yellow">yellow</label>
    <input
      class="green"
      type="radio"
      name="hat-color"
      ref="green"
      id="hat-color-green"
      @click = "color('green')"
      :checked ="colorCheck == 'green'"
    />
    <label class="green" for="hat-color-green">green</label>
    <input
      class="blue"
      type="radio"
      name="hat-color"
      ref="blue"
      id="hat-color-blue"
      @click = "color('dodgerblue')"
      :checked ="colorCheck == 'dodgerblue'"
    />
    <label class="blue" for="hat-color-blue">blue</label>
    <input
      class="pink"
      type="radio"
      name="hat-color"
      ref="pink"
      id="hat-color-pink"
      @click = "color('hotpink')"
      :checked ="colorCheck == 'hotpink'"

    />
    <label class="pink" for="hat-color-pink">pink</label>
    <input
      class="violet"
      type="radio"
      name="hat-color"
      ref="violet"
      id="hat-color-violet"
      @click = "color('violet')"
      :checked ="colorCheck == 'violet'"

    />
    <label class="violet" for="hat-color-violet">violet</label>
  </div>
</template>

<script>
export default {
emits: ['picked-objcolor'],
props: ['colorName'],

data(){
    return{
      colorCheck: this.colorName
    }
},

methods:{
    color(value){
      this.$emit('picked-objcolor', value);
    },
}
};
</script>

<style scoped>

.colorPicker {
  margin-top: 0;
  font-size: 0.875em;
  text-align: center;
  display: inline-table;
  table-layout:auto;
  width: 100%;
   max-width: 10vw;
  background: #fff;
  padding: 2px;
  border-radius: 0.35em;
  box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.15);
}
.colorPicker label {
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
.colorPicker label.black {
  background-color: #000000;
  -webkit-tap-highlight-color: #000000;
}
.colorPicker label.white {
  background-color: #ffffff;
  -webkit-tap-highlight-color: #ffffff;
}
.colorPicker label.red {
  background-color: #ff3e05;
  -webkit-tap-highlight-color: #ff3e05;
}
.colorPicker label.orange {
  background-color: #ff8d05;
  -webkit-tap-highlight-color: #ff8d05;
}
.colorPicker label.yellow {
  background-color: #ecca05;
  -webkit-tap-highlight-color: #ecca05;
}
.colorPicker label.green {
  background-color: #40af04;
  -webkit-tap-highlight-color: #40af04;
}
.colorPicker label.blue {
  background-color: #057fff;
  -webkit-tap-highlight-color: #057fff;
}
.colorPicker label.pink {
  background-color: #FF69B4;
  -webkit-tap-highlight-color: #FF69B4;
}
.colorPicker label.violet {
  background-color: #cc6fcc;
  -webkit-tap-highlight-color: #cc6fcc;
}
.colorPicker label:first-of-type {
  border-radius: 0.25em 0 0 0.25em;
}
.colorPicker label:last-of-type {
  border-radius: 0 0.25em 0.25em 0;
}
.colorPicker label:hover {
  opacity: 1;
  color: #fff;
  letter-spacing: normal;
}
.colorPicker input {
  display: none;
}
.colorPicker input:checked + label {
  /* width: 90%; */
  opacity: 1;
  color: rgb(255, 255, 255);
  letter-spacing: normal;
}

.colorPicker label.white:hover {
  opacity: 1;
  color: rgb(27, 27, 27);
  letter-spacing: normal;
}
.colorPicker input:checked + label.white {
  /* width: 90%; */
  opacity: 1;
  color: rgb(27, 27, 27);
  letter-spacing: normal;
}
</style>
