/**
 * 插入排序-希尔排序
 *
 * 平均O(nlogn)
 *
 * 1. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
 * 2. 按增量序列个数k，对序列进行k 趟排序；
 * 3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，
 * 整个序列作为一个表来处理，表长度即为整个序列的长度。
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function shellSort(array) {
  let gap = 1;
  const len = array.length;
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      let j = i - gap;
      const temp = array[i];
      while (j >= 0 && array[j] > temp) {
        array[j + gap] = array[j];
        j -= gap;
      }
      array[j + gap] = temp;
    }
  }
  return array;
}

module.exports = shellSort;
