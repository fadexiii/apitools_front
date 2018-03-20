import Main from '@/components/message/message.vue'
import Vue from 'vue'

let MessageConstructor = Vue.extend(Main);
let message = function (options) {
  let instance = new MessageConstructor({data:options});
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
};

const install = function (vue) {
  vue.prototype.$message = message
};

export default {install}
