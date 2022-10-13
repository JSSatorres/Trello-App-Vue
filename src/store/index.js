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
    getBoard(state, allBoard) {
      return state.boards
    }
  },
  actions: {
    getAllBoard: async context => {
      const data = await fetch('http://localhost:3000/todos')
      const allBoard = await data.json()
      context.commit('getAllBoards', allBoard)
    }
  },
  mutations: {
    addBoard(state, Board) {
      state.boards.push(Board)
    },
    deleteBoard(state, boardIndex) {
      state.boards.splice(boardIndex, 1)
    },
    getAllBoards(state, allBoard) {
      state.boards = allBoard
    }
  }
})
