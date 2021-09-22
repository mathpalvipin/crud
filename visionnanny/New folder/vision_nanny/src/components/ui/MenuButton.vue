<template>
  <button @click="route">{{ text }}</button>
</template>

<script>
export default {
  props: ['text','topage'],
  methods: {
   route(){
      this.$router.push(this.topage)
   }

  }
};
</script>

<style scoped>
button {
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
  width: 60%; 
  height: 50px;
 }
button:hover{
      text-decoration: none;
      color:orange;
}
</style>
