const EventBus = require("../EventBus");

describe("EventBus 订阅-发布设计模式", () => {
  const eventBus = new EventBus();
  it("订阅`click` 发布payload为`F1`", (done) => {
    eventBus.on("click", (name) => {
      expect(name).toBe("F1");
      done();
    });
    setTimeout(() => {
      eventBus.emit("click", "F1");
    }, 100);
  });
  it("移除`click`", (done) => {
    setTimeout(() => {
      eventBus.remove("click");
      expect(eventBus.events.size).toBe(0);
      done();
    }, 200);
  });
});
