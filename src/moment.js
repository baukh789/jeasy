/**
 * 日期时间相关工具
 */
class Moment {
    constructor(value) {
        switch (typeof value) {
            // 当前为数字
            case 'number': {
                // 时间戳
                if (value.toString().length === 13) {
                    this.parseDate(new Date(value));
                    return;
                }
                this.parseStr(value.toString());
                break;
            }

            // 当前为字符串
            case 'string': {
                this.parseStr(value);
                break;
            }

            // 当前为时间对象
            case 'object': {
                this.parseDate(value.constructor === Date ? value : new Date(value));
                break;
            }

            default: {
                this.parseDate(new Date(value));
                break;
            }
        }
    }

    /**
     * 解析字符串格式
     * @param str
     */
    parseStr(str) {
        const cleanValue = str.replace(/\D/g, '');
        const ds = {
            fullYear_str: cleanValue.substr(0, 4),
            year_str: cleanValue.substr(2, 4),
            month_str: cleanValue.substr(4, 2),
            date_str: cleanValue.substr(6, 2),
            hour_str: cleanValue.substr(8, 2),
            minute_str: cleanValue.substr(10, 2),
            second_str: cleanValue.substr(12, 2),
        };

        // 当前的年月日不可用
        if (!ds.fullYear_str || !ds.month_str || !ds.date_str) {
            this.parseDate(new Date());
            return;
        }


        this.fullYear = parseInt(ds.fullYear_str);
        this.year = parseInt(ds.year_str);
        this.month = parseInt(ds.month_str);
        this.date = parseInt(ds.date_str);
        this.hour = ds.hour_str ? parseInt(ds.hour_str) : 0;
        this.minute = ds.minute_str ? parseInt(ds.minute_str) : 0;
        this.second = ds.second_str ? parseInt(ds.second_str) : 0;
        // this.day = date.getDay();
    }

    /**
     * 解析date格式
     * @param date
     */
    parseDate(date) {
        this.fullYear = date.getFullYear();
        this.year = parseInt(date.getFullYear().toString().substr(2, 2));
        this.month = date.getMonth() + 1;
        this.date = date.getDate();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
        this.day = date.getDay();
    }

    /**
     * 时间格式化
     * @param format
     * @returns {*}
     */
    format(format) {
        return format
        .replace(/YYYY/i, this.fullYear || '')
        .replace(/YY/i, this.year || '')
        .replace(/MM/, this.month || '')
        .replace(/DD/i, this.date || '')
        .replace(/HH/i, this.hour || '')
        .replace(/mm/, this.minute || '')
        .replace(/ss/i, this.second || '');
    }
}
const moment = value => {
    return new Moment(value);
};

export default moment;
