<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos=useFavoritosStore();

const {favoritos}=storeToRefs(useFavoritos);
const {remove}=useFavoritos;
</script>

<template>
<h1>Favoritos</h1>
<h1 v-if="favoritos.length ===0">Sin Favoritos</h1>
<ul class="list-group" v-else>
<li class="list-group-item"  v-for="poke in favoritos" :key="poke.id">
      <router-link class="btn btn-warning me-2" :to="`/pokemons/${poke.name}`">Más información</router-link>
    <button class="btn btn-danger" @click="remove(poke.id)">Eliminar</button>
<img :src="poke.sprites.front_default"  />
{{poke.name}}</li>
</ul>
</template>