const PENDING = Symbol("PENDING");
const FULFILLED = Symbol("FULFILLED");
const REJECTED = Symbol("REJECTED");

/**
 * 实现Promise
 *
 * @description https://promisesaplus.com
 * @param {(resolve: Function, reject: Function) => void} excutor
 * @returns {Promise}
 */
function _Promise(excutor) {
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.fulfilledCallbacks = [];
  this.rejectedCallbacks = [];

  const resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      // 发布
      this.fulfilledCallbacks.forEach((fn) => fn());
    }
  };
  const reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      // 发布
      this.rejectedCallbacks.forEach((fn) => fn());
    }
  };
  try {
    excutor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

_Promise.prototype.then = function (onFulfilled, onRejected) {
  // 规范 2.2.1 https://promisesaplus.com/#point-230
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        };

  const promise2 = new _Promise((resolve, reject) => {
    const fulfilledCallback = (resolve, reject) => {
      try {
        const x = onFulfilled(this.value);
        resolvePromise(promise2, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };
    const rejectedCallback = (resolve, reject) => {
      try {
        const x = onRejected(this.reason);
        resolvePromise(promise2, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };
    if (this.status === PENDING) {
      // 订阅
      this.fulfilledCallbacks.push(() => fulfilledCallback(resolve, reject));
      this.rejectedCallbacks.push(() => rejectedCallback(resolve, reject));
    }
    if (this.status === FULFILLED) {
      // 规范 2.2.4 https://promisesaplus.com/#point-34
      setTimeout(() => fulfilledCallback(resolve, reject));
    }
    if (this.status === REJECTED) {
      setTimeout(() => rejectedCallback(resolve, reject));
    }
  });
  return promise2;
};

_Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

_Promise.resolve = function (value) {
  return value instanceof _Promise
    ? value
    : new _Promise((resolve) => {
        resolve(value);
      });
};

_Promise.reject = function (reason) {
  return new _Promise((_, reject) => {
    reject(reason);
  });
};

_Promise.all = function (iterable) {
  const result = [];
  let count = 0;
  return new _Promise((resolve, reject) => {
    iterable.forEach((item, index) => {
      _Promise.resolve(item).then((value) => {
        result[index] = value;
        if (++count === iterable.length) resolve(result);
      }, reject);
    });
  });
};

_Promise.race = function (iterable) {
  return new _Promise((resolve, reject) => {
    iterable.forEach((item) => {
      _Promise.resolve(item).then(resolve, reject);
    });
  });
};

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x)
    reject(new TypeError("Chaining cycle detected for promise #<_Promise>"));
  // 规范 2.3.3 https://promisesaplus.com/#point-53
  if (x instanceof Object) {
    try {
      const then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => resolvePromise(promise2, y, resolve, reject),
          (r) => reject(r)
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      reject(e);
    }
  } else {
    resolve(x);
  }
}

module.exports = _Promise;
