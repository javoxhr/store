<template>
  <div>
    <header class="bg-white">
      <div
        class="overlay"
        v-if="searchSwitch"
        @click="searchSwitchFunc()"
      ></div>
      .
      <div class="search" v-if="searchSwitch">
        <input
          type="text"
          placeholder="Search..."
          @input="search()"
          v-model="searchVal"
        />
        <button @click="searchSwitchFunc()">x</button>
        <div class="container">
          <ul class="serach-list">
            <li v-for="item in searchList?.products" :key="item">
              <NuxtLink
                :to="`/product/${item?.id}`"
                @click="searchSwitchFunc(), (searchVal = '')"
              >
                {{ item?.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button
            @click="menuShow = 0"
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <div class="relative">
            <div class="flex items-center gap-4">
              <button
                @click="showFunc()"
                type="button"
                class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                aria-expanded="false"
              >
                Categorys
                <svg
                  class="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <button class="search-btn" @click="searchSwitchFunc()">
                <svg
                  style="width: 25px"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.07,16.83,19,14.71a3.08,3.08,0,0,0-3.4-.57l-.9-.9a7,7,0,1,0-1.41,1.41l.89.89A3,3,0,0,0,14.71,19l2.12,2.12a3,3,0,0,0,4.24,0A3,3,0,0,0,21.07,16.83Zm-8.48-4.24a5,5,0,1,1,0-7.08A5,5,0,0,1,12.59,12.59Zm7.07,7.07a1,1,0,0,1-1.42,0l-2.12-2.12a1,1,0,0,1,0-1.42,1,1,0,0,1,1.42,0l2.12,2.12A1,1,0,0,1,19.66,19.66Z"
                    fill="#6563ff"
                  />
                </svg>
              </button>
            </div>

            <!--
          'Product' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        -->
            <div
              v-if="show"
              class="open-categor mt-3 rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <button class="close-categor" @click="show = !show">x</button>
              <NuxtLink
                @click="show = !show"
                v-for="item in categorys"
                :key="item"
                :to="`/categorys/${item?.slug}`"
                class="text-sm font-semibold leading-6 text-gray-900"
                ><span class="category-item">{{ item?.name }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="flex items-center gap-6 hidden lg:flex relative lg:flex-1 lg:justify-end"
        >
          <div class="like">
            <NuxtLink to="/like-page">
              <button>
                <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                <svg
                  enable-background="new 0 0 128 128"
                  height="23px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 128 128"
                  width="23px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M127,44.205c0-18.395-14.913-33.308-33.307-33.308c-12.979,0-24.199,7.441-29.692,18.276  c-5.497-10.835-16.714-18.274-29.694-18.274C15.912,10.898,1,25.81,1,44.205C1,79,56.879,117.104,64.001,117.104  C71.124,117.104,127,79.167,127,44.205z"
                    fill="transparent"
                    stroke="#4f46e5"
                    stroke-width="10px"
                  />
                </svg>
              </button>
              <span
                style="font-size: 10px; border: 1px solid"
                class="w-[18px] h-[18px] rounded-full flex items-center justify-center absolute top-[-8px] right-[35px] bg-indigo-600 text-white"
                >{{ store?.like.length }}</span
              >
            </NuxtLink>
          </div>
          <NuxtLink
            :to="`/cart`"
            class="text-sm font-semibold leading-6 text-gray-900 w-[20px] h-[20px]"
          >
            <cart-icon />
            <span
              style="font-size: 10px"
              class="w-[18px] h-[18px] bg-indigo-600 text-white rounded-full flex items-center justify-center absolute top-[3px] right-0 translate-x-[50%] translate-y-[-50%]"
              >{{ cartCount }}</span
            >
          </NuxtLink>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-10" v-if="false"></div>
        <div
          :style="{ right: menuShow + '%' }"
          class="menu fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <div
              class="cart-menu-wrapper mt-[10px] relative flex justify-center gap-[30px]"
            >
              <NuxtLink
                class="relative"
                to="/like-page"
                @click="menuShow = -100"
              >
                <button>
                  <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                  <svg
                    enable-background="new 0 0 128 128"
                    height="20px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 128 128"
                    width="20px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M127,44.205c0-18.395-14.913-33.308-33.307-33.308c-12.979,0-24.199,7.441-29.692,18.276  c-5.497-10.835-16.714-18.274-29.694-18.274C15.912,10.898,1,25.81,1,44.205C1,79,56.879,117.104,64.001,117.104  C71.124,117.104,127,79.167,127,44.205z"
                      fill="transparent"
                      stroke="#4f46e5"
                      stroke-width="10px"
                    />
                  </svg>
                </button>
                <span
                  style="font-size: 10px; border: 1px solid"
                  class="w-[18px] h-[18px] rounded-full flex items-center justify-center absolute top-[-8px] right-[-10px] bg-indigo-600 text-white"
                  >{{ store?.like.length }}</span
                >
              </NuxtLink>
              <NuxtLink
                @click="menuShow = -100"
                :to="`/cart`"
                class="text-sm font-semibold relative leading-6 text-gray-900 w-[20px] h-[20px]"
              >
                <cart-icon style="width: 30px" />
                <span
                  style="font-size: 10px"
                  class="w-[18px] h-[18px] bg-indigo-600 text-white rounded-full flex items-center justify-center absolute top-[0] right-[-5px] translate-x-[50%] translate-y-[-50%]"
                  >{{ cartCount }}</span
                >
              </NuxtLink>
              <button
                style="width: 25px; height: 25px"
                class="search-btn mt-[-3px] ml-[3px]"
                @click="searchSwitchFunc(), (menuShow = -100)"
              >
                <svg
                  style="width: 15px"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.07,16.83,19,14.71a3.08,3.08,0,0,0-3.4-.57l-.9-.9a7,7,0,1,0-1.41,1.41l.89.89A3,3,0,0,0,14.71,19l2.12,2.12a3,3,0,0,0,4.24,0A3,3,0,0,0,21.07,16.83Zm-8.48-4.24a5,5,0,1,1,0-7.08A5,5,0,0,1,12.59,12.59Zm7.07,7.07a1,1,0,0,1-1.42,0l-2.12-2.12a1,1,0,0,1,0-1.42,1,1,0,0,1,1.42,0l2.12,2.12A1,1,0,0,1,19.66,19.66Z"
                    fill="#6563ff"
                  />
                </svg>
              </button>
            </div>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="menuShow = -100"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <div class="-mx-3">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                  >
                    Products
                    <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                -->
                    <!-- <svg
                      class="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg> -->
                  </button>
                  <!-- 'Product' sub-menu, show/hide based on menu state. -->
                  <div class="menu-category mt-2 space-y-2" id="disclosure-1">
                    <NuxtLink to="/" @click="menuShow = -100">home</NuxtLink>
                    <NuxtLink
                      :to="`/categorys/${item?.slug}`"
                      @click="menuShow = -100"
                      v-for="item in categorys"
                      :key="item"
                    >
                      <span>{{ item?.name }}</span>
                    </NuxtLink>
                  </div>
                </div>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Features</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Marketplace</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Company</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup>
import CartIcon from "~/components/icons/CartIcon.vue";
import { useStore } from "~/store/store";
import services from "~/services/services";
const store = useStore();

const show = ref(false);
const searchSwitch = ref(false);
const menuShow = ref(-100);

function searchSwitchFunc() {
  searchSwitch.value = !searchSwitch.value;
}

function showFunc() {
  show.value = !show.value;
}

const cartCount = computed(() => {
  let count = 0;
  store.cart.forEach((el) => {
    count += el.quantity;
  });
  return count;
});

const likeCount = computed(() => {
  let like = 0;
  store.like.forEach((el) => {
    like = el.like;
  });
  return like;
});

const categorys = ref({});

const getCategorys = async () => {
  const res = await services.getCategorys();
  categorys.value = res;
};

const searchVal = ref("");
const searchList = ref({});

const search = async () => {
  const res = await services.search(searchVal.value);
  searchList.value = res;
};
onMounted(() => {
  getCategorys();
});
</script>

<style lang="scss" scoped>
.menu {
  transition: all 0.5s ease;
}
.menu-category {
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  margin-left: 15px;
}
header {
  padding: 20px 0;
  margin-top: 20px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
.header-like-count {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  width: 25px;
  height: 25px;
  font-weight: 400;
  font-size: 12px;
  border-radius: 50%;
  background: #000;
  color: #fff;
  position: absolute;
  bottom: 18px;
  left: 20px;
}

.search {
  width: 100%;
  text-align: center;
  position: relative;
  input {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    border: 1px solid;
    padding: 5px 10px;
    position: relative;
  }
  img {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 350px;
    top: 5px;
    z-index: 1;
  }
}
.header-like {
  position: relative;
}
.open-categor {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 40px 30px;
  row-gap: 30px;
  column-gap: 10px;
  position: absolute;
  z-index: 1;
  left: -505px;
  border: 2px solid #4f46e5;
}
.category-item {
  width: 200px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1;
  display: flex;
  &:hover {
    color: #4f46e5;
  }
}
.close-categor {
  font-weight: 500;
  font-size: 25px;
  position: absolute;
  top: 5px;
  right: 20px;
  color: #4f46e5;
}

.search-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #4f46e5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  max-height: 285px;
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  box-shadow: 1px 1px 10px #c1c1c1;
  animation: searchOpen 0.4s forwards;
  transform: translateY(-100%);
  overflow: hidden;
  input {
    padding: 10px 20px;
    outline: none;
    border: 2px solid #4f46e5;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 410px;
    margin-top: 20px;
  }
  button {
    font-weight: 400;
    font-size: 30px;
    color: #4f46e5;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  @media screen and (max-width: 1200px) {
    ul {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 500px) {
    input {
      width: 90%;
    }
    button {
      top: -5px;
    }
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}

@keyframes searchOpen {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@media screen and (max-width: 600px) {
  header {
    padding: 0;
    margin-top: 0;
  }
}
</style>