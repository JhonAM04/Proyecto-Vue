<template> 
    <main class="bg-[hsl(217,28%,15%)] text-[hsl(0,0%,100%)] font-['Open_Sans'] w-full h-screen">
        <section class="w-full h-full pt-30">
            <div class="flex flex-col md:flex-row justify-center items-center gap-5 " v-if="Product">
                <img :src="Product.thumbnail" />
                <div class="flex flex-col items-center md:w-200 gap-5 text-center">
                    <h1 class="font-bold text-3xl">{{  Product.title }}</h1>
                    <p class="w-80 md:w-full">{{ Product.description }}</p>
                    <p>Price: ${{ Product.price }}</p>
                    <button class="bg-[hsl(176,48%,55%)] p-4 w-60 rounded-[60px] font-bold">Comprar</button>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import useDummyApi from '../api/dummyjson'

    const route = useRoute()
    const { getOneProduct } = useDummyApi()
    const id = route.params.id
    const Product = ref({})

    const getProduct = async(id) => {
        const data = await getOneProduct(id)
        Product.value = data
    }

    onMounted(() => {
        getProduct(id)
    })
</script>