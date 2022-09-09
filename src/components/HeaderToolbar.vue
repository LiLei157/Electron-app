<template>
    <div class="header-row">
        <div class="left-arrow" @click="handleChangeTabItem(0)">
            <img class="left-icon" src=".././assets/imgs/index/left-arrow.png" alt="">
        </div>
        <div class="header-tab-bar">
            <div :class="['tab-bar-item',currentIndex === idx ? 'tab-avtive':'']" v-for="(item,idx) in tabList" :key="item.id" @click="handleClickItem(idx)">
                {{item.title}}
            </div>
        </div>
        <div class="right-arrow" @click="handleChangeTabItem(1)">
            <img class="right-icon" src=".././assets/imgs/index/left-arrow.png" alt="">
        </div>
    </div>
    
</template>

<script setup>
    import {defineProps,ref,defineEmits} from 'vue';
    const props = defineProps({
        tabList:Array
    })
    let currentIndex = ref(0)  
    let emit = defineEmits(['handleClickItem','handleChangeTabItem'])
    
    console.log(props.tabList)
    
    const handleClickItem = idx =>{
        currentIndex.value = idx
        emit('handleClickItem',currentIndex.value)
    }

    const handleChangeTabItem = (type)=>{
        currentIndex.value = type === 0 ? (currentIndex.value !== 0 ? currentIndex.value -1 : 0) : 
                                    (currentIndex.value === props.tabList.length ? props.tabList.length : currentIndex.value + 1)
        // emit('handleChangeTabItem',currentIndex.value)
        emit('handleClickItem',currentIndex.value)
    }
</script>

<style>
.header-row{
    display: flex;
    align-items: center;
}
.left-arrow,.right-arrow{
    width: 3rem;
    height: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.left-icon{
    width: 2rem;
    height: 2.25rem;
}
.right-icon{
    width: 2rem;
    height: 2.25rem;
    transform: rotate(180deg);
}
.header-tab-bar{
    flex: 1;
    height: 4.5rem;
    display: flex;
    align-items: center;
    font-family: "YouSheBiaoTiHei";
}
.tab-bar-item{
    width: 11rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "YouSheBiaoTiHei";
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.55);
    cursor: pointer;
    transition: all .3s;
}
.tab-avtive{
    font-size: 2.75rem;
    color: #fef3e6;
    text-shadow: 0 0.19rem 0.19rem #000;
}
</style>