import { useStore } from "~/store/store";

export const remCountProduct = (product)=> {
    const store = useStore()
    const item = toRaw(store.cart).find(el => el.id == product.id)
    let index = store.cart.indexOf(item)
    if(store.cart[index].quantity > 1) {
        store.cart[index].quantity--
    } else {
        store.cart.splice(index, 1)
    }
    localStorage.setItem("cart", JSON.stringify(store.cart))
}