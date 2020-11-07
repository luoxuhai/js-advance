/**
 * 虚拟DOM
 *
 * 1. 通过 JS 来模拟创建 DOM 对象
 * 2. 判断两个对象的差异 diff算法 深度遍历和同层对比
 * 3. 渲染差异
 */

class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

function render({ type, props, children }) {
  const el = window.document.createElement(type);
  for (const key in props) {
    el.setAttribute(key, props[key]);
  }
  children.forEach((item) => {
    const node = 
      item instanceof Element
        ? render(item)
        : window.document.createTextNode(item);
    el.append(node);
  });
  return el;
}

function renderDOM(rDom, rootEl) {
  rootEl.append(rDom);
}

function createElement(type, props, children) {
  return new Element(type, props, children);
}

module.exports = {
  createElement,
  renderDOM,
  render,
};
