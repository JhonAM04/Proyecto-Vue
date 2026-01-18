<template>
    <div class="fixed flex items-center justify-between w-full p-5">
        <img :src="icon" class="" />

        <div>
            <RouterLink to="/" class="mr-5 text-white font-bold">Home</RouterLink>
            <RouterLink to="/products" class="mr-5 text-white font-bold">Products</RouterLink>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import icon from '../assets/images/logo.svg'
</script>