/**
 * 字符串相关工具
 */

/**
 * 字符格式转换: 连字符转驼峰
 * @param text
 * @returns {*}
 */
export const toHump = text => {
    return text.replace(/-\w/g, str => {
        return str.split('-')[1].toUpperCase();
    });
};

/**
 * 字符格式转换: 驼峰转连字符
 * @param text
 * @returns {string}
 */
export const toHyphen = text => {
    return text.replace(/([A-Z])/g, '-$1').toLowerCase();
};
