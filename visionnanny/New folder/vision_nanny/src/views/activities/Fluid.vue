<template>

  <canvas></canvas>
<div class="back">
           <router-link to="/activities">
            <div class="single_form text-center">
              <base-button>Back</base-button>
            </div>
          </router-link>
         </div>
</template>

<script>
import fluid from "@/scripts/fluid.js";

export default {
  mixins: [fluid],

  mounted() {
    this.fluid();

  },

  beforeUnmount() {
    this.newgui.destroy()
  }
};
</script>

<style scoped>
canvas {
  height: 100vh;
  width: 100vw;
  z-index: 0;
}

.back {
  position: fixed;
  z-index:10;
  bottom:50px;
  right:0px;
  width:200px;
}
</style>
