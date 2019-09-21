import Vue from 'vue';
import App from 'src/App';
import router from 'src/router'
import store from 'src/store/index';
import 'src/plugins/ant-design-vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');
