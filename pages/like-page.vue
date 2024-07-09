<template>
    <div class="like-page">
        <div class="container">
          <div class="like-text" v-if="store.like.length">
            <h1>Your favorites</h1>
            <img style="width: 30px;" class="likes-1" src="../assets/images/likes.svg" alt="">
            <img style="width: 30px;" class="likes-2" src="../assets/images/likes.svg" alt="">
            <img style="width: 30px;" class="likes-3" src="../assets/images/likes.svg" alt="">
            <img style="width: 30px;" class="likes-4" src="../assets/images/likes.svg" alt="">
          </div>
        </div>
        <div class="container">
            <div class="like-cards-wrapper">
                <LikeComponent v-for="item in store?.like" :key="item" :productLike="item"/>
            </div>
        </div>

        <div class="dont-product" v-if="!store.like.length">
          <div class="container">
           <div class="w-full flex items-center relative justify-center h-48 p-6 rounded-lg shadow-lg">
            <h1 style="font-size: 18px;">Don't have favorites</h1>
            <img style="width: 30px;" class="likes-1" src="../assets/images/likes.svg" alt="">
            <img style="width: 30px;" class="likes-2" src="../assets/images/likes.svg" alt="">
            <img style="width: 30px;" class="likes-3" src="../assets/images/likes.svg" alt="">
            <img style="width: 30px;" class="likes-4" src="../assets/images/likes.svg" alt="">
           </div>
         </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '~/store/store';

const store = useStore()
</script>

<style lang="scss" scoped>
.like-page {
    margin-top: -20px;
    padding-bottom: 20px;
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: left;
        gap: 20px;
        margin-top: 30px;
    }
}
.like-text {
    width: 85%;
    height: 100px;
    box-shadow: 1px 1px 10px #f0f0f0;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1 {
        font-weight: 400;
        font-size: 20px;
    }
}
.likes-1 {
    position: absolute;
    left: 20px;
    top: 20px;
}
.likes-2 {
    position: absolute;
    left: 50px;
    top: 40px;
}
.likes-3 {
    position: absolute;
    right: 20px;
    top: 20px;
}
.likes-4 {
    position: absolute;
    right: 50px;
    top: 40px;
}
.like-cards-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
@media screen and (max-width: 1250px) {
    .like-cards-wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 950px) {
    .like-cards-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 650px) {
    .like-cards-wrapper {
        grid-template-columns: repeat(1, 1fr);
    }
    .likes-2 {
        display: none;
    }
    .likes-4 {
        display: none;
    }
    .likes-1 {
        top: 35px;
    }
    .likes-3 {
        top: 35px;
    }
    .like-text {
       margin-top: -22px;
    }
}
</style>