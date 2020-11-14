# JavaScript 笔试/面试手写代码题

## 目录

1. ### 算法

   - [冒泡排序](./algorithm/bubbleSort.js)
   - [快速排序](./algorithm/quickSort.js)
   - [选择排序](./algorithm/selectionSort.js)
   - [插入排序](./algorithm/insertionSort.js)
   - [希尔排序](./algorithm/shellSort.js)
   - [归并排序](./algorithm/mergeSort.js)
   - [堆排序](./algorithm/heapSort.js)
   - [二分查找](./algorithm/binarySerach.js)
   - [数组去重](./algorithm/unique.js)
   - [两个数不使用四则运算得出和](./algorithm/sum.js)
   - [数组扁平化](./algorithm/flatten.js)
   - [最长递增子序列](./algorithm/lis.js)

2. ### 字符串

   - [解析 URL Params](./character_string/parseParams.js)
   - [实现千位分隔符](./character_string/parseToMoney.js)
   - [词频统计](./character_string/wordFrequency.js)
   - [去除字符串首尾空格](./character_string/trim.js)

3. ### JavaScript

   - [实现 bind()](./bind.js)
   - [实现 apply()](./apply.js)
   - [实现 call()](./call.js)
   - [实现 instanceof](./instanceof.js)
   - [实现 Object.create()](./Object.create.js)
   - [实现 new](./new.js)
   - [实现 继承](./extend.js)
   - [实现 jsonp](./JSONP.js)
   - [实现 Promise](./Promise.js)
   - [实现 EventBus 订阅监听模式](./EventBus.js)
   - [setTimeout 实现 setInterval](./interval.js)
   - [深拷贝](./deepClone.js)
   - [防抖函数](./debounce.js)
   - [节流函数](./throttle.js)
   - [函数柯里化（实现 `sum(1,2)(3)()`）](./currying.js)

4. ### 概念

   - 原型链

     1. 大多数函数都有一个 `prototype` 属性，该属性是一个对象
     2. 每个对象都有一个隐藏的 `__proto__` 属性，指向了创建该对象的构造函数的 `prototype` 属性
     3. 通过 `__proto__` 属性引用的对象就叫做原型
     4. `__proto__` 属性将对象和原型连接起来组成了原型链
     5. 对象通过原型链来寻找不属于该对象的属性

## 测试

```bash
npm install
# or
yarn

npm run test
# or
yarn test
```
