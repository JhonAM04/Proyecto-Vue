<template> 
    <main class="bg-[hsl(217,28%,15%)] text-[hsl(0,0%,100%)] font-['Open_Sans']">
        <section class="flex flex-wrap w-full h-full gap-4 justify-center pt-30 pb-10">
            <ProductCard v-for="product in productslist" :key="product.id" :product="product">
            </ProductCard>
        </section>
    </main>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import useDummyApi from '../api/dummyjson'
    import ProductCard from '../components/ProductCard.vue'
    const { getProducts } = useDummyApi()
    const productslist = ref([])

    const products = async() => {
        const data =  await getProducts()
        productslist.value = data.products
    }

    onMounted(() => {
        products()
    })

</script>