<template>
  <!--<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">-->
  <transition name="message">
    <div class="div-message" v-show="show">
      <p>{{mes}}</p>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        show: false,
        mes: ''
      }
    },
    mounted() {
      this.show = true;

      let that = this;
      this.$nextTick(function () {
        setTimeout(function () {
          that.$el.addEventListener('transitionend', that.destroyElement);
          that.show = false;
        }, 3000)
      })
    },
    methods: {
      destroyElement() {
//        this.$el.removeEventListener('animationend', this.destroyElement);
//        this.$el.parentNode.removeChild(this.$el);
//        this.$destroy(true);
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$el.parentNode.removeChild(this.$el);
        this.$destroy(true);
      }
    }
  };

</script>
<style lang="scss">

  .div-message {
    position: fixed;
    top: 3%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 10%;
    background-color: #ebeef5;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .message-enter, .message-leave-to{
    opacity: 0;
    transform: translateY(-150%);
  }

  .message-enter-active, .message-leave-active {
    transition: all 1s;
  }
</style>
