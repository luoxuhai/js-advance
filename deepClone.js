/**
 * 深克隆
 *
 * 不支持函数和Symbol
 *
 * @param {{[string]:any}} obj
 */
function deepClone(obj) {
  const result = obj instanceof Array ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (/Object|Array/.test(Object.prototype.toString.call(obj[key])))
        result[key] = deepClone(obj[key]);
      else result[key] = obj[key];
    }
  }
  return result;
}

// 使用MessageChannel 不支持函数
function deepCloneMC(obj) {
  return new Promise((resolve, reject) => {
    const { port1, port2 } = new MessageChannel();
    port2.onmessage = ({ data }) => resolve(data);
    port1.postMessage(obj);
    port1.onmessageerror = (ev) => reject(ev);
  });
}

module.exports = { deepClone, deepCloneMC };
