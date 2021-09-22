<template>
  <div>
    <div id="my-animation"></div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import json from '../assets/lottie.json'

export default {
  name: "HelloWorld",
  props: ["loading"],
  mounted() {
    lottie.loadAnimation({
      container: document.getElementById("my-animation"),
      loop: true,
      autoplay: true,
      renderer: 'svg',
      animationData: json 
    });
    
  }
};
</script>

<style scoped>
#my-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
}

</style>
