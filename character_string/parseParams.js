/**
 * 解析 URL Params 为对象
 *
 * @param {string} url
 * @returns {{[string]: string | boolean | string[]}}
 */
function parseParams(url) {
  const paramsArr = url.split("?")[1].split("&");
  const params = {};
  paramsArr.forEach((item) => {
    let [key, value] = item.split("=");
    if (!value) value = true;
    else value = decodeURIComponent(value);
    if (params.hasOwnProperty(key)) {
      if (Array.isArray(params[key])) params[key].push(value);
      else params[key] = [params[key], value];
    } else params[key] = value;
  });
  return params;
}

module.exports = parseParams;
