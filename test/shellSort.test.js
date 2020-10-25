const _ = require("lodash");
const shellSort = require("../algorithm/shellSort");
const { sampleArray } = require("../utils");

describe("插入排序-希尔排序", () => {
  it("从小到大排序数组", () => {
    const array = sampleArray();
    expect(shellSort(_.cloneDeep(array))).toEqual(array.sort((a, b) => a - b));
  });
});
