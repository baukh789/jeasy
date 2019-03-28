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
 * 清除JSON中为[null, undefined]的字段
 * @param obj: 支持字符串和对象两种格式
 * @returns {{}}
 */
export const trim = obj => {
    // string
    if (typeof obj === 'string') {
        return obj.trim();
    }

    // object
    return Object.keys(obj).reduce((prev, cur) => {
        const curValue = obj[cur];
        if (type(curValue) === 'undefined' || type(curValue) === 'null') {
            return prev;
        }
        prev[cur] = curValue;
        return prev;
    }, {});
};


/**
 * Object转换为queryString
 * @param {Object} formData 
 * @param {String} delimiter 
 */
export function toQueryString(formData, delimiter = '&') {
    const rs = Object.keys(formData).reduce((result, key) => {
        let value = formData[key];
        if (value == null) return result;

        value = typeof value === 'object' ? JSON.stringify(value) : value; // 处理参数为对象的形式
        value = encodeURIComponent(value);
        return `${result}${delimiter}${key}=${value}`
    }, '');
    return rs.replace(delimiter, '');
}