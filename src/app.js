import Vue from 'vue';
import Icon from './icon';
import Button from './button';
import ButtonGroup from './button-group';

Vue.component('gk-icon', Icon);
Vue.component('gk-button', Button);
Vue.component('gk-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: true
    }
});