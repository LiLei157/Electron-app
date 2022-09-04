<template>
        <router-view v-slot="{Component}">
            <transition name="fade">
                <component  :is="Component" />
            </transition>
        </router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url(./assets/font/font.css);

body{
    padding: 0;
    margin: 0;
    font-family: "PingFang SC";
    box-sizing: border-box;
}
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}

.fade-enter-active,.fade-leave-active{
    transition: opacity .3s;
}
.fade-enter,.fade-leave-to{
    opacity:0;
}

@media screen and (max-width: 1600px){
   html{
     font-size: 11px;
   }
}
/*@media screen and(max-width: 1420px){*/
/*  html{*/
/*    font-size: 12px;*/
/*  }*/
/*}*/
</style>
