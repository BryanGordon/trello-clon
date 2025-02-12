<script setup>
  import { ref } from 'vue'
import TaskList from './TaskList.vue';

  defineProps({
    listId: String,
    name: String
  })

  const tasksList = ref([
    {
      id: '1', title: 'Aprender Vue', completed: false
    },
    {
      id: '2', title: 'Hacer mas proyectos de Vue', completed: false
    }
  ])
</script>

<template>
  <section>
    <header>
      <h1>{{ name }}</h1>
    </header>
    <TaskList
      :listId="listId"
      :tasks="tasksList"
    >

    </TaskList>  
  </section>
</template>

<style scoped>
  section {
    box-sizing: border-box;
    background-color: #eceff1;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03)
      0 2px 5px 0 rgba(49, 49, 93, .1)
      0 1px 2px 0 rgba( 0, 0, 0, .08)
    ;
    margin: 1rem;
    padding: 1rem;
    width: 100%;
  }

  header {
    color: #37474f;
    margin: 0;
    padding-bottom: 1rem;
  }

  h1 {
    margin: 0;
  }

  @media screen and (min-width: 600px) {
    section {
      width: calc(50% - 2rem - 2px);
    }
  }

  @media screen and (min-width: 1024px) {
    section {
      width: calc(33% - 2rem - 2px);
    }
  }

  @media screen and (min-width: 1200px) {
    section {
      width: calc(25% - 2rem - 2px);
    }
  }
</style>