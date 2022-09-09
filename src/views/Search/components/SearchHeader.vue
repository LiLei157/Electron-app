<template>
  <div class="search-header-container">
    <div class="top-row">
        <div class="left-wrap">
            <div class="left-icon-wrap">
                <div class="left-icon"></div>
            </div>
            <span class="back-text">
                搜索
            </span>
        </div>
        <div class="search-icon-wrap">
            <div class="search-icon"></div>
        </div>
        <div class="clear-wrap">
            <div class="clear-icon"></div>
            <span class="clear-text">清除记录</span>
        </div>

        <div class="time-wrap">
            <div class="time-top-row">
                <div class="date-text">
                {{dateInfo.dateText}}
                </div>
                <div class="week-text">
                    {{getWeek}}
                </div>
            </div>
            <div class="now-text">
                {{dateInfo.now}}
            </div>
        </div>
        <div class="vertical-line">
        </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import {reactive,computed} from 'vue'
let dateInfo = reactive({
    dateText:moment().format('YYYY/DD/MM'),
    weekText:moment().format('E'),
    now:''
})

// 计算星期，将数字转换为中文
    const getWeek = computed(()=>{
        let week = ['一','二','三','四','五','六','日']
        return '星期' + week[moment().format('E') - 1] 
    })
// 获取当前精确时间
    const getCurrentNow = ()=>{
        setInterval(()=>{
            dateInfo.now = moment().format('HH:mm:ss')
        },1000)
    }
    getCurrentNow()
</script>

<style scoped>
.search-header-container{

}
.top-row{
    position: relative;
    font-family: "PingFang SC";
    height: 6.68rem;
}
.left-wrap{
    position: absolute;
    left: 3rem;
    top: 0;
    display: flex;
    align-items: center;
}
.left-icon-wrap{
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left-icon{
    width: 2.5rem;
    height: 2.5rem;
    background: url(/imgs/back.png) no-repeat;
    background-size: cover; 
}
.back-text{
    display: inline-block;
    font-family: "YouSheBiaoTiHei";
    margin-left: 2.13rem;
    font-size: 3rem;
    line-height: 1.5rem;
    color: #fff;
}
.search-icon-wrap{
    position: absolute;
    top: 0;
    left: 74.5rem;
    width: 3.5rem;
    height: 3.5rem;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-icon{
    width: 2.5rem;
    height: 2.5rem;
    background: url(/imgs/search_icon.png) no-repeat;
    background-size: cover;
}
.clear-wrap{
    position: absolute;
    top: 0;
    right: 28.5rem;
    display: flex;
    align-items: center;
}
.clear-icon{
    width: 3rem;
    height: 3rem;
    background: url(/imgs/clear-icon.png) no-repeat;
    background-size: cover;
}
.clear-text{
    margin-left: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
}
.time-wrap{
    position: absolute;
    top:0;
    right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}
.time-top-row{
    display: flex;
    align-items: center;
}
.date-text,.week-text{
    font-size: 2.13rem;
    line-height: 2.75rem;
    color: #fff;
}
.week-text{
    margin-left: 1rem;
}
.now-text{
    width: 100%;
    font-family: "PingFang SC Medium";
    font-weight: 500;
    font-size: 3rem;
    line-height: 2.75rem;
    color: #fff;
    text-align: right;
}
.vertical-line{
    width: 83%;
    position: absolute;
    bottom: 2.095rem;
    left: 0;
    height: 0.1rem;
    background-color: #595856;
}
</style>