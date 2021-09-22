<template>
  <section class="model">
  <div class="checkbox">
    <input type="checkbox"
    @change="change"
    />
    <label></label>
  </div>
</section>
</template>

<script>
export default {
emits: ['change-made'],

methods:{
  change(){
    this.$emit('change-made')
  }
}


}
</script>

<style scoped>

section {
  display: inline-block;
  min-width: 150px;
  width: 33.33%;
  margin: 0%;
  padding:0%;
 }

.checkbox {
  position: relative;
  display: inline-block;
 
}

.checkbox label {
  width: 90px;
  height: 27px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.4s;
}
.checkbox label:after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  left: 0;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.4s;
}
.checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}
.checkbox::-webkit-slider-runnable-track {
  display: flex;
  align-items: center;
  height: 10px;
  border-radius: 10px;
  box-shadow: inset -2px -2px 8px white, inset 2px 2px 8px rgba(0, 0, 0, 0.5);
}
.checkbox input:hover + label:after {
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
}
.checkbox input:checked + label:after {
  left: 40px;
}

.model .checkbox label {
  width: 75px;
 
}
.model .checkbox label:after {
   width: 27px;
  height: 27px;
}
.model .checkbox input:checked + label {
  background: #4BD865;
}
.model .checkbox input:checked + label:after {
  left: 50px;
}

</style>
