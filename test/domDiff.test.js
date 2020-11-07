const domDiff = require("../domDiff");
const { createElement } = require("../vDom");

it("虚拟DOM diff算法", () => {
  const vDom1 = createElement("ul", { class: "list" }, [
    createElement(
      "li",
      { class: "item", style: "color: #f00", "data-id": 152 },
      ["Item 1"]
    ),
    createElement("li", { class: "item" }, [
      createElement("a", { class: "link" }, ["link"]),
    ]),
    createElement("li", { class: "item" }, ["Item 2"]),
  ]);
  const vDom2 = createElement("ul", { class: "list" }, [
    createElement("li", { class: "item", style: "width: 100px" }, ["Item 2"]),
    createElement("li", { class: "item2" }, [
      createElement("div", { class: "div" }, ["div"]),
    ]),
  ]);
  const pathchs = domDiff(vDom1, vDom2);
  expect(pathchs).toEqual({
    1: [
      {
        attrs: {
          "data-id": undefined,
          style: "width: 100px",
        },
        type: "ATTR",
      },
    ],
    2: [
      {
        text: "Item 2",
        type: "TEXT",
      },
    ],
    3: [
      {
        attrs: {
          class: "item2",
        },
        type: "ATTR",
      },
    ],
    4: [
      {
        newNode: {
          children: ["div"],
          props: {
            class: "div",
          },
          type: "div",
        },
        type: "REPLACE",
      },
    ],
    5: [
      {
        index: 5,
        type: "REMOVE",
      },
    ],
  });
});
