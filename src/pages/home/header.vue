<template>
    <div class="home-header">
        <baseNavBar class="home-header-nav" title="jqjqjqjqjqjqjqqj">
            <i class="iconfont icon-scan" slot="left"></i>
            <div slot="middle">搜索框</div>
            <i class="iconfont icon-msg" slot="right"></i>
        </baseNavBar>
    </div>
</template>

<script>
    import baseNavBar from '../../base/navbar'

    export default {
      name: 'home-header',
      components: {
        baseNavBar
      }
    }
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/_mixins";

    .home-header-nav{
        /* 这里设置的仍然是home-header-nav（导航条）的样式，只不过是利用子组件来加重自己样式的优先级，才不会被子组件的样式所覆盖 */
        &.base-navbar{
            background-color: transparent;
        }

        .iconfont{
            color:$icon-color-default;
            font-size: $icon-font-size;
        }
    }
</style>
