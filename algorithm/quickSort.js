/**
 * 交换排序-快速排序(不稳定)
 *
 * 最好O(nlogn) 最坏O(n2) 平均O(nlogn)
 *
 * 1. 随机选取一个值作为基准值
 * 2. 分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
 * 3. 再对左右区间重复第二步，直到各区间只有一个数。
 *
 * @param {number[]} array
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
function quickSort(array, left, right) {
  if (left < right) {
    let i = left;
    let j = right;
    let pivot = array[i];
    while (i < j) {
      while (i < j && array[j] >= pivot) j--;
      if (i < j) {
        array[i] = array[j];
        i++;
      }
      while (i < j && array[i] < pivot) i++;
      if (i < j) {
        array[j] = array[i];
        j--;
      }
    }
    array[i] = pivot;
    quickSort(array, left, i - 1);
    quickSort(array, i + 1, right);
  }
  return array;
}

module.exports = quickSort;
