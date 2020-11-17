// index.js
import helloWorld from './index.vue';
helloWorld.install = function(Vue) {
  Vue.component(helloWorld.name, helloWorld);
};
export default helloWorld;
