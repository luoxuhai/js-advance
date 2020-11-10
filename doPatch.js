/**
 * 渲染差异
 */
const { TEXT, ATTR, REMOVE } = require("./domDiff");
const { render } = require("./vDom");

let rnIndex = 0;

function doPatch(dom, patches) {
  rNodeWalk(dom, patches);
}

function rNodeWalk(node, patches) {
  const rnPatch = patches[rnIndex++];
  const childNodes = node.childNodes;
  for (const key of childNodes) {
    rNodeWalk(childNodes[key], patches);
  }
  if (rnPatch) {
    patchAction(node, rnPatch);
  }
}

function patchAction(node, patch) {
  patch.forEach((item) => {
    switch (item.type) {
      case ATTR:
        for (const key in item.attrs) {
          const value = item.attrs[key];
          if (value) {
            node.setAttribute(key, value);
          } else {
            node.removeAttribute(key);
          }
        }
        break;
      case TEXT:
        node.textContent = item.text;
        break;
      case REMOVE:
        node.remove();
        break;
      default:
        node.parentNode.replaceChild(render(node.newNode), node);
    }
  });
}

module.exports = doPatch;
