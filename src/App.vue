<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
  <div class="container-fluid">
   <router-link class="navbar-brand" to="/" >
      <img src="@/assets/logo.svg" alt="Bootstrap" width="30" height="24">
      PokeApi  
    </router-link>
    <div>
      <router-link class="btn btn-outline-success me-2" to="/">Home</router-link>
      <router-link class="btn btn-outline-success me-2"  to="/pokemons">Pokemones</router-link>
      <router-link class="btn btn-outline-success me-2" to="/favoritos">Favoritos</router-link>
  </div>
  </div>
</nav>
<div class="container text-center">
  <RouterView />
</div>
</template>

