const _ = require("lodash");
const bubbleSort = require("../bubbleSort");
const { sampleArray } = require("../utils");

describe("冒泡排序", () => {
  it("从小到大排序数组", () => {
    const array = sampleArray();
    expect(bubbleSort(_.cloneDeep(array))).toEqual(array.sort((a, b) => a - b));
  });
});
