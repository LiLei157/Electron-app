<template>
    <div class="time-show" :style="{left:positionOptions.left,top:positionOptions.top}">
        <div class="top-row">
            <span class="date-text">{{timeStr.date}}</span> 
            <span class="week-text">{{getWeek}}</span>
        </div>
        <div class="sec-row">
            {{timeStr.now}}
        </div>
    </div>
</template>

<script setup>
    import { reactive,defineProps,computed } from 'vue';
    import moment from 'moment';
    // 接受传参
    defineProps({
        positionOptions:Object
    })
    // 定义时间格式
    let timeStr = reactive({
        date: moment().format('YYYY/MM/DD'),
        week: moment().format('E'),
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
            timeStr.now = moment().format('HH:mm:ss')
        },1000)
    }
    getCurrentNow()
</script>

<style>
    .time-show{
        display: inline-block;
        position: absolute;
    }
    .top-row {
        font-family: "PingFang SC";
        font-weight: 400;
        text-align: left;
        color: #fff;
        display: flex;
        align-items: center;
    }
    .date-text{
        font-size: 2.13rem;
        line-height: 2.75rem;
        margin-right: 1rem;
    }
    .week-text{
        font-size: 1.75rem;
        line-height: 2.75rem;
    }
    .sec-row{
        font-family: "PingFang SC Medium";
        font-weight: 500;
        font-size: 3rem;
        line-height: 2.75rem;
        text-align: center;
        color: #fff;
    }
</style>