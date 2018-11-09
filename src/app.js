import Vue from 'vue';
import Button from './button';
import Icon from './icon';

Vue.component('gk-button', Button);
Vue.component('gk-icon', Icon);

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
});