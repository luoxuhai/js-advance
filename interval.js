/**
 * 使用setTimeout实现setInterval
 */
function _setInterval(callback, time, ...args) {
  setTimeout(
    (...args) => {
      callback.call(this, ...args);
      _setInterval(callback, time);
    },
    time,
    ...args
  );
}

module.exports = _setInterval;
