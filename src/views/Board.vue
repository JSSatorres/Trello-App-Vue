<template>
  <section>
    <h3><span>My Boards</span> ▸ {{ name }}</h3>
    <!-- v-model="listName" -->
    <input
      type="text"
      placeholder="Add a list..."
      v-model="listName"
      @keyup.enter="add()"
    />
    <input
      type="text"
      placeholder="Add a list..."
      v-model="listName"
      @keyup.enter="add()"
    />
    <!-- <template v-if="fetchingData">
      <span>Loading...</span>
    </template> -->
    <div class="container">
      <ColumnList
        v-for="(list, index) in boardLists"
        :key="index"
        :listId="list.id"
        :name="list.name"
      ></ColumnList>
    </div>
  </section>
</template>

<script>
/* import { mapState, mapGetters, mapActions } from 'vuex' */

import ColumnList from '../components/ColumnList.vue'

export default {
  name: 'board',
  components: { ColumnList },
  props: {
    name: String,
    id: String
  },
  // data() {
  //   return {
  //     listName: ''
  //   }
  // },
  data() {
    return {
      listName: ''
    }
  },
  // computed: {
  //   ...mapState(['fetchingData', 'error']),
  //   ...mapGetters(['getListsByBoard']),
  //   boardLists() {
  //     return this.getListsByBoard(this.id)
  //   }
  // },
  methods: {
    //   ...mapActions(['addColumn', 'fetchLists']),
    add() {
      // this.addColumn({ board: this.id, name: this.listName })
      // this.listName = ''
      this.boardLists.push({ name: this.listName })
      this.listName = ''
    }
  }
  // created() {
  //   this.fetchLists({ board: this.id })
  // }
}
</script>

<style scoped>
h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;
}
h3 span {
  color: #546e7a;
}
section {
  text-align: left;
}
.container {
  box-sizing: border-box;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
input {
  background-color: #607d8b;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  color: #607d8b;
  font-size: 1.2rem;
  margin: 0 1rem;
  outline: 0;
  padding: 1rem;
  transition: all 600ms ease;
}
input:active,
input:focus {
  background-color: #fafafa;
}
input::placeholder {
  color: #fafafa;
}
</style>
