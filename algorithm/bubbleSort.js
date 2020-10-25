/**
 * 交换排序-冒泡排序(稳定)
 * 
 * 最好O(n) 最坏O(n2) 平均O(n2)
 * 
 * @param {number[]} array
 * @returns {number[]}
 */
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // ES6 数组解构
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
