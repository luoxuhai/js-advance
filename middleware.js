/**
 * 实现koa中间件
 *
 */
function Koa() {
  this.middlewareList = [];
  this.use = function (fn) {
    this.middlewareList.push(fn);
    return this;
  };
}

/**
 * 组合中间件
 *
 * @param {Function[]} middlewareList
 * @returns {(ctx: object) => void}
 */
function compose(middlewareList) {
  return function (ctx) {
    function dispatch(i) {
      if (middlewareList.length > i) {
        const fn = middlewareList[i];
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
      }
    }
    dispatch(0);
  };
}

module.exports = {
  Koa,
  compose,
};
