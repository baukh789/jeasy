# jeasy
> javascript easy tool

[![Build Status](https://img.shields.io/travis/baukh789/jeasy.svg?style=flat-square)](https://travis-ci.org/baukh789/jeasy)
[![npm version](https://img.shields.io/npm/v/jeasy.svg?style=flat-square)](https://www.npmjs.com/package/jeasy)
[![npm downloads](https://img.shields.io/npm/dt/jeasy.svg?style=flat-square)](https://www.npmjs.com/package/jeasy)
[![coverage](https://img.shields.io/codecov/c/github/baukh789/jeasy.svg?style=flat-square)](https://codecov.io/gh/baukh789/jeasy)

## 安装
```javascript
npm install jeasy --save
```

## 方法介绍
### Date `日期相关`
#### jeasy.moment() `日期函数`

```javascript
// number格式的年月日
jeasy.moment(19880102);

// string格式的年月日
jeasy.moment('19880102');

// 使用`/`相隔的字符串
jeasy.moment('1988/01/02 12:12:22');

// 使作`-`相隔的字符串
jeasy.moment('1988-01-02 12:12:22');

// 时间戳
jeasy.moment(1547285063173);

// format
jeasy.moment(1547285063173).format("YYYY-MM-DD"); // 2019-1-12
jeasy.moment(1547285063173).format("YYYY年MM月DD日"); // 2019年1月12日
jeasy.moment(1547285063173).format("YYYY-MM-DD HH:mm:ss"); // 2019-1-12 17:24:23

// 获取年月日
jeasy.moment(1547285063173).fullYear; // 2019
jeasy.moment(1547285063173).year; // 19
jeasy.moment(1547285063173).month; // 1
jeasy.moment(1547285063173).date; // 12

// 获取时分秒
jeasy.moment(1547285063173).hour; // 17
jeasy.moment(1547285063173).minute; // 24
jeasy.moment(1547285063173).second; // 23

// 获取周
jeasy.moment(1547285063173).day; // 6
```

### Object `对象与JSON相关`
#### jeasy.equal(object1, object2) `验证两个Object是否相同`
```javascript
// 验证对象
let o1 = {name: 'baukh', age: 31};
let o2 = {name: 'baukh', age: 31};
let o3 = {name: 'kouzi', age: 28};
jeasy.equal(o1, o2); // true
jeasy.equal(o1, o3); // false

// 验证字符串
jeasy.equal('baukh', 'baukh'); // true

// 验证数组
let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
let a3 = [3, 2, 1];
jeasy.equal(a1, a2); // true
jeasy.equal(a1, a3); // false
```

#### jeasy.index(array, object) `获取Array中Object的索引`
```javascript
let o1 = {name: 'cc', age: 31};
let o2 = {name: 'kouzi', age: 31};
let o3 = {name: 'baukh', age: 31};
let arr = [{name: 'baukh', age: 31}, {name: 'cc', age: 31}];
jeasy.index(arr, o1); // 1
jeasy.index(arr, o2); // -1
jeasy.index(arr, o3); // 0
```

#### jeasy.clone(obj) `clone 对象`
> 对 JSON.stringify 存在丢失的类型(如function)不作处理。

let o1 = {name: 'cc', age: 31};
let o2 = jeasy.clone(o1);
o1.name; // cc
o1 === o2; // false

#### jeasy.isEmpty(obj) `检测是否为空对象`
```javascrpt
let o1 = {name: 'cc', age: 31};
let o2 = {};
jeasy.isEmpty(o1); // false
jeasy.isEmpty(o2); // true
```

#### jeasy.type(value) `获取传参的类型`
```javascript
jeasy.type(undefined); //undefined
jeasy.type(null); // null
jeasy.type(true); // boolean
jeasy.type(Boolean()); // boolean
jeasy.type(123); // number
jeasy.type(Number(123)); // number
jeasy.type('123'); // string
jeasy.type(String('123')); // string
jeasy.type(() => {}); // function
jeasy.type([]); // array
jeasy.type(new Array(1)); // array
jeasy.type(new Date()); // date
jeasy.type(Error()); // error
jeasy.type(/test/); // regexp
jeasy.type(document.body); // element
jeasy.type(nodeList); // nodeList
jeasy.type(divEle); // element
```

#### jeasy.trim(json) `清除JSON中为[null, undefined]的字段`
```javascript
// 传参为对象
let o = {name: 'kouzi', age: 28, like: null, title: undefined, gender: 0};
jeasy.trim(o); // {name: 'kouzi', age: 28, gender: 0}

// 传参为字符串
let o = '  baukh  ';
jeasy.trim(o); // baukh
```

### String `字符串相关`
#### jeasy.toHump(str) `连字符转驼峰`
```javascript
jeasy.toHump('font-size'); //fontSize
```

#### jeasy.toHyphen(str); `驼峰转连字符`
```javascript
jeasy.toHyphen('FontSize'); // -font-size
```

### Text `文本相关`
#### jeasy.copyText(str) `将文本放粘贴板`
```javascript
jeasy.copyText('font-size'); // 粘贴板中的值为font-size
```

## License
- [License](/LICENSE)
