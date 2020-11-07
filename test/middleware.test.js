const { Koa, compose } = require("../middleware");

describe("实现koa中间件", () => {
  it("捕获错误", (done) => {
    async function handleError(_, next) {
      try {
        await next();
      } catch (error) {
        done();
        expect(error.message).toBe("error");
      }
    }
    async function test() {
      throw Error("error");
    }
    const app = new Koa();
    app.use(handleError);
    app.use(test);
    compose(app.middlewareList)();
  });

  it("洋葱模型", (done) => {
    const callResult = [];
    async function handleError(_, next) {
      callResult.push("handleErrorStart");
      await next();
      callResult.push("handleErrorEnd");
      done();
      expect(callResult).toEqual([
        "handleErrorStart",
        "test",
        "test",
        "handleErrorEnd",
      ]);
    }
    async function test(_, next) {
      callResult.push("test");
      await next();
    }
    const app = new Koa();
    app.use(handleError);
    app.use(test);
    app.use(test);
    compose(app.middlewareList)();
  });
});
