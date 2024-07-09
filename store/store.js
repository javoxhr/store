import {defineStore} from 'pinia'

export const useStore = defineStore("store", ()=> {
    const count = ref(0)
    const cart = ref([])
    const loader = ref(true)
    const like = ref([])
    return {
        loader,
        cart,
        count,
        like,
    }
})