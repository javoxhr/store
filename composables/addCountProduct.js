import { useStore } from "~/store/store";

export const addCountProduct = (product)=> {
    const store = useStore()
    const item = toRaw(store.cart).find(el => el.id == product.id)
    let index = store.cart.indexOf(item)
    if(store.cart[index].quantity < 10) {
        store.cart[index].quantity++
    }
    localStorage.setItem("cart", JSON.stringify(store.cart))
}