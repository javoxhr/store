<template>
  <div class="main">
    <loader v-if="store.loader" />
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <h2
          class="categor-text text-2xl font-bold tracking-tight text-gray-900"
        >
          {{ slug }}
        </h2>
        <div
          class="menu-category mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <Card v-for="item in detail?.products" :key="item" :product="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
import services from "~/services/services";
const store = useStore();
const { slug } = useRoute().params;
const detail = ref({});

const getDetail = async () => {
  store.loader = true;
  const res = await services.getCotegoryDetail(slug);
  detail.value = res;
  store.loader = false;
};
onMounted(() => {
  getDetail();
});
</script>

<style lang="scss" scoped>
.main {
  margin-top: -70px;
}

@media screen and (max-width: 500px) {
  .menu-category {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .categor-text {
    font-weight: 400;
    font-size: 20px;
  }
}
</style>