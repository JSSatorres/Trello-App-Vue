<template>
  <div class="containerHome">
    <h3>My panels</h3>
    <div class="boards-collections">
      <input
        type="text"
        placeholder="Add new panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <BoardCard
        v-for="(board, index) in getBoard"
        :key="index"
        :name="board.name"
        @handelDeleteBoard="deleteBoard()"
        :id="board.id"
        :position="index"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
// import { mapGetters, mapMutations, mapActions, mapState } from 'vuex'
import BoardCard from '@/components/BoardCard.vue'
import store from '../store'

export default {
  name: 'home-view',
  components: { BoardCard },
  data() {
    return {
      boardName: ''
    }
  },
  created() {
    this.AllBoard()
  },
  created1() {
    this.AllBoard()
  },
  computed: {
    ...mapGetters(['getBoard'])
  },
  methods: {
    ...mapMutations(['addBoard', 'deleteBoard']),
    ...mapActions(['AllBoard']),
    add() {
      store.commit('addBoard', this.boardName)
      this.boardName = ''
    },
    deleteBoard(indexBoard) {
      store.commit('deleteBoard', indexBoard)
    }
  }
}
</script>
<style scoped>
.containerHome {
  height: 76vh;
}
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
button {
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
}
button:focus,
button:active {
  background-color: white;
  color: #546e7a;
}
button::placeholder {
  color: white;
}
</style>
