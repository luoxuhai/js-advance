/**
 * 二分查找: 要求线性表必须采用顺序存储结构且元素按关键字有序排列
 * 
 * 最好O(logn) 最坏O(logn) 平均O(logn)
 * 
 * 1. 首先设两个指针，low和height，表示最低索引和最高索引
 * 2. 然后取中间位置索引middle，判断middle处的值是否与所要查找的数相同，相同则结束查找，
 * middle处的值比所要查找的值小就把low设为middle+1，如果middle处的值比所要查找的值大就把height设为middle-1
 * 3. 然后再新区间继续查到，直到找到或者low>height找不到所要查找的值结束查找
 * 
 * @param {number[]} array
 * @param {number} target
 * @returns {number}
 */
function binarySearch(array, target) {
  let low = 0;
  let height = array.length - 1;
  while (low <= height) {
    const middle = Math.floor((low + height) / 2);
    if (target === array[middle]) return middle;
    else if (target > array[middle]) low = middle + 1;
    else height = middle - 1;
  }
  return -1;
}

module.exports = binarySearch;
