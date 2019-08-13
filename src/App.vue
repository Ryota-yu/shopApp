<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <Ctabber/>
    </div>
  </div>
</template>

<script>
    import Ctabber from './components/tabber/index'

    export default {
      name: 'App',
      components: {
        Ctabber
      }
    }
</script>
