<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import Planet from './components/Planet/Planet.vue'
import planetas from './utilities/data'

import { ref } from 'vue';

const planet =ref(null);
planet.value = planetas.planetas[0]

const searchPlanet = (planetSelected) => {
  const planetaEncontrado = planetas.planetas.find(planeta => planeta.id === planetSelected);
  planet.value = planetaEncontrado

}

</script>

<template>
  <Navbar @change="(planetSelected) => searchPlanet(planetSelected)"/>
  <Planet :planet="planet"/>
</template>
