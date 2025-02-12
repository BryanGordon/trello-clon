<script setup>
  import { ref } from 'vue'
import Column from './Column.vue';

  defineProps({
    name: String,
    id: String
  })

  const listName = ref("")
  const boardList = ref([
    {
      id: '1',
      name: 'Todo'
    },
    {
      id: '2',
      name: 'Doing'
    },
    {
      id: '3',
      name: 'Done'
    }
  ])

  const add = () => {
    boardList.value.push({ name: listName.value })
  }

</script>

<template>
  <section>
    <h1><span>Mis paneles</span> -> {{ name }}</h1>
    <input 
      type="text"
      placeholder="Agregar lista"
      v-model="listName"
      @keyup.enter="add"
      >

    <Column
      v-for="(list, index) in boardList"
      :key="index"
      :listId="list.id"
      :name="list.name"
    >
      
    </Column>
  </section>
  
  <div class="container">

  </div>
</template>

<style scoped>
  section {
    text-align: left;
  }

  h1 {
    color: #37474f;
    text-align: left;
    margin: 1.5rem;
  }

  span {
    color: #546e7a;
  }

  input {
    background-color: #607d8b;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03)
      0 2px 5px 0 rgba(49, 49, 93, .1)
      0 1px 2px 0 rgba(0, 0, 0, .08)
    ;
    color: #607d8b;
    font-size: 1.2rem;
    margin: 0 1rem;
    outline: 0;
    padding: 1rem;
    transition: all 600ms ease;
  }

  input:active, input:focus {
    background-color: #fafafa;
  }
</style>