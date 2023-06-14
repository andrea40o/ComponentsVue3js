<script setup>
//const props=defineProps(['title', 'id', 'body']);
//console.log(props.id);

defineProps({
    title:String,
    id:Number,
    body:
        {
            type:String,
            default:'Sin descripcion',
        },

});

const emit=defineEmits(['cambiarFavorito']);
</script>

<template>
<div class="card p-10">
    <div class="card-body p-10">
         <div class="row">
            <div class="col-sm-20">
        <h5 class="card-title">{{id}} - {{title}}</h5>
            <p>
                {{body}}
            </p>
            <button @click="$emit('cambiarFavorito', title)" class="btn btn-outline-primary">Favorito</button>
       </div>
        </div>     
    </div>

</div>

</template>

<style>

</style>