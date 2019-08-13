<template>
    <div class="home">
        <header class="g-header-container">
          <Homeheader></Homeheader>
        </header>
        <div></div>
        <div class="g-backtop-container"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Homeheader from './header'

    export default {
      name: 'home',
      components: {
        Homeheader
      }
    }
</script>
<style lang="scss" scoped>

@import '../../assets/scss/_mixins';

/* 首页页面的样式 */
.home{
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: $bgc-theme;
}
</style>
