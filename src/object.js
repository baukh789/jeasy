/**
 * Object 相关工具
 */

/**
 * 验证两个Object是否相同
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
export const equal = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

/**
 * 获取Array中Object的索引
 * @param arr
 * @param obj
 * @returns {number}
 */
export const index = (arr, obj) => {
    let index = -1;
    let isInclude = false;
    arr.some((item, i) => {
        isInclude = equal(item, obj);
        if (isInclude) {
            index = i;
        }
        return equal(item, obj);
    });
    return index;
};

/**
 * 通过指定字段筛选Array
 * @param arr: 匹配的数据
 * @param key: 用来做验证的字段名
 * @param value: 匹配的值
 * @returns array
 */
export const find = (arr, key, value) => {
    return arr.filter(item => {
        if (item[key] === value) {
            return item;
        }
    });
};

/**
 * clone 对象, 对 JSON.stringify 存在丢失的类型(如function)不作处理。
 * @param obj
 * @returns {any}
 */
export const clone = obj => {
    return JSON.parse(JSON.stringify(obj));
};


/**
 * 检测是否为空对象
 * @param obj
 * @returns {boolean}
 */
export const isEmpty = obj => {
    let isEmptyObj = true;
    for (const pro in obj) {
        if(obj.hasOwnProperty(pro)) {
            isEmptyObj = false;
        }
    }
    return isEmptyObj;
};

/**
 * 获取传参的类型
 * @param value
 * @returns {*|string}
 */
export const type = value => {
    const class2type = {
        '[object String]': 'string',
        '[object Boolean]': 'boolean',
        '[object Undefined]': 'undefined',
        '[object Number]': 'number',
        '[object Object]': 'object',
        '[object Error]': 'error',
        '[object Function]': 'function',
        '[object Date]': 'date',
        '[object Array]': 'array',
        '[object RegExp]': 'regexp',
        '[object Null]': 'null',
        '[object NodeList]': 'nodeList',
        '[object Arguments]': 'arguments',
        '[object Window]': 'window',
        '[object HTMLDocument]': 'document'
    };
    return class2type[Object.prototype.toString.call(value)] || (value instanceof Element ? 'element' : '');
};

/**
 * 传入为字符串时: 清除前后空格; 传入为JSON时: 非递归清除为[null, undefined]的字段, 不会修改原对象
 * @param obj: 支持字符串和对象两种格式
 * @param deep: 是否递归清除，只在处理object时生效
 * @returns {{}}
 */
export const trim = (obj, deep) => {
    // string
    if (typeof obj === 'string') {
        return obj.trim();
    }

    // object
    if (type(obj) === 'object') {
        return Object.keys(obj).reduce((prev, cur) => {
            let curValue = obj[cur];
            const valType = type(curValue);
            if (valType === 'undefined' || valType === 'null') {
                return prev;
            }
            if (deep && valType === 'object') {
                prev[cur] = trim(curValue, deep);
                return prev;
            }
            if (deep && valType === 'array') {
                prev[cur] = curValue.map(item => {
                    return trim(item, deep);
                });
                return prev;
            }
            prev[cur] = curValue;
            return prev;
        }, {});
    }

    // 其它
    return obj;
};

/**
 * Object转换为queryString
 * @param {Object} formData
 */
export const toQueryString = formData => {
    let result = '';
    for(let key in formData) {
        let value = formData[key];
        value = typeof value === 'object' ? JSON.stringify(value) : value; // 处理参数为对象的形式
        result = `${result}&${key}=${value}`
    }
    return result.replace('&', '');
};
