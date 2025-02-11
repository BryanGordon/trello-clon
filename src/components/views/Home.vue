<script setup>
import { reactive, ref } from 'vue'
import BoardCard from './BoardCard.vue';

const boardName = ref("")
const boards = ref([
  {
    id: '1',
    name: 'Tareas'
  },
  {
    id: '2',
    name: 'Lista de la compra'
  }
])

const add = () => {
  boards.value.push({name: boardName.value})
}

</script>

<template>
  <div>
    <h1>Mis paneles</h1>
    <div class="boards-collection">
      <input 
        type="text"
        placeholder="Agregar nuevo panel"
        v-model="boardName"
        @keyup.enter="add"
      >
      <BoardCard 
        v-for="(board, index) in boards"
        :key = "index"
        :name = "board.name"
      >

      </BoardCard>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
    margin: 1.5rem;
  }

  .boards-collection {
    display: flex;
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

  input:focus

  input:active {
    background-color: whitesmoke;
    color: #546e7a;
  }

  input::placeholder {
    color: whitesmoke;
  }

</style>