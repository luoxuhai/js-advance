const _ = require("lodash");
const insertionSort = require("../insertionSort");
const { sampleArray } = require("../utils");

describe("插入排序", () => {
  it("从小到大排序数组", () => {
    const array = sampleArray();
    expect(insertionSort(_.cloneDeep(array))).toEqual(array.sort((a, b) => a - b));
  });
});
