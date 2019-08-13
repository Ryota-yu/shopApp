<template>
<!-- 用于页面顶部导航条的基础组件，是个子组件，导航条的内容由各页面组件通过插槽来提供 -->
    <div class="base-navbar">
        <!-- v-if执行判断，如果该插槽没有被页面使用，则不分配位置 -->
        <div class="base-navbar-left" v-if="$slots.left">
            <slot name="left"></slot>
        </div>
        <div class="base-navbar-middle"  v-if="$slots.middle">
            <slot name="middle"></slot>
        </div>
        <div class="base-navbar-right"  v-if="$slots.right">
            <slot name="right"></slot>
        </div>

        <!-- 如果父组件有传入的title值才显示，显示内容为title值 -->
        <h1 class="base-navbar-title" v-if="title">
            <span class="base-navbar-title-text" v-text="title"></span>
        </h1>
    </div>
</template>
<script>
    export default {
      name: 'base-navbar',
      props: {
        title: {
          type: String,
          default: ''
        }
      }
    }
</script>
<style lang="scss" scoped>
    @import "../assets/scss/_mixins";

    .base-navbar{
        @include flex-between();
        position: relative;     /* 供right组件考虑 */
        height: 50px;
        background: #fff;

        &-left{
            margin-left: 10px;

            /* 如果左侧插槽存在，则取消右侧插槽的绝对定位 */
            ~ .base-navbar-right{
                position: static;
            }
        }

        &-middle{
            flex: 1;        /* 中间部分填充剩余空间 */
            margin: 0 10px;

            /* 如果中部插槽存在，则取消右侧插槽的绝对定位 */
            ~ .base-navbar-right{
                position: static;
            }
        }

        &-right{
            position: absolute;     /* 如果left middle插槽都不存在，则使用绝对定位 */
            right: 0;
            margin-right: 10px;

            @include flex-center(); /* 因为使用了绝对定位，所以之前设置的水平居中无效，所以需要自己重新设置 */
            height: 100%;
        }

        &-title{
            /* 标题始终都是居中，所以使用绝对定位，这里是title这个容器的水平居中 */
            position: absolute;
            top: 0;
            bottom: 0;
            left: 20%;
            right:20%;      /* left与right应该根据title的多少自主调整 */

            /* title容器里面的内容的水平居中 */
            @include flex-center();

            &-text{
                font-size: 18px;
                @include ellipsis();
                line-height: 1.5;       /* 解决j q这些字母会显示不全的bug */
            }
        }
    }
</style>
