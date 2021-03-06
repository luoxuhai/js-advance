const _ = require("lodash");
const quickSort = require("../algorithm/quickSort");
const { sampleArray } = require("../utils");

describe("交换排序-快速排序", () => {
  it("从小到大排序数组", () => {
    const array = sampleArray();
    expect(quickSort(_.cloneDeep(array), 0, array.length - 1)).toEqual(
      array.sort((a, b) => a - b)
    );
  });
});
