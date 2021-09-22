<template>
    <input
    @input="change"
    @change="release"
    v-model = "value"
    class="range-style"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    />
</template>

<script>
export default {

emits: ['change-value','release-value'],
props: ['min','max','steps','default'],

data(){
    return{
       value: this.default,
    }
},

methods:{
  change(){
    this.$emit('change-value',this.value)
  },
  release(){
    this.$emit('release-value',this.value)
  }
}

}
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
input[type="range"]::-moz-range-thumb {
  border: none;
}

.range-style {
  margin-top: 0;
  width: 300px;
  height: 10px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: -2px -2px 8px rgb(119, 119, 119), 2px 2px 8px rgba(0, 0, 0, 0.5);
  background: #e0e0e0;
}
.range-style::-webkit-slider-runnable-track {
  display: flex;
  align-items: center;
  height: 10px;
  border-radius: 10px;
  box-shadow: inset -2px -2px 8px white, inset 2px 2px 8px rgba(0, 0, 0, 0.5);
}
.range-style::-webkit-slider-thumb {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: -1px -1px 2px white, 1px 1px 2px rgba(0, 0, 0, 0.3);
  background-color: #e0e0e0;
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}
.range-style::-moz-range-track {
  display: flex;
  align-items: center;
  height: 20px;
  border-radius: 10px;
  box-shadow: inset -2px -2px 8px white, inset 2px 2px 8px rgba(0, 0, 0, 0.5);
}
.range-style::-moz-range-thumb {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: -1px -1px 2px white, 1px 1px 2px rgba(0, 0, 0, 0.3);
  background-color: #e0e0e0;
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}
</style>