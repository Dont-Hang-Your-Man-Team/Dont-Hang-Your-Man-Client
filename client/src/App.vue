<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <router-link to="/about">About</router-link> |
      <router-link to="/end">Game End</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getRooms')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://cameronscookware.com/wp-content/uploads/2019/12/graph-paper-wallpaper-best-of-1000-images-about-paper-refs-on-pinterest-2019-of-graph-paper-wallpaper.gif");

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
