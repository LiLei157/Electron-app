<template>
    <div class="home">
      <index-header></index-header>
      <div class="main-container">
        <header-tool-bar :tabList="tabList" @handleClickItem="handleClickItem"></header-tool-bar>

        <div class="bottom-tab-body">
            <video-item :videoItem="item" v-for="(item,idx) in videoList" :key="'video-'+idx">
            </video-item>
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
        videoList.value = res.data
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
  padding: 2.5rem 4.5rem 2rem 4.5rem;
  display: flex;
  flex-direction: column;
}

.bottom-tab-body{
  flex: 1;
  padding-top: 2.06rem;
  display: flex;
  flex-wrap: wrap;
}

::-webkit-scrollbar {
  height: 0;
}
</style>