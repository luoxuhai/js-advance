/**
 * 词频统计
 *
 * @param {*} str
 * @returns {{[string]: number}[]}
 */
function wordFrequency(str) {
  const wordMap = {};
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (wordMap[arr[i]]) wordMap[arr[i]] += 1;
    else wordMap[arr[i]] = 1;
  }
  return wordMap;
}

module.exports = wordFrequency;
