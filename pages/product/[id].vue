<template>
  <div class="detail">
    <loader v-if="store.loader" />
    <div class="container">
      <ul class="detail-header">
        <li>
          <NuxtLink to="/">home</NuxtLink>
        </li>
        /
        <li>
          <NuxtLink to="/"
            ><li class="detail-header-title">{{ detail?.title }}</li></NuxtLink
          >
        </li>
      </ul>
      <div class="main-wrapper">
        <div class="images-wrapper">
          <img
            class="detail-images"
            v-if="detail?.images?.length"
            :src="detail?.images[imagesIndex]"
            alt=""
          />
        </div>
        <div class="detail-text-wrapper">
          <div class="price-wrapper">
            <span>{{ Math.round(detail.price) }} $</span>
            <span class="rating-count"
              >{{ detail.rating }}
              <img class="rating" src="/assets/images/rating.svg" alt=""
            /></span>
          </div>
          <h1 class="detail-title">{{ detail?.title }}</h1>
          <h2 class="detail-category">Category {{ detail?.category }}</h2>
          <div class="mini-images-menu">
            <ul class="mini-images-wrapper">
              <li
                v-for="(item, i) in detail?.images"
                :key="item"
                :class="{ 'after-list': imagesIndex == i }"
              >
                <img :src="item" alt="" @click="imagesIndex = i" />
              </li>
            </ul>
          </div>
          <p class="detail-desc">
            {{ detail?.description }}
          </p>
          <span class="detail-brand"
            >Brand {{ detail?.brand }}
            <img src="/assets/images/brand.svg" alt=""
          /></span>

          <div class="min-images">
            <ul class="mini-images-wrapper">
              <li
                v-for="(item, i) in detail?.images"
                :key="item"
                :class="{ 'after-list': imagesIndex == i }"
              >
                <img :src="item" alt="" @click="imagesIndex = i" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rating-comment">
        <div class="rating-comment-wrapper">
          <span class="reting-span" v-for="item in detail?.reviews" :key="item"
            >{{ item?.comment }}
            <img class="rating" src="/assets/images/rating.svg" alt=""
          /></span>
        </div>
      </div>

      <div class="cr-code">
        <div class="cr-code-text-wrapper">
          <span>stock {{ detail?.stock }}</span>
          <span>sku {{ detail?.sku }}</span>
          <span>id {{ detail?.id }}</span>
          <span>createdAt {{ detail?.meta?.createdAt }}</span>
          <span>updatedAt {{ detail?.meta?.updatedAt }}</span>
          <span>barcode {{ detail?.meta?.barcode }}}</span>
          <span>qrCode {{ detail?.meta?.qrCode }}</span>
        </div>
        <img :src="detail?.meta?.qrCode" alt="" />
      </div>
    </div>

    <div class="similar-products">
      <div class="container">
        <CategoryProduct />
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "~/services/services";
import { useStore } from "~/store/store";
const route = useRoute();
const store = useStore();

const detail = ref([]);

const imagesIndex = ref(0);

async function getDetail() {
  store.loader = true;
  const res = await services.getDetailProduct(route.params.id);
  detail.value = res;
  store.loader = false;
}

onMounted(() => {
  getDetail();
});
</script>

<style lang="scss" scoped>
.mini-images-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid;
  }
}
.detail-images {
  height: 400px;
}
.mini-images-menu {
  display: none;
}
.after-list {
  border: 1px solid;
  border-radius: 5px;
  padding: 3px;
  position: relative;
  &::after {
    content: "";
    width: 109px;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    display: block;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: -2px;
  }
}
.images-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 300px;
  }
}
.rating {
  width: 25px;
  height: 25px;
}
.rating-count {
  display: flex;
  align-items: center;
  gap: 2px;
}

.price-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
}
.detail-title {
  font-family: sans-serif;
  font-weight: 400;
  font-size: 17px;
  margin-top: 5px;
}
.detail-desc {
  width: 100%;
  max-width: 400px;
  margin-top: 10px;
}
.detail-brand {
  margin-top: 10px;
}
.detail {
  .main-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    margin-top: 50px;
  }
}

@media screen and (max-width: 714px) {
  .detail {
    .main-wrapper {
      flex-direction: column;
    }
  }
  .min-images {
    display: none;
  }
  .mini-images-menu {
    display: block;
  }
  .cr-code-text-wrapper {
    justify-content: center;
  }
  .cr-code {
    flex-direction: column;
    align-items: center;
  }
  .detail-images {
    height: 20px;
  }
}

.mini-images-wrapper {
  margin-top: 20px;
}

.detail-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 25px;
    height: 25px;
  }
}
.reting-span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
}
.rating-comment-wrapper {
  width: 100%;
  max-width: 650px;
  box-shadow: 1px 1px 10px #eae8e8;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
  margin-top: 10px;
}

.rating-comment {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cr-code-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.cr-code {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
.detail-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.detail-header-title {
  width: 100%;
  max-width: 70px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>