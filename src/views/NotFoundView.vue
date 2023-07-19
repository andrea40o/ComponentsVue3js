<script setup>
    import {useRoute, useRouter} from 'vue-router';

    const router=useRouter();

    const funcionPoke=()=>{
    router.push('/')
    };

</script>
<template>
<button @click="funcionPoke">Volver</button>
<h1>404</h1>
</template>