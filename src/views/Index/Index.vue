<template>
    <div class="home">
      <index-header></index-header>
      <div class="main-container">
        <header-tool-bar :tabList="tabList" @handleClickItem="handleClickItem"></header-tool-bar>

        <div class="bottom-tab-body">
            <video-item :videoItem="item" v-for="(item,idx) in videoList" :key="'video-'+idx">
            </video-item>
            <div class="show-more" v-if="videoList.length >= 11">
                <div class="show-more-icon"></div>
                <div class="show-more-text">
                    查看更多
                </div>
            </div>
        </div>
        <div class="right-bottom-img">
        </div>
      </div>
    </div>
</template>

<script setup>
import {ref,getCurrentInstance} from 'vue';
import IndexHeader from "./components/IndexHeader";
import HeaderToolBar from '@/components/HeaderToolbar'
import VideoItem from '@/components/VideoItem';

let global = getCurrentInstance()
let {appContext:{config:{globalProperties}}} = getCurrentInstance()
console.log('instance: ',global,globalProperties)

let tabList = ref([])
let videoList = ref([])

// 视频分类id
let videoId = ref(1)

// 点击切换tab项
const handleClickItem = (idx) => {
    console.log(idx)
    videoId.value = tabList.value[idx].id
    console.log('pid: ',videoId.value)
    getVideoList()
}
// 获取tab列表
const getVisualClassificationList = ()=>{
    globalProperties.$axios.getRequest('/api/get_visual_classification').then(res =>{
        console.log(res.data,tabList)
        tabList.value = res.data
        console.log('tabList: ',tabList)
    })
}
getVisualClassificationList()

// 获取每一个不同分类的视频项
const getVideoList = ()=>{
    globalProperties.$axios.getRequest(`/api/get_video_list/${videoId.value}`).then(res =>{
        console.log('vedioList: ',res.data)
        videoList.value = res.data.slice(0,11)
    })
}
getVideoList()
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  background: url(../.././assets/bg_img.png) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.main-container {
  flex: 1;
  padding: 2.5rem 4.5rem 3rem 4.5rem;
  display: flex;
  flex-direction: column;
}

.bottom-tab-body{
  flex: 1;
  padding-top: 2.06rem;
  display: flex;
  flex-wrap: wrap;
}
.show-more{
    /* position: absolute;
    bottom: 3rem;
    left: 85.5rem; */
    width: 13.5rem;
    height: 15.19rem;
    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.26); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.show-more-icon{
    width: 3.5rem;
    height: 3.5rem;
    background: url(/imgs/index/menu.png) no-repeat;
    background-size: cover;
}
.show-more-text{
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    color: #fff;
}
.right-bottom-img{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: url(/imgs/index/bottom-logo.png) no-repeat;
    background-size: cover;
    width: 17.25rem;
    height: 15.48rem;
}

::-webkit-scrollbar {
  height: 0;
}
</style>