<template lang="pug">
  #app
    #nav
      router-link( to="/") Home
      span 
        |
        | |
        |
      router-link( to="/about") About 
    router-view
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

section,
div {
  display: block;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
