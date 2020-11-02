class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.getSize() - 1];
  }
  getSize() {
    return this.stack.length;
  }
  isEmpty() {
    return this.getSize() === 0;
  }
}

module.exports = Stack;
