<script setup>
import {ref,computed, onMounted} from 'vue';

import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';
import PaginatePost from './components/PaginatePost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

const posts=ref([

]
)
const siguiente=ref(0);

const maxlenght=computed(()=>{

return posts.value.length;
  

})

const loading=ref(true);

const favorito= ref('');

const cambiarFavorito= (title) => {

  favorito.value=title;
}
const postPage=10;
const inicio=ref(0);
const fin=ref(postPage);

const nexts=()=>{

   inicio.value=inicio.value+postPage;//0+10=10--20
   fin.value=fin.value+postPage;//10+10=20--20+10=30
}

const previous=()=>{

   inicio.value=inicio.value-postPage;//
   fin.value=fin.value-postPage;//
}

onMounted(async()=>{
loading.value=true;
try {
  const rest= await fetch("https://jsonplaceholder.typicode.com/posts")
  posts.value=await rest.json();
  
} catch (error) {
  console.log(error);
}finally{
  setTimeout(() => {
      loading.value=false;
  }, 2000);
}

})

/*fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      posts.value=data;})
    .catch(e => console.log(e))
    .finally(()=>{
      loading.value=false;
    },2000)*/


</script>

<template>


  <LoadingSpinner v-if="loading" class="d-flex justify-content-center"  ></LoadingSpinner>
  <div class="container" v-else="" >
  <div class="row">
  <div class="col-20">
     <div class="justify-content-center" style="height: 200vh;">
  <h1>APP</h1>
  <h2>Mis Posts favoritos: {{ favorito  }} </h2>
  <PaginatePost class="mb-2"
  @nexts='nexts' @previous='previous' :inicio="inicio" :fin="fin" :maxlenght="maxlenght"
  ></PaginatePost>
  <BlogPost v-for="post in posts.slice(inicio,fin)"
  :key="post.id"
  :title="post.title" 
  :id="post.id"
  :body="post.body"
  @cambiarFavorito="cambiarFavorito"
  class="mb-2"></BlogPost>
  </div>
  </div>
  </div>
  </div>



</template>