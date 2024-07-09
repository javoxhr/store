const baseUrl = ref("")
if(process.client) {
 baseUrl.value = useRuntimeConfig().public.apiBase
}


export default {
    getProduct() {
        return $fetch(`${baseUrl.value}/products`)
    },
    getDetailProduct(id) {
        return $fetch(`${baseUrl.value}/products/${id}`)
    },
    getCategorys() {
        return $fetch(`${baseUrl.value}/products/categories`)
    },
    getCotegoryDetail(slug) {
        return $fetch(`${baseUrl.value}/products/category/${slug}`)
    },
    search(s) {
        return $fetch(`${baseUrl.value}/products/search?q=${s}`)
    }
}