const ATTR = "ATTR";
const TEXT = "TEXT";
const REMOVE = "REMOVE";
const REPLACE = "REPLACE";
let patches = {};
let vnIndex = 0;

/**
 * diff算法
 *
 * 4种情况：
 * 1. ATTR 修改属性
 * 2. TEXT 修改文本
 * 3. REMOVE 移除节点
 * 4. REPLACE 取代节点
 *
 * @param {*} oldVDom
 * @param {*} vDom
 */
function domDiff(oldVDom, vDom) {
  vnWalk(oldVDom, vDom, vnIndex);
  return patches;
}

function vnWalk(oldNode, node, index) {
  let vnPatch = [];
  if (!node) {
    vnPatch.push({
      type: REMOVE,
      index,
    });
  } else if (typeof oldNode === "string" && typeof node === "string") {
    if (oldNode !== node) {
      vnPatch.push({
        type: TEXT,
        text: node,
      });
    }
  } else if (oldNode.type === node.type) {
    const attrPatch = attrsWalk(oldNode.props, node.props);
    if (Object.keys(attrPatch).length > 0) {
      vnPatch.push({
        type: ATTR,
        attrs: attrPatch,
      });
    }
    childrenWalk(oldNode.children, node.children);
  } else {
    vnPatch.push({
      type: REPLACE,
      newNode: node,
    });
  }
  if (vnPatch.length > 0) {
    patches[index] = vnPatch;
  }
}

function attrsWalk(oldProps, props) {
  const attrPatch = {};
  for (const key in oldProps) {
    if (oldProps[key] !== props[key]) {
      attrPatch[key] = props[key];
    }
  }
  for (const key in props) {
    if (!oldProps.hasOwnProperty(key)) {
      attrPatch[key] = props[key];
    }
  }
  return attrPatch;
}

function childrenWalk(oldChildren, children) {
  oldChildren.forEach((item, index) => {
    vnWalk(item, children[index], ++vnIndex);
  });
}

module.exports = domDiff;
