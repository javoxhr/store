<template>
  <div class="relative">
    <div class="like-card">
      <img
        class="like-card__img"
        :src="productLike?.thumbnail"
        :alt="productLike?.title"
      />
      <div class="like-card__text-wrapper">
        <span class="like-card__price">$ {{ productLike?.price }}</span>
        <NuxtLink :to="`/product/${productLike?.id}`">
          <h1 class="like-card__title">{{ productLike?.title }}</h1>
        </NuxtLink>
        <div class="category-wrap">
          <span class="like-card__category">{{ productLike?.category }}</span>
          <button
            class="btn-cart"
            v-if="!quantityCart"
            @click="addToCart(cartItem), showFunc()"
          >
            <cart-icon style="width: 20px" />
          </button>
          <div v-if="quantityCart" class="cart-btns-wrap">
            <button @click="remCountProduct(cartItem)">-</button>
            <span>{{ quantityCart }}</span>
            <button @click="addCountProduct(cartItem)">+</button>
          </div>

          <button class="like-after" @click="addToLike(productLike)">
            <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
            <svg
              enable-background="new 0 0 128 128"
              height="22px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 128 128"
              width="22px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M127,44.205c0-18.395-14.913-33.308-33.307-33.308c-12.979,0-24.199,7.441-29.692,18.276  c-5.497-10.835-16.714-18.274-29.694-18.274C15.912,10.898,1,25.81,1,44.205C1,79,56.879,117.104,64.001,117.104  C71.124,117.104,127,79.167,127,44.205z"
                fill="red"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="like-card after-click" :style="{ display: show }">
      <img
        class="like-card__img"
        :src="productLike?.thumbnail"
        :alt="productLike?.title"
      />
      <div class="like-card__text-wrapper">
        <span class="like-card__price">$ {{ productLike?.price }}</span>
        <NuxtLink :to="`/product/${productLike?.id}`">
          <h1 class="like-card__title">{{ productLike?.title }}</h1>
        </NuxtLink>
        <div class="category-wrap">
          <span class="like-card__category">{{ productLike?.category }}</span>
          <button
            class="btn-cart"
            v-if="productLike.quantity <= 1"
            @click="addToCart(productLike)"
          >
            <cart-icon style="width: 20px" />
          </button>
          <div v-else class="cart-btns-wrap">
            <button @click="remCountProduct(productLike)">-</button>
            <span>{{ productLike.quantity }}</span>
            <button @click="addCountProduct(productLike)">+</button>
          </div>

          <button class="like-after">
            <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
            <svg
              enable-background="new 0 0 128 128"
              height="22px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 128 128"
              width="22px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M127,44.205c0-18.395-14.913-33.308-33.307-33.308c-12.979,0-24.199,7.441-29.692,18.276  c-5.497-10.835-16.714-18.274-29.694-18.274C15.912,10.898,1,25.81,1,44.205C1,79,56.879,117.104,64.001,117.104  C71.124,117.104,127,79.167,127,44.205z"
                fill="red"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { addCountProduct } from "~/composables/addCountProduct";
import { remCountProduct } from "~/composables/remCountProduct";
import { addToCart } from "~/composables/addToCart";
import { useStore } from "~/store/store";
import { addToLike } from "~/composables/addToLike";
import CartIcon from "./icons/CartIcon.vue";

const store = useStore();

const show = ref("none");

function showFunc() {
  show.value = "block";
}

const { productLike } = defineProps(["productLike"]);
const cartItem = computed(() => {
  const item = {
    title: productLike?.title,
    thumbnail: productLike?.thumbnail,
    price: productLike?.price,
    id: productLike?.id,
    category: productLike?.category,
    quantity: 1,
  };
  return item;
});

const quantityCart = computed(()=> {
    const item = store.cart.find(el => el.id == productLike.id)
    return item?.quantity
})
</script>

<style lang="scss" scoped>
.like-card {
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 7px #e3e3e3;
  padding: 20px;
  border-radius: 30px;
  transition: all 0.1s ease;
  position: relative;
  &:hover {
    box-shadow: 1px 1px 10px #cecdcd;
    .like-after {
      display: block;
      animation: likeAnim 0.7s forwards;
    }
  }
  &__text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  &__img {
    width: 200px;
    transition: all 0.2s ease;
  }
  &__title {
    width: 150px;
    font-weight: 400;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.category-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-btns-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 6px 2px 6px;
  border-radius: 5px;
  background: #4f46e5;
  color: #fff;
  font-size: 13px;
}
.like-after {
  position: absolute;
  top: 15px;
  right: 15px;
  display: none;
}

@keyframes likeAnim {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.after-click {
  width: 150px;
  display: none;
  background: #fff;
  position: absolute;
  left: 30px;
  bottom: 0;
  animation: after-card-anim 0.8s forwards;
}

.add-card-after {
  display: block;
}

@keyframes after-card-anim {
  from {
    opacity: 0.3;
    left: 50px;
  }
  to {
    opacity: 0;
    bottom: 250px;
    left: 300px;
  }
}
</style>