const _ = require("lodash");
const selectionSort = require("../selectionSort");
const { sampleArray } = require("../utils");

describe("选择排序", () => {
  it("从小到大排序数组", () => {
    const array = sampleArray();
    expect(selectionSort(_.cloneDeep(array))).toEqual(
      array.sort((a, b) => a - b)
    );
  });
});
