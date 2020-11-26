/**
 * 实现redux
 * - createStore
 * - combineReducers
 * - applyMiddleware
 * - bindActionCreators
 * - compose
 *
 * @param {*} reducer
 * @param {*} preloadedState
 */
function createStore(reducer, preloadedState, enhancer) {
  if (typeof preloadedState === "function") {
    enhancer = preloadedState;
    preloadedState = undefined;
    return enhancer(createStore)(reducer, preloadedState);
  }
  let state = preloadedState || {};
  const listeners = [];

  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }
  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      listeners.splice(listeners.indexOf(listener), 1);
    };
  }
  function replaceReducer(newReducer) {
    reducer = newReducer;
    refreshState();
  }
  function refreshState() {
    dispatch({ type: Symbol() });
  }

  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer,
  };
}

/**
 * 合并reducer
 */
function combineReducers(reducers) {
  return function (state, action) {
    let nextState = {};
    for (const key in reducers) {
      const preStateForKey = state[key];
      const nextStateForKey = reducers[key](preStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  };
}

/**
 * 组合中间件
 *
 * @param  {Function[]} middlewares
 * @returns {(store: Function) => Function}
 */
function applyMiddleware(...middlewares) {
  return function rewriterCreateStore(oldCreateStore) {
    return function newCreateStore(reducer, preloadedState) {
      const store = oldCreateStore(reducer, preloadedState);
      const dispatch = store.dispatch;
      store.dispatch = compose(
        ...middlewares.map((middleware) => middleware(store))
      )(dispatch);
      return store;
    };
  };
}

/**
 * 包装action creator
 *
 * @param {{[string]: Function}} actionCreators
 * @param {Function} dispatch
 * @returns {{[string]: Function}}
 */
function bindActionCreators(actionCreators, dispatch) {
  const actions = {};
  for (const key in actionCreators) {
    if (actionCreators.hasOwnProperty(key)) {
      actions[key] = function () {
        return dispatch(actionCreators[key](...arguments));
      };
    }
  }
  return actions;
}

/**
 * 从右到左来组合多个函数
 *
 * @param  {Function[]} funcs
 * @returns {Function}
 */
function compose(...funcs) {
  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

module.exports = {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
  compose,
};
