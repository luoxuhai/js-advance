/**
 * 数组扁平化
 *
 * @param {any[]} array
 * @returns {any[]}
 */
function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = flatten;
