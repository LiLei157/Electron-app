<template>
    <div class="video-item" :style="{background:'url('+ videoItem.imageUrl + ')no-repeat'}">
        <!-- <img class="video-img" :src=""> -->
        <!-- <span style="color:white">{{videoItem.imageUrl}}</span> -->
        <div class="download-wrap">
            <span :class="['download-text',videoItem.download === 0 ? 'no-download':'is-download']"> {{videoItem.download === 0 ? '未下载' : '已下载'}} </span>
            <div class="split-line"></div>
            <img v-if="!(videoItem.collect)" class="collection-icon" src=".././assets/imgs/index/uncollection-icon.png" alt="">
            <img v-else class="collection-icon" src=".././assets/imgs/index/collection-icon.png" alt="">
        </div>
        <div class="mask-title">
            <div class="mask-title-wrap">
                {{videoItem.title}}
            </div>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    let props = defineProps({
        videoItem:Object
    })
    console.log(props.videoItem)
</script>

<style>
.video-item{
    width: 26.7rem;
    height: 15.19rem;
    border-radius: 0.25rem;
    position: relative;
    margin-right: 0.7rem;
    cursor: pointer;
}
.video-img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.download-wrap{
    width: 5.63rem;
    height: 1.75rem;
    border-radius: 0.88rem;
    background: rgba(0, 0, 0, 0.26);
    position: absolute;
    top: 0.75rem;
    right: 1.06rem;
}
.download-text{
   font-size: 0.75rem; 
   position: absolute;
   left: 0.75rem;
   top: 50%;
   transform: translateY(-50%);
}
.no-download{
    color: rgba(255, 255, 255, 0.9);
}
.is-download{
    color: rgba(255, 255, 255, 0.55);
}
.split-line{
    width: 0.06rem;
    height: 1.25rem;
    color: rgba(255, 255, 255, 0.22);
    position: absolute;
    left: 3.5rem;
    top: 50%;
    transform: translateY(-50%);
}
.collection-icon{
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    right: 0.7rem;
    top: 50%;
    transform: translateY(-50%);
    transition: all .3s;
}
.mask-title{
    box-sizing: border-box;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    padding: 0 1rem;
    font-family: "PingFang SC";
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
}
.mask-title-wrap{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>