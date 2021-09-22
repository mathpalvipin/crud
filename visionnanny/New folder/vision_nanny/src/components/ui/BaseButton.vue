<template>
  <button class="main-btn" onclick="this.blur();" v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
/* 
button  {
   outline: none !important;
   box-shadow: none !important;
}

button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #242424;
  border: 1px solid #242424;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #000000;
  border-color: #000000;
}

.flat {
  background-color: transparent;
  color: #242424;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #000000;
  color: #000000;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
} */
</style>