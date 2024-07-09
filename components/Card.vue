<template>
  <div class="group relative card">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
    >
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4">
      <div class="mb-2">
        <h3 class="text-sm text-gray-700">
          <NuxtLink :to="`/product/${product?.id}`">
            <!-- <span aria-hidden="true" class="absolute inset-0"></span> -->
            {{ product?.title }}
          </NuxtLink>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product?.category }}</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">$ {{ product?.price }}</p>
        <button
          v-if="!productCart"
          :class="{ 'active-cart': checkSaved }"
          class="btn-cart w-[20px] h-[20px]"
          @click="addToCart(item)"
        >
          <cart-icon />
        </button>
        <div
          v-else
          class="flex items-center gap-4 py-[5px] text-white px-3 rounded-[10px] bg-indigo-600"
        >
          <button @click="remCountProduct(item)">-</button>
          <span>{{ productCart?.quantity }}</span>
          <button @click="addCountProduct(item)">+</button>
        </div>
      </div>
    </div>
    <button class="like" @click="addToLike(likeItem)" :class="{'active-like': likeSaved}">
      <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
      <svg
        enable-background="new 0 0 128 128"
        height="25px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 128 128"
        width="25px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M127,44.205c0-18.395-14.913-33.308-33.307-33.308c-12.979,0-24.199,7.441-29.692,18.276  c-5.497-10.835-16.714-18.274-29.694-18.274C15.912,10.898,1,25.81,1,44.205C1,79,56.879,117.104,64.001,117.104  C71.124,117.104,127,79.167,127,44.205z"
          fill="rgb(107, 105, 105)"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { addCountProduct } from "~/composables/addCountProduct";
import { remCountProduct } from "~/composables/remCountProduct";
import { addToCart } from "~/composables/addToCart";
import { addToLike } from "~/composables/addToLike";
import { useStore } from "~/store/store";
import CartIcon from "./icons/CartIcon.vue";
const { product } = defineProps(["product"]);

const store = useStore();

const item = computed(() => {
  const item = {
    title: product?.title,
    thumbnail: product?.thumbnail,
    price: product?.price,
    id: product?.id,
    category: product?.category,
    quantity: 1,
  };
  return item;
});
const likeItem = computed(() => {
  const item = {
    title: product?.title,
    thumbnail: product?.thumbnail,
    price: product?.price,
    id: product?.id,
    category: product?.category,
  };
  return item;
});

const likeSaved = computed(() => {
  const item = store.like.find((el) => el.id == product.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});

const productLike = computed(() => {
  const item = store.like.find((el) => el.id == product.id);
  if (item) {
    return item;
  } else {
    return false;
  }
});

const checkSaved = computed(() => {
  const item = store.cart.find((el) => el.id == product.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});

const productCart = computed(() => {
  const item = store.cart.find((el) => el.id == product.id);
  if (item) {
    return item;
  } else {
    return false;
  }
});
</script>

<style lang="scss" scoped>
.like {
  position: absolute;
  top: 8px;
  right: 10px;
}

.cart-btn {
  position: absolute;
  top: 8px;
  right: 10px;
}
.active-like {
  svg {
    path {
      fill: red;
    }
  }
}
</style>
