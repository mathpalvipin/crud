<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/activities">Activities</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/score">Scoring</router-link>
        </li>
        <li>
          <router-link to="/feedback">Feedback</router-link>
        </li>
        <li>
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  border-radius: 2px;
  height: 70px;
  background-color: rgba(226, 226, 226,1);
  position: relative;
  top: 30px;
  width: 90%;
  left: 50%;
}

header a {
  text-decoration: none;
  color: #000000;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 2px solid #058a05;
}

header nav {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>