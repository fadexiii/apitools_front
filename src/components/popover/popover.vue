<template>
  <div class="div-popover" v-if="show">
    <div class="triangle"></div>
    <div class="content">
      this is content
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {}
  }
</script>
<style lang="scss">
  .div-popover {
    position: absolute;

    .triangle {
      width: 0;
      height: 0;
      border: 6px solid;
      border-color: transparent transparent #ebeef5 transparent;
      margin-left: auto;
      margin-right: auto;
    }
    .content {
      background-color: #fff;
      border: 1px solid #ebeef5;
      border-radius: 4px;
    }
  }
</style>
