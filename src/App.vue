<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import Planet from './components/Planet/Planet.vue'
import planetas from './utilities/data'

import { ref } from 'vue';

const planet =ref(null);
planet.value = planetas.planetas[0]


</script>

<template>
  <Navbar/>
  <Planet :planet="planet"/>
</template>
