const _ = require("lodash");
const mergeSort = require("../algorithm/mergeSort");
const { sampleArray } = require("../utils");

describe("归并排序", () => {
  it("从小到大排序数组", () => {
    const array = sampleArray();
    expect(mergeSort(_.cloneDeep(array))).toEqual(array.sort((a, b) => a - b));
  });
});
