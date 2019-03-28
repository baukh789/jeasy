# jeasy
> javascript easy tool

[![Build Status](https://travis-ci.com/baukh789/jeasy.svg?branch=master)](https://travis-ci.com/baukh789/jeasy)
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
> jeasy.moment并不对时区进行处理，如果有需要使用时区的请直接使用[moment](https://www.npmjs.com/package/moment)库。

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
jeasy.moment(1547285063173).format("YYYY-MM-DD"); // 2019-01-12
jeasy.moment(1547285063173).format("YYYY年MM月DD日"); // 2019年01月12日
jeasy.moment(1547285063173).format("YYYY-MM-DD HH:mm:ss"); // 2019-01-12 17:24:23

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

#### jeasy.find(array, key, value) `通过指定字段筛选Array`
```javascript
const arr = [{name: 'baukh', age: 31}, {name: 'cc', age: 30}, {name: 'kouz', age: 29}, {name: 'rabbit', age: 28}];
jeasy.find(arr, 'name', 'baukh'); // [{name: 'baukh', age: 31}]
jeasy.find(arr, 'age', 29); // [{name: 'kouz', age: 29}]
jeasy.find(arr, 'age', 33); // []
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

### jeasy.toQueryString(formData) `Object转换为queryString`
```javascript
// 传参为常规json
jeasy.toQueryString({ name:'zhangsan', age: 12 }); // 'name=zhangsan&age=12'

// 传参存在空值的json
jeasy.toQueryString({ name:'zhangsan', age: '' }); // 'name=zhangsan&age='

// 传参存在null值和对象的json
jeasy.toQueryString({ name: 'zhangsan', params: { name: 'zhangsan', age: 12 }, page: { currentPage: 1, pageSize: 10 }, other: null });
// => 'name=zhangsan&params={"name":"zhangsan","age":12}&page={"currentPage":1,"pageSize":10}&other=null'

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

### jeasy.toFormData(str) `queryString的形式解析成对象`
```javascript
// 常规值
jeasy.toFormData('name=zhangsan&age=22&gender=male') //{name:'zhangsan', age: '22', gender:'male'}

// 首字符为?号型式
jeasy.toFormData('?name=zhangsan&age=22&gender=male') //{name:'zhangsan', age: '22', gender:'male'}

// 包含空值
jeasy.toFormData('name=zhangsan&birth=') //{name:'zhangsan', birth:''}

// 包含类对像值
jeasy.toFormData('name=zhangsan&other={gender: "male"}') //{name:'zhangsan', other: "{gender: \"male\"}"}}
```

### Text `文本相关`
#### jeasy.copyText(str) `将文本放粘贴板`
```javascript
jeasy.copyText('font-size'); // 粘贴板中的值为font-size
```

#### jeasy.getTextWidth(text) `获取文本所占宽度`
```javascript
// 需要注意: 获取的宽度与当前document.body上所设置的`font-size`, `font-weight`, `font-family`有关。
document.body.style.fontSize = '12px';
document.body.style.fontFamily = 'Tahoma';
document.body.style.fontWeight = '400';

jeasy.getTextWidth('aaa'); // 18
jeasy.getTextWidth('测试宽度'); // 48
```

### Number `数字相关`
#### jeasy.toPercentile(value, decimal, fixed) `浮点数转换百分位`
```javascript
// @param value: 需要转换的数值
// @param decimal: 保留小数点位数
// @param fixed: 是否强制保留decimal指定的位数
// @returns {*}: 返回百分位格式的字符串
jeasy.toPercentile(0.1230123, 1); // '12.3%'
jeasy.toPercentile(0.1230123, 2); // '12.30%'
jeasy.toPercentile(0.1230123, 2, false); // '12.3%'
```

#### jeasy.toThousands(value, decimal, fixed) `浮点数转换千分位`
```javascript
// @param value: 需要转换的数值
// @param decimal: 保留小数点位数
// @param fixed: 是否强制保留decimal指定的位数
// @returns {*}: 返回千分位格式的字符串
jeasy.toThousands(value, 1); // '123.0‰'
jeasy.toThousands(value, 1, false); // '123‰'
jeasy.toThousands(value, 2); // '123.01‰'
jeasy.toThousands(value, 2, false); // '123.01‰'
```

### File `文件相关`
#### jeasy.download(response, fileName);
```javascript
// @param response: 通过后端接口返回二进制流(blob)。response允许两种格式: 1.blob; 2.{data: blob};
// @param fileName: 文件名称
jeasy.download(response, fileName); // 文件下载

```
## License
- [License](/LICENSE)
