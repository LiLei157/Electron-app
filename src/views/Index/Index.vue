<template>
    <div class="home">
        <date-show :positionOptions="positionOptions"></date-show>
    </div>
</template>

<script setup>
    import {reactive} from 'vue';
    import DateShow from '../../components/DateShow.vue'
    let positionOptions = reactive({
        top:'3.25rem',
        left:'51rem'
    })
</script>

<style>
.home{
    height: 100%;
    width: 100%;
    background: url(../.././assets/bg_img.png) no-repeat;
    background-size: cover;
    position: relative;
}
</style>