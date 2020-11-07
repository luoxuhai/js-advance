const _Promise = require("../Promise");

describe("实现Promise", () => {
  it("`then`链式调用", (done) => {
    const p1 = new _Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error");
        resolve("success");
      }, 100);
    });
    p1.then((value) => {
      console.log(value);
    })
      .then()
      .catch((reason) => {
        done();
        expect(reason).toBe("error");
      });
  });
  it("静态方法`resolve reject`", (done) => {
    _Promise.resolve("success").then((value) => {
      done();
      expect(value).toBe("success");
    });
    _Promise
      .resolve(
        new _Promise((resolve) => {
          setTimeout(() => {
            resolve("success");
          }, 100);
        })
      )
      .then((value) => {
        done();
        expect(value).toBe("success");
      });
    _Promise.reject("error").catch((reason) => {
      done();
      expect(reason).toBe("error");
    });
  });
  it("静态方法`all race`", (done) => {
    const p1 = Promise.resolve(3);
    const p2 = 42;
    const p3 = new _Promise((resolve) => {
      setTimeout(resolve, 100, "foo");
    });
    const p4 = new Promise((resolve) => {
      setTimeout(resolve, 500, "one");
    });

    _Promise.all([p1, p2, p3]).then((value) => {
      done();
      expect(value).toEqual([3, 42, "foo"]);
    });
    _Promise.race([p3, p4]).then((value) => {
      done();
      expect(value).toBe("foo");
    });
  });
});
