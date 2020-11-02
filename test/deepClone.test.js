const { deepClone, deepCloneMC } = require("../deepClone");

describe("深克隆", () => {
  it("不使用MessageChannel", () => {
    const obj = {
      age: 1,
      jobs: {
        first: "FE",
      },
      children: ["1", "2"],
    };
    const newObj = deepClone(obj);
    newObj.age = 2;
    newObj.jobs.first = "FE2";
    newObj.children[0] = "0";
    expect(obj).toEqual({
      age: 1,
      jobs: {
        first: "FE",
      },
      children: ["1", "2"],
    });
  });
  // nodejs 没有MessageChannel
  // it("使用MessageChannel", async () => {
  //   const sex = Symbol("male");
  //   const obj = {
  //     age: 1,
  //     sex,
  //     jobs: {
  //       first: "FE",
  //     },
  //     children: ["1", "2"],
  //   };
  //   const newObj = await deepCloneMC(obj);
  //   newObj.age = 2;
  //   newObj.jobs.first = "FE2";
  //   newObj.children[0] = "0";
  //   expect(obj).toEqual({
  //     age: 1,
  //     sex,
  //     jobs: {
  //       first: "FE",
  //     },
  //     children: ["1", "2"],
  //   });
  // });
});
