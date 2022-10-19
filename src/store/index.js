import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    boardLists: [],
    boards: []
  },
  getters: {
    getDoneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
    getDoneTodosCount(state, getters) {
      return getters.doneTodos.length
    },
    getBoarlist(state) {
      return state.boardLists
    },
    getTodoList(state) {
      return state.todos
    },
    getBoard(state) {
      return state.boards
    }
  },
  mutations: {
    addBoard(state, newBoard) {
      state.boards.push(newBoard)
    },
    deleteBoard(state, boardIndex) {
      state.boards.splice(boardIndex, 1)
    },
    getAllBoards(state, allBoard) {
      state.boards = allBoard
    }
  },
  actions: {
    async AllBoard({commit}) {
      console.log('entro')
      const data = await fetch('http://localhost:3000/todos')
      const allBoard = await data.json()
      commit('getAllBoards', allBoard)
    }
  }
})
