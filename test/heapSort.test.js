const _ = require("lodash");
const heapSort = require("../algorithm/heapSort");
const { sampleArray } = require("../utils");

describe("堆排序", () => {
  it("从小到大排序数组", () => {
    const array = sampleArray();
    expect(heapSort(_.cloneDeep(array), 0, array.length - 1)).toEqual(
      array.sort((a, b) => a - b)
    );
  });
});
