<template>
  <router-view/>
</template>

<script>
export default {
 created() {
    this.$store.dispatch('tryLogin');
  }
}
</script>




<style>
   @import url("/assets/css/animate.css"); 
    @import url("/assets/css/LineIcons.2.0.css");
  @import url("/assets/css/default.css"); 
  @import url("/assets/css/style.css"); 

li a {
    text-decoration: none;
}
a {
    text-decoration: none;
}


#nav a.router-link-exact-active {
  color: #42b983;
}


/scrollbar settings/
*{
  scrollbar-width: thin;
 }

*::-webkit-scrollbar {
  width: 10px;
}

@media only screen and (max-width: 600px) {
*::-webkit-scrollbar {
  width: 0px;
}
}

/* Track */
*::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>

