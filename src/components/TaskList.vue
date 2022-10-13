<template>
  <section>
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ completed: task.completed }"
      >
        {{ task.title }}
      </li>
      <input
        v-model="title"
        type="text"
        placeholder="añade nueva tarea"
        @keyup.enter="add()"
      />
    </ul>
    <button @click="increment">
      {{ doneTodosCount }}
    </button>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TaskList',
  props: {
    listId: String,
    tasks: Array
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
    ...mapGetters(['doneTodosCount'])
  },
  methods: {
    add() {
      // TODO: añadir emit
      console.log('entra')
    },
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  background-color: #fafafa;
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  margin: 0.25rem 0;
  padding: 1rem;
}
li.completed {
  background-color: #cfd8dc;
  color: #90a4ae;
}

input {
  box-sizing: border-box;
  background-color: #eceff1;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  margin: 0.5rem;
  outline: 0;
  padding: 0.75rem 0;
  transition: background-color 600ms ease;
  width: 100%;
}
input:focus,
input:active {
  background-color: #fafafa;
  border-bottom: 1px solid #ccc;
  margin: 0.25rem 0;
  padding: 1rem;
}
input::placeholder {
  color: #90a4ae;
}
</style>
