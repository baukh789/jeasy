/**
 * 日期时间相关工具
 */

class Moment {
    constructor(value, timezone) {
        switch (typeof value) {
            // 当前为数字
            case 'number': {
                // 时间戳
                if (value.toString().length === 13) {
                    this.parseDate(new Date(value), timezone);
                    return;
                }
                this.parseStr(value.toString(), timezone);
                break;
            }

            // 当前为字符串
            case 'string': {
                this.parseStr(value, timezone);
                break;
            }

            // 当前为时间对象
            case 'object': {
                this.parseDate(value.constructor === Date ? value : new Date(), timezone);
                break;
            }

            default: {
                this.parseDate(new Date(), timezone);
                break;
            }
        }
    }

    /**
     * 解析字符串格式
     * @param str
     * @param timezone 时区
     */
    parseStr(str, timezone) {
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
            this.parseDate(new Date(), timezone);
            return;
        }

        const datastr = `${ds.fullYear_str}/${ds.month_str}/${ds.date_str} ${ds.hour_str || '00'}:${ds.minute_str || '00'}:${ds.second_str || '00'}`;
        this.parseDate(new Date(datastr), timezone);
    }

    /**
     * 解析date格式
     * @param date
     * @param timezone
     */
    parseDate(date, timezone) {
        if (typeof timezone === 'number') {
            const offset_GMT = new Date().getTimezoneOffset();
            // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
            const nowDate = date.getTime();
            date = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
        }

        // 年: 四位制
        this.fullYear = date.getFullYear();

        // 年: 两位制
        this.year = parseInt(date.getFullYear().toString().substr(2, 2));

        // 月
        this.month = date.getMonth() + 1;

        // 日
        this.date = date.getDate();

        // 小时
        this.hour = date.getHours();

        // 分
        this.minute = date.getMinutes();

        // 秒
        this.second = date.getSeconds();

        // 星期
        this.day = date.getDay();
    }

    /**
     * 时间格式化
     * @param format
     * @returns {*}
     */
    format(format) {
        return format
            .replace(/YYYY/i, this.fullYear)
            .replace(/YY/i, this.year < 10 ? `0${this.year}` : this.year)
            .replace(/MM/, this.month < 10 ? `0${this.month}` : this.month)
            .replace(/DD/i, this.date < 10 ? `0${this.date}` : this.date)
            .replace(/HH/i, this.hour < 10 ? `0${this.hour}` : this.hour)
            .replace(/mm/, this.minute < 10 ? `0${this.minute}` : this.minute)
            .replace(/ss/i, this.second < 10 ? `0${this.second}` : this.second);
    }
}
const moment = (value, timezone) => {
    return new Moment(value, timezone);
};

export default moment;
