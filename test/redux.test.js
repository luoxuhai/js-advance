const {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} = require("../redux");

const initState = {
  count: 0,
};
function counterReducer(state, action) {
  if (!state) state = initState;
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "SET":
      return { count: action.payload };
    default:
      return state;
  }
}

describe("实现redux", () => {
  const reducer = combineReducers({
    counter: counterReducer,
  });
  it("测试dispatch", (done) => {
    const store = createStore(reducer);

    store.subscribe(() => {
      done();
      expect(store.getState().counter.count).toBe(1);
    });
    store.dispatch({
      type: "INC",
    });
  });

  it("测试applyMiddleware", (done) => {
    const result = [];
    const loggerMiddleware = (store) => (next) => (action) => {
      result.push(2);
      next(action);
      result.push(3);
      result.push(store.getState().counter.count);
      done();
      expect(result).toEqual([1, 2, 3, 5]);
    };
    const timeMiddleware = () => (next) => (action) => {
      result.push(1);
      next(action);
    };
    const store = createStore(
      reducer,
      applyMiddleware(timeMiddleware, loggerMiddleware)
    );
    store.dispatch({
      type: "SET",
      payload: 5,
    });
  });

  it("测试bindActionCreators", (done) => {
    const store = createStore(reducer);
    function increment() {
      return {
        type: "INC",
      };
    }
    function setCount(val) {
      return {
        type: "SET",
        payload: val,
      };
    }
    const actions = bindActionCreators({ increment, setCount }, store.dispatch);
    const sub1 = store.subscribe(() => {
      done();
      expect(store.getState().counter.count).toBe(1);
      sub1();
    });
    actions.increment();
    store.subscribe(() => {
      done();
      expect(store.getState().counter.count).toBe(4);
    });
    actions.setCount(4);
  });
});
