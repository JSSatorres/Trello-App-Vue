<template>
  <footer>
    <span> with <a href="//vuejs.org">Vue.js</a></span>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="css" scoped>
footer {
  box-sizing: border-box;
  background-color: rgb(61, 38, 83);
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  color: rgb(160, 204, 204);
}
a {
  text-decoration: none;
  color: aliceblue;
}
a:hover {
  color: rgb(214, 169, 22);
}
</style>
