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
        :position="index"
        :name="board"
        @handelDeleteBoard="deleteBoard()"
      />
    </div>
    <!-- <ul v-if="getAllBoard !== []"> -->
    <button v-on:click="AllBoard">obtener boards</button>
    <ul v-for="(board, index) of getBoard" :key="index">
      <li>{{ board }}</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
// import { mapGetters, mapMutations, mapActions, mapState } from 'vuex'
import BoardCard from '@/components/BoardCard.vue'
// import store from '../store'

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
  computed: {
    ...mapGetters(['getBoard'])
    // ...mapState(['boards'])
  },
  methods: {
    ...mapMutations(['addBoard', 'deleteBoard']),
    ...mapActions(['AllBoard']),
    add() {
      this.$store.commit('addBoard', this.boardName)
      this.boardName = ''
    },
    deleteBoard(indexBoard) {
      this.$store.commit('deleteBoard', indexBoard)
    }
  }
}
</script>
<style scoped>
.containerHome {
  height: 84vh;
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
</style>
