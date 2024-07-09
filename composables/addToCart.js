import { useStore } from "~/store/store";

export const addToCart = (product)=> {
    const store = useStore()
    const item = toRaw(store.cart).find(el => el.id == product.id)
    if(!item) {
       store.cart.push(product)
    } else {
        let index = store.cart.indexOf(item)
        if(store.cart[index].quantity < 10) {
          store.cart[index].quantity++
        }
    }
    localStorage.setItem("cart", JSON.stringify(store.cart))
}