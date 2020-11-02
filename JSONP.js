/**
 * jsonp的实现
 */
function JSONP({ url, params = {}, callback }) {
  params._cb = "callback";
  window.callback = callback;
  const paramsStr = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  const node = document.createElement("script");
  node.src = url + "?" + paramsStr;
  document.body.appendChild(node);
}

JSONP({
  url: "http://s.weibo.com/ajax/jsonp/suggestion",
  params: {
    key: "test",
  },
  callback(result) {
    console.log(result.data);
  },
});
