/**
 * 插入排序-直接插入排序(稳定)
 *
 * 最好O(n) 最坏O(n2) 平均O(n2)
 *
 * 1. 从第一个元素开始，该元素可以认为已经被排序。
 * 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描。
 * 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置。
 * 4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置。
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    const temp = array[i];
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

module.exports = insertionSort;
