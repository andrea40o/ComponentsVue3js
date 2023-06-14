<script setup>

 defineProps(["inicio","fin", "maxlenght"]);
const emit=defineEmits(['nexts', 'previous']);

</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button @click= "emit('previous')" type="button" :disabled="inicio===0" class="btn btn-outline-primary">Previous {{inicio}}</button>
        <button @click="emit('nexts')" type="button" :disabled="fin>=maxlenght" class="btn btn-outline-primary">Next {{fin}}</button>
    </div>

</template>


<style>

</style>