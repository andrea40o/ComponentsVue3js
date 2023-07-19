<script setup>
import{useCounterStore} from "@/store/counter.js"
const useCounter=useCounterStore();
</script>

<template>
<h1>Home Counter: {{useCounter.count}}</h1>
<h1>Double {{useCounter.double}}</h1>
<button class="btn btn-primary" @click="useCounter.increment">Incrementar</button>
</template>
