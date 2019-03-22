/**
 * 数值类相关工具
 */

/**
 * 内部方法: 浮点数转换百分位或千分位
 * @param value: 需要转换的数值
 * @param decimal: 保留小数点位数
 * @param fixed: 是否强制保留decimal指定的位数
 * @returns {*}: 返回格式后的字符串
 */
const _toPercentileOrThousands = (type, value, decimal, fixed) => {
    const map = {
        percentile: {
            digits: 100,
            sign: '%'
        },
        thousands: {
            digits: 1000,
            sign: '‰'
        }
    };
    const now = map[type];
    const decimalPlaces = Math.pow(10, decimal);
    const num = parseInt(value * now.digits * decimalPlaces, 10) / decimalPlaces;
    if (fixed) {
        return Number(num).toFixed(decimal) + now.sign;
    }
    return num + now.sign;
};

/**
 * 浮点数转换百分位
 * @param value: 需要转换的数值
 * @param decimal: 保留小数点位数
 * @param fixed: 是否强制保留decimal指定的位数
 * @returns {*}: 返回百分位格式的字符串
 */
export const toPercentile = (value, decimal, fixed = true) => {
    return _toPercentileOrThousands('percentile', value, decimal, fixed);
};

/**
 * 浮点数转换千分位
 * @param value: 需要转换的数值
 * @param decimal: 保留小数点位数
 * @param fixed: 是否强制保留decimal指定的位数
 * @returns {*}: 返回千分位格式的字符串
 */
export const toThousands = (value, decimal, fixed = true) => {
    return _toPercentileOrThousands('thousands', value, decimal, fixed);
};
