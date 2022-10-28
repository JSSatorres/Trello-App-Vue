<template>
  <!-- // TODO: look for parametres -->
  <div class="container">
    <router-link
      class="board-card"
      :to="{ name: 'board', params: { name, id } }"
    >
      <span class="board-card-title">❏ {{ name }}</span>
    </router-link>
    <button @click="handleDelete">X</button>
  </div>
</template>

<script>
export default {
  name: 'BoardCard',
  props: {
    id: String,
    name: String,
    position: Number
  },
  methods: {
    handleDelete() {
      this.$emit('handelDeleteBoard', this.position)
      console.log(this.position)
    },
    handleDeleteAll() {
      this.$emit('handelDeleteBoard', this.position)
      console.log(this.position)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 70px;
}
.board-card {
  background-color: #546e7a;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 5px;
  color: #fafafa;
  margin: 0.5rem 1.5rem;
  padding: 1rem;
  text-align: left;
  text-decoration: none;
  transition: all 600ms ease;
  width: 100%;
  height: 100px;
}
.board-card-title {
  font-size: 1.2rem;
}
.board-card-title:hover {
  background-color: #90a4ae;
  font-weight: bold;
}
button {
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  color: white;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
}
button:hover {
  background-color: white;
  color: #546e7a;
}
button:active {
  background-color: rgb(112, 202, 124);
  color: #546e7a;
}
</style>
