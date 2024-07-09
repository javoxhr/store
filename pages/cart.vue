<template>
    <div>
        <div class="overlay" v-if="orderOpen" @click="orderOpen = !orderOpen"></div>
        <div class="container">
            <h1 class="cart-page-title">Cart</h1>
            <div class="cart-wrapper">
                <div v-if="store.cart?.length">
                    <cartItem v-for="item in store?.cart" :key="item" :cartItem="item"/>
                </div>
                <div v-else class="w-full flex items-center justify-center h-48 p-6 rounded-lg shadow-lg">
                    <h1 class="text-2x1 font-semibold">Don't have products in cart!</h1>
                </div>

                <div class="total-price">
                    <h1>Total</h1>
                    <span>$ {{ totalPrice?.toFixed() }}</span>
                    <button class="buy-btn" @click="orderOpen = !orderOpen">Buy</button>
                </div>

                <div class="order" v-if="orderOpen">
                    <span class="order-close" @click="orderOpen = !orderOpen">x</span>
                    <div class="order-wrapper">
                        <h1 style="font-size: 25px; padding-bottom: 20px;">$ {{ totalPrice.toFixed() }}</h1>
                        <div class="order-inputs">
                            <input type="text" placeholder="Your tel number">
                            <input type="text" placeholder="Your credit card">
                            <div class="flex items-center gap-4 ">
                                <img style="width: 30px;" src="../assets/images/master.svg" alt="">
                              <img style="width: 30px;" src="../assets/images/visa.svg" alt="">
                            </div>
                            <div class="order-btns">
                                <button>Check</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '~/store/store';
const store = useStore()
const totalPrice = computed(()=> {
    let price = 0
    store.cart.forEach(el => {
        price += Number(el.price)
    })
    return price
})
const orderOpen = ref(false)
</script>

<style lang="scss" scoped>
.cart-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
}
.cart-page-title {
    font-weight: 400;
    font-size: 22px;
    padding-bottom: 20px;
}
.buy-btn {
    padding: 2px 20px;
    border: 1px solid;
    border-radius: 5px;
    background: #4f46e5;
    color: #fff;
    transition: all .1s ease;
    &:hover {
        opacity: 0.9;
    }
    &:active {
        opacity: 0.8;
    }
}
.total-price {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
}

.order-inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
        border: 1px solid #e1dddd;
        outline: none;
        padding: 5px 10px;
    }
}
.order {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    background: #fff;
    padding: 40px 20px;
    border: 2px solid #4f46e5;
    border-radius: 7px;
    transform: translate(-50%, -50%);
    button {
        border: 1px solid;
        padding: 2px 15px;
        border-radius: 3px;
        background: #4f46e5;
        color: #fff;
    }
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.20);
}
.order-close {
    position: absolute;
    right: 13px;
    top: 5px;
    color: #4f46e5;
    display: block;
    font-size: 30px;
    cursor: pointer;
}
</style>