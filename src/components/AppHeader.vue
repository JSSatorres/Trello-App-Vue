<template>
  <header>
    <span class="title">Vue Trello</span>
    <router-link class="btn-header" to="/">My Boards</router-link>
    <h4> delete</h4>
  </header>
  <!-- //TODO: delete  -->
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style scoped>
header {
  box-sizing: border-box;
  background-color: rgb(61, 38, 83);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 1rem;
}
.title {
  font-size: 20px;
  text-align: center;
}
a {
  margin: 0px 0 0 12px;
  text-decoration: none;
  font-size: 20px;
  color: rgb(99, 202, 104);
}
a:hover {
  color: rgb(214, 169, 22);
}
a:focus {
  color: rgb(44, 214, 22);
}
</style>
