const useDummyApi = () => {

    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        return data
    }

    const getOneProduct = async (id) => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        return data
    }

    return {
        getProducts, getOneProduct
    }

}

export default useDummyApi