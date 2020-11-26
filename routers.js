/**
 *
 * History路由实现
 */
class Routers {
  constructor(base = location.origin) {
    this.routes = new Map();
    this._onPopState();
    this.init(base);
  }
  init(path) {
    history.replaceState({ path: path }, null, path);
    this._handleCallback(path);
  }
  on(path, callback) {
    this.routes.set(path, callback);
  }
  push(path) {
    history.pushState({ path }, null, path);
    this._handleCallback(path);
  }
  replace(path) {
    history.replaceState({ path }, null, path);
    this._handleCallback(path);
  }
  go(n) {
    history.go(n);
  }
  back() {
    history.back();
  }
  forward() {
    history.forward();
  }
  _onPopState() {
    window.addEventListener("popstate", (e) => {
      e.state.path && this._handleCallback(e.state.path);
    });
  }
  _handleCallback(key) {
    this.routes.has(key) && this.routes.get(key)();
  }
}

module.exports = Routers;
