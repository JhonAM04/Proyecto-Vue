<template>
    <RouterLink :to="`/product/${product.id}`">
        <div class="md:w-150 w-90 border-2 p-2 flex flex-col items-center">
            <h2 class="font-bold text-2xl">{{ product.title }}</h2>
            <img :src="product.thumbnail" class="size-80"/>
            <p class="font-bold text-lg mt-2 bg-[#5acec6d3] p-2 rounded-[20px]">${{ product.price }}</p>
        </div>
    </RouterLink>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    defineProps({
        product: {
            type: Object,
            required: true
        }
    })
</script>