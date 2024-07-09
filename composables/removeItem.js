import { useStore } from "~/store/store";

export const removeItem = (product)=> {
    const store = useStore()
    const item = toRaw(store.cart).find(el => el.id == product.id)
    let index = store.cart.indexOf(item)
    if(store.cart[index].quantity == 0) {
        store.cart[index].quantity = 0
    } else {
        store.cart.splice(index, 1)
    }
    localStorage.setItem("cart", JSON.stringify(store.cart))
}