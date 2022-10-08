<template>
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
</template>

<script>
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
  methods: {
    add() {
      // TODO: añadir emit
      console.log('entra')
    }
  }
}
</script>

<style scoped></style>
