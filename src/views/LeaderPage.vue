<template>
    <div class="container">
        <div class="leader-container">
            <div class="mid-container">
                <img class="logo" src=".././assets/imgs/logo.png"/>
                <div class="title">
                    国防教育数据信息显控终端
                </div>
                <div class="des">
                    National defense education data information display and control terminal
                </div>
                <div class="countdown">
                    {{countdown}}秒后进入
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {ref,reactive} from 'vue'
export default {
    setup(){
        let countdown = ref(5)
        let timer = reactive(null)
        // 倒计时定时器
        const setCountDown = ()=>{
            timer = setInterval(()=>{
                if(countdown.value === 0){
                    clearInterval(timer)
                    // 进入首页面

                    return
                }
                countdown.value --
            },1000)
        }
        setCountDown()
        return {
            countdown
        }
    }
}
</script>

<style>
.container{
    width: 100%;
    height: 100vh;
    position: relative;
    user-select: none;
}
.leader-container{
    width: 100%;
    height: 100%;
    background: url(.././assets/imgs/leader-logo.png) no-repeat;
    background-size: cover;
}
.logo{
    position: absolute;
    width: 20.57rem;
    height: 2.56rem;
    right: 8rem;
    top: 4.5rem;
}
.mid-container{
    width: 100%;
    height: 32.13rem;
    position: absolute;
    left: 0;
    top: 14.75rem;
}
.title{
    font-family: "YouSheBiaoTiHei";
    position: absolute;
    left: 15.5rem;
    top: 9.31rem;
    font-size: 8.5rem;
    letter-spacing: 0rem;
    line-height: 6.63rem;
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
}
.des{
    font-family: "Arial Narrow Italic";
    font-weight: 400;
    font-style: italic;
    font-size: 2rem;
    letter-spacing: 0rem;
    line-height: 6.63rem;
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
    position: absolute;
    left: 31.94rem;
    bottom: 10.44rem;
}
.countdown{
    position: absolute;
    right: 17.13rem;
    bottom: 3.88rem;
    font-family: "PingFang SC";
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: left;
    color: rgba(255, 255, 255, 0.55);
}


/* 媒体查询 */
@media screen and(max-width:1280px) {
    .title{
        font-size: 3rem;
    }
}
</style>