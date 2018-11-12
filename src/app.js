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

import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

// unit test
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'download'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#icon-download');
    vm.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'download',
            loading: true
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#icon-reload');
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'download'
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    button.$el.remove();
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'right',
            iconPosition: 'right'
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    button.$el.remove();
    button.$destroy();
}
{
    // mock
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'right'
        }
    });
    vm.$mount();
    let spy = chai.spy(function(){});
    vm.$on('click', spy);
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();
    vm.$destroy();
}