<template>
  <div class="item">
    <div class="item__wrapper">
      <img :src="cartItem?.thumbnail" alt="" />
      <NuxtLink :to="`/product/${cartItem?.id}`">
        <h1>{{ cartItem?.title }}</h1>
      </NuxtLink>
      <span class="cart-item-category">{{ cartItem?.category }}</span>
      <span>$ {{ cartItem?.price }}</span>

      <div class="all-buttons-wrapper">
        <div class="btns-wrap">
        <button
          class="bg-indigo-600 text-white"
          @click="remCountProduct(cartItem), store.total -= cartItem?.price"
        >
          -
        </button>
        <span>{{ cartItem?.quantity }}</span>
        <button
          class="bg-indigo-600 text-white"
          @click="addCountProduct(cartItem), store.total += cartItem?.price"
        >
          +
        </button>
        </div>

        <div class="rem-wrap">
        <button class="remove-item" @click="removeItem(cartItem)">
          remove
        </button>
        <button class="menu-rem-item" @click="removeItem(cartItem)">
          x
        </button>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { addCountProduct } from "~/composables/addCountProduct";
import { remCountProduct } from "~/composables/remCountProduct";
import {removeItem} from "~/composables/removeItem"
import { useStore } from "~/store/store";
import CartIcon from "./icons/CartIcon.vue";
const { cartItem } = defineProps(["cartItem"]);

const store = useStore();

const checkSaved = computed(() => {
  const item = store.cart.find((el) => el.id == cartItem.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});
</script>

<style lang="scss" scoped>
.all-buttons-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}
.item {
  padding: 5px 20px;
  box-shadow: 1px 1px 10px #eeecec;
  border-radius: 20px;
  position: relative;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 150px;
      height: 150px;
    }
    h1 {
      font-weight: 400;
      font-size: 18px;
    }
    span {
      font-weight: 400;
      font-size: 15px;
    }
  }
}
.menu-rem-item {
  position: absolute;
  top: 8px;
  right: 0px;
  font-weight: 400;
  font-size: 20px;
  color: red;
  display: none;
}
.btns-wrap {
  display: flex;
  align-items: center;
  gap: 15px;
  span {
    font-weight: 400;
    font-size: 17px;
  }
  button {
    padding: 0px 18px 2px 18px;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      opacity: 0.8;
    }
  }
}
.rem-wrap {
  width: 100%;
  display: flex;
}
.remove-item {
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  padding: 3px 15px 4px;
  background: rgb(179, 3, 3);
  color: #fff;
}
@media screen and (max-width: 1125px) {
    .cart-item-category {
      display: none;
    }
    .item {
      &__wrapper {
        h1 {
          width: 100px;
          font-weight: 400;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        span {
          font-weight: 400;
          font-size: 12px;
        }
        img {
          width: 100px;
          height: 100px;
        }
        button {
          padding: 0 15px 1px;
          font-size: 10px;
        }
      }
    }
    .btns-wrap {
      gap: 10px;
    }
}

@media screen and (max-width: 570px) {
   .remove-item {
     display: none;
   }
   .menu-rem-item {
    display: block;
   }
}

@media screen and (max-width: 470px) {
  .item {
    padding: 5px;
    &__wrapper {
       h1 {
        width: 60px;
      }
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>