<template>
  <header>
    <span class="title">Vue Trello</span>
    <router-link class="btn-header" to="/">My Boards</router-link>
  </header>
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
</style>
