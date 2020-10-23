/**
 * 选择排序-简单选择排序(不稳定)
 * 
 * 最好O(n2) 最坏O(n2) 平均O(n2)
 * 
 * 1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
 * 2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 3. 重复第二步，直到所有元素均排序完毕。
 * 
 * @param {number[]} array
 * @returns {number[]}
 */
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

module.exports = selectionSort;
