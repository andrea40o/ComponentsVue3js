<script setup>
    import {useRoute, useRouter} from 'vue-router';
    import { useGetData } from '../composables/getData';
    import { useFavoritosStore } from '@/store/favoritos';
    import { storeToRefs } from 'pinia';

    const route=useRoute();
    const router=useRouter();
    const useFavoritos=useFavoritosStore();

    const {add}=useFavoritos;
    const {findPoke}=useFavoritos;

    const funcionPoke=()=>{
        router.push('/pokemons')
    }

    const{data, getData, loading,error}=useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>
<template>
  <br>
  <p v-if="loading">Cargando Información</p>
  <div class="alert alert-danger" v-if="error">{{error}}</div>
  <div v-if="data">
     <img :src="data?.sprites?.front_default" alt="">
     <br>
    <h1>Poke Name:  {{$route.params.name}}</h1>
    <br>
    <button :disabled="findPoke(data.name)" class="btn btn-warning mb-2" @click="add(data)">Agregar a Favoritos</button>
    </div>
      <h1 v-else>No existe el Pokemon</h1>
    <button class="btn btn-primary mb-2" type="button" @click="funcionPoke">Volver
    </button>
    <br>
      <div>
        <br>
            <br>
     <div v-if="data">
    
    <h2>Habilidades:</h2>
    <ul>
      <li v-for="ability in data.abilities">
        {{ ability.ability.name }}
      </li>
    </ul>
  </div>
  </div>
<br>
  <div>
    <div v-if="data">
    <div class="container"></div>
    <h2>Estadísticas:</h2>
    
    <div v-for="stat in data.stats" >
      <p>{{ stat.stat.name }}: {{ stat.base_stat }}</p>
      <div class="stat-bar">
        <div class="bar" :style="{ width: stat.base_stat + '%' }"></div>
      </div>
      </div>
      <br>
    </div>
  </div>
</template>

<style>
.stat-bar {
  height: 20px;
  background-color: #ccc;
}

.bar {
  height: 100%;
  background-color: #3498db;
}
</style>