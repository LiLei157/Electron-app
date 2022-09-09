<template>
    <div class="search-view">
        <!-- 搜索框顶部栏 -->
        <search-header></search-header>
        <div class="search-main-view">
            <div class="search-text-row">
                搜索记录
            </div>
            <div class="search-record-list">
                <div class="search-record-first-row">
                    <div class="search-record-item search-item-no-active" v-for="(item,idx) in searchList.filter((item,idx) => idx < 15)" :key="'search-tag-'+idx">
                        {{item}}
                    </div>
                </div>

                <div class="show-more">
                    <span>等{{searchList.length}}项</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SearchHeader from './components/SearchHeader.vue'
import {ref} from 'vue'
let searchList = ref(['考察调研','随军家属落户','建军95周年','二十大','四个意识',
'惠民驿站','中华人民共和国军人地位和权益保障法','大熔炉','大学生预定兵通知书','预定兵','论坚持人民当家作主','习近平讲党史故事','香港书展','国家安全'])


</script>

<style scoped>
.search-view{
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background: url(/imgs/main_bg_img.png) no-repeat;
    background-size: cover;
    padding: 3rem 0 3.5rem;
    display: flex;
    flex-direction: column;
}
.search-main-view{
    flex: 1;
    box-sizing: border-box;
    padding-top: 2.44rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;
}
.search-text-row{
    font-family: "PingFang SC Medium";
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 0rem;
    line-height: 1.5rem;
    color: #fff;
}
.search-record-list{
    margin-top: 1.5rem;
    height: 6.12rem;
    width: 109rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}
.search-record-first-row{
    overflow: hidden;
}
.search-record-item{
    display: inline-block;
    height: 2.56rem;
    line-height: 2.56rem;
    padding: 0 2.15rem;
    font-size: 1.13rem;
    border-radius: 0.25rem;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
    transition: all .3s;
}
.search-item-active{
    background: #ed7b2f;
    color: rgba(255, 255, 255, 0.9);
}
.search-item-no-active{
    background: rgba(255, 255, 255, 0.22);
    color: rgba(255, 255, 255, 0.55);
}
.show-more{
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>