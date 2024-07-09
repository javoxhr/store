import { useStore } from "~/store/store";

export const addToLike = (product)=> {
    const store = useStore()
    const item = toRaw(store.like).find(el => el.id == product.id)
    if(!item) {
       store.like.push(product)
    } else {
        let index = store.like.indexOf(item)
        store.like.splice(index, 1)
    }
    // console.log(item)
    localStorage.setItem("like", JSON.stringify(store.like))
}