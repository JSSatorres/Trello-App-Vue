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
  margin: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  color: rgb(160, 204, 204);
}

a {
  margin: 0px 0 0 12px;
  text-decoration: none;
  color: aliceblue;
  font-size: 20px;
}
a:hover {
  color: rgb(214, 169, 22);
}
a:focus {
  color: rgb(44, 214, 22);
}
</style>
