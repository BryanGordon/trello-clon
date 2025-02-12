<script setup>
import { ref } from 'vue'


  defineProps({
    listId: String,
    tasks: Array
  })

  const title = ref("")

  const add = () => {

  }
</script>

<template>
  <ul>
    <li v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
    >
      {{ task.title }}
    </li>
    <input 
      type="text"
      placeholder="Agregar una nueva tarea"
      v-model="title"
      @keyup.enter="add"
    >
  </ul>
</template>

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

    & .completed {
      background-color: #cfd8dc;
      color: #90a4ae;
    }
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
    transition: background-color 6000ms ease;
    width: 100%;
  }

  input:focus, input:active {
    background-color: #fafafa;
  }
</style>