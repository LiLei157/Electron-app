<template>
  <div class="header">
    <date-show :positionOptions="positionOptions"></date-show>
    <div class="right-operation-wrap">
      <div class="search-wrap">
        <img class="search-icon" src="../../../assets/imgs/index/search_icon.png"/>
        <div>搜索</div>
      </div>
      <div class="setting-wrap">
        <img class="setting-icon" src="../../../assets/imgs/index/setting_icon.png"/>
        <div>设置</div>
      </div>
      <div class="user-wrap">
          <div class="left-arrow">
            <img class="left-arrow-icon"  src="../../../assets/imgs/index/left-arrow.png"/>
          </div>

        <img class="user-icon" src="../../../assets/imgs/index/user-avatar.jpeg"/>
      </div>
    </div>
  </div>
</template>
<script setup>
  import DateShow from '@/components/DateShow.vue';
  import {reactive} from 'vue';

  let positionOptions = reactive({
    top:'3.25rem',
    left:'51rem'
  })
</script>
<style>
.header{
  height: 7.75rem;
  position: relative;
  user-select: none;
}
.right-operation-wrap{
  height: 100%;
  position: absolute;
  right: 2.14%;
  display: flex;
  align-items: center;
}
.search-wrap,.setting-wrap{
  width: 8.94rem;
  height: 3.5rem;
  font-size: 1.5rem;
  padding-left: 0.94rem;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  cursor: pointer;
}
.search-wrap{
  margin-right: 1rem;
}
.setting-wrap{
  margin-right: 1.5rem;
}
.search-icon,.setting-icon{
  height: 3rem;
  width: 3rem;
  margin-right: 0.5rem;
}
.user-wrap{
  height: 3.5rem;
  display: flex;
  align-items: center;
  cursor:pointer;
}
.left-arrow{
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-arrow-icon{
  width: 70%;
  height: 70%;
}
.user-icon{
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
}
</style>