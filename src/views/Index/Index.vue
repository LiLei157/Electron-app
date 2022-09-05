<template>
    <div class="home">
      <index-header></index-header>
      <div class="main-container">
        <div class="top-tab-header-wrap">
          <div class="tab-left-arrow">
          </div>
          <!--  顶部tab切换栏 -->
          <div class="tab-wrap">
            <div class="tab-scroll-container">
              <div v-for="(item,idx) in tabList" :key="'tab-'+item.id"
                   :class="currentIndex === idx ? 'tab-item-active':'tab-item'" @click="handleClickItem(idx)">
                {{ item.title }}
              </div>
            </div>
            <img :style="{left:leftScroll + 'rem'}" class="tab-under-icon"
                 src="../../assets/imgs/index/underline-icon.png"/>
          </div>
          <div class="tab-right-arrow">
          </div>
        </div>
        <div class="bottom-tab-body"></div>
      </div>
    </div>
</template>

<script setup>
import {ref,getCurrentInstance} from 'vue';
import IndexHeader from "./components/IndexHeader";
let global = getCurrentInstance()
let {appContext:{config:{globalProperties}}} = getCurrentInstance()
console.log('instance: ',global,globalProperties)
let currentIndex = ref(0)
let tabList = ref([])
const leftScroll = ref(0)

const handleClickItem = (idx) => {
  currentIndex.value = idx
  leftScroll.value = 7 + (currentIndex.value * 11 + currentIndex.value * 1)
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
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  background: url(../.././assets/bg_img.png) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
}

.main-container {
  flex: 1;
  padding: 2.5rem 4.5rem 3rem 4.5rem;
  display: flex;
  flex-direction: column;
}
.top-tab-header-wrap{
  display: flex;
  justify-items: center;
}
.tab-wrap {
  display: flex;
  align-items: center;
  height: 3.88rem;
  overflow-x: auto;
}

.tab-scroll-container {
  height: 3.88rem;
  display: flex;
  align-items: center;
  /*padding: 0 3rem;*/
}

.tab-left-arrow, .tab-right-arrow {
  width: 3rem;
  height: 3rem;
}

.tab-item {
  font-family: "YouSheBiaoTiHei";
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.55);
  margin-right: 4.8rem;
  white-space: nowrap;
  transition: all .3s;
}

.tab-item-active {
  font-family: "YouSheBiaoTiHei";
  margin-right: 1.13rem;
  font-size: 3rem;
  color: #fef3e6;
  text-shadow: 0 0.19rem 0.19rem #000;
  white-space: nowrap;
  transition: all .3s;
  z-index: 10;
}

.tab-under-icon {
  top: 11.88rem;
  position: absolute;
  width: 13rem;
  height: 3rem;
  transition: all .3s;
}
.bottom-tab-body{
  flex: 1;
  padding-top: 2.06rem;
}

::-webkit-scrollbar {
  height: 0;
}
</style>