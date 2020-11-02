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
  // 规范 2.2.1 https://promisesaplus.com/#point-23
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        };

  const promise2 = new _Promise((resolve, reject) => {
    if (this.status === PENDING) {
      // 订阅
      this.fulfilledCallbacks.push(() => {
        try {
          const x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      this.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }
    if (this.status === FULFILLED) {
      // 规范 2.2.4 https://promisesaplus.com/#point-34
      setTimeout(() => {
        try {
          const x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }
    if (this.status === REJECTED) {
      setTimeout(() => {
        try {
          const x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
  return promise2;
};

_Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

_Promise.resolve = function (value) {
  return new _Promise((resolve, reject) => {
    if (value instanceof _Promise) value.then(resolve, reject);
    else resolve(value);
  });
};

_Promise.reject = function (reason) {
  return new _Promise((_, reject) => {
    reject(reason);
  });
};

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x)
    reject(new TypeError("Chaining cycle detected for promise #<_Promise>"));
  let called = false;
  // 规范 2.3.3 https://promisesaplus.com/#point-53
  if (x instanceof Object) {
    try {
      const then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

module.exports = _Promise;
