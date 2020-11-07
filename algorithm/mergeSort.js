/**
 * 归并排序
 *
 * 最好O(nlogn) 最坏O(nlogn) 平均O(nlogn)
 *
 * 1. 申请空间，该空间用来存放合并后的序列
 * 2. 比较相同索引元素的大小，放入已排序数组
 * 3. 将另一数组剩下的放入已排序数组
 * 4. 重复以上操作
 */
function mergeSort(array) {
  const len = array.length;
  if (len < 2) return array;
  const middle = Math.floor(len / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

module.exports = mergeSort;
