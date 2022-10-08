<template>
  <div>
    <h3>Mis paneles</h3>
    <div class="boards-collections">
      <input
        type="text"
        placeholder="Add new panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <BoardCard
        v-for="board in boards"
        :key="board.id"
        :name="board.name"
        :id="board.id"
      />
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard.vue'
export default {
  name: 'home-view',
  components: { BoardCard },
  data() {
    return {
      boardName: '',
      boards: [
        {
          id: '1',
          name: 'tareas'
        },
        {
          id: '2',
          name: 'lista de la compra'
        }
      ]
    }
  },
  methods: {
    add() {
      this.boards.push({ name: this.boardName })
    }
  }
}
</script>
<style scoped>
h3 {
  text-align: left;
  margin: 1.5rem;
}
.boards-collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
}
input {
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
}
input:focus,
input:active {
  background-color: white;
  color: #546e7a;
}
input::placeholder {
  color: white;
}
</style>
