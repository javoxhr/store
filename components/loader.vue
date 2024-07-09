<template>
    <div class="loader">
        <div class="loader-wrapper">
            <span class="loading"></span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loader {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader-wrapper {
    width: 150px;
    height: 150px;
    // border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgb(255,255,255);
    transition: all .5s ease;
    animation: roundedAnim 1s infinite;
    background: linear-gradient(90deg, rgba(255,255,255,1) 72%, rgba(79,70,229,1) 72%);
    position: relative;
    &::after {
        content: '';
        width: 15px;
        height: 15px;
        background: rgba(79,70,229,1);
        display: block;
        border-radius: 50%;
        position: absolute;
        bottom: 7.5px;
        right: 34px;
    }
}
.loading {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: block;
    background: #fff;
}

@keyframes roundedAnim {
    from {
        width: 130px;
        height: 130px;
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>