/**
 * 循环队列
 */
class SqQueue {
  constructor(size) {
    this.queue = new Array(size + 1);
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}