import Vue from 'vue';
import isVNode from '@/utils/vdom';
import Confirm from './src/confirm';

/* istanbul ignore next */
Confirm.install = function (Vue) { // eslint-disable-line
  Vue.component(Confirm.name, Confirm);
};

let instance;
const ConfirmConstructor = Vue.extend(Confirm);

const initInstance = () => {
  instance = new ConfirmConstructor({
    el: document.createElement('div'),
  });
};

Confirm.root = function (message, options) {
  /* istanbul ignore if */
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof message === 'object' && !isVNode(message)) {
    options = message;
    message = '';
  } else {
    options.message = message;
  }
  if (!instance) {
    initInstance();
  }
  Object.keys(options).forEach(key => {
    instance[key] = options[key];
  });
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  } else {
    delete instance.$slots.default;
  }
  document.body.appendChild(instance.$el);
  if (typeof instance.ok === 'function') {
    instance.ok = instance.ok.bind(instance);
  }
  if (typeof instance.cancel === 'function') {
    instance.cancel = instance.cancel.bind(instance);
  }
  Vue.nextTick(() => {
    instance.visible = true;
  });
};

export default Confirm;
