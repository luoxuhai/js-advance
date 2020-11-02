/**
 * event bus 订阅-发布设计模式
 */
class EventBus {
  constructor(max = 10) {
    this.events = new Map();
    this.max = max;
  }
  on(type, callback) {
    if (this.events.size < this.max && !this.events.has(type)) {
      this.events.set(type, callback);
      return true;
    }
  }
  emit(type, payload) {
    const event = this.events.get(type);
    if (event) {
      event.call(this, payload);
    }
    return true;
  }
  remove(type) {
    this.events.delete(type);
  }
}

module.exports = EventBus;
