<template>
    <div class="video-item">
        <div class="download-wrap">
            <span class="download-text">未下载</span>
            <div class="split-line"></div>
            <img src=".././assets/imgs/index/uncollection-icon.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.video-item{
    width: 27rem;
    height: 15.19rem;
    border-radius: 0.25rem;
    position: relative;
}
.download-wrap{
    width: 5.63rem;
    height: 1.75rem;
    border-radius: 0.88rem;
    background: rgba(0, 0, 0, 0.26);
    position: absolute;
    top: 0.75rem;
    right: 1.06rem;
    display: flex;
    align-items: center;
}
</style>