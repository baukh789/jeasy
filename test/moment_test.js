'use strict';
import moment from '../src/moment';
describe('moment(value)', () => {
    let date = null;
    afterEach(() => {
        date = null;
    });

    it('moment(19871122)', () => {
        date = moment(19871122);
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.day).toBe(0);
        expect(date.hour).toBe(0);
        expect(date.minute).toBe(0);
        expect(date.second).toBe(0);
    });

    it('moment(198711)', () => {
        date = moment(198711);
        let now = new Date();
        expect(date.fullYear).toBe(now.getFullYear());
        expect(date.month).toBe(now.getMonth() + 1);
        expect(date.date).toBe(now.getDate());
        expect(date.day).toBe(now.getDay());
    });

    it('moment(20190112)', () => {
        date = moment(20190112);
        expect(date.fullYear).toBe(2019);
        expect(date.month).toBe(1);
        expect(date.date).toBe(12);
        expect(date.day).toBe(6);
    });

    it('moment(19871122102030)', () => {
        date = moment(19871122102030);
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });

    it('moment("19871122")', () => {
        date = moment('19871122');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
    });

    it('moment("19871122102030")', () => {
        date = moment('19871122102030');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });

    it('moment("1987-11-22 10:20:30")', () => {
        date = moment('1987-11-22 10:20:30');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });

    it('moment("1987/11/22 10:20:30")', () => {
        date = moment('1987/11/22 10:20:30');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });


    it('moment("1987年11月22 10小时20分30秒")', () => {
        date = moment('1987年11月22 10小时20分30秒');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });

    it('moment(1547285063173)', () => {
        let now = new Date(1547285063173);
        date = moment(1547285063173);
        expect(date.fullYear).toBe(now.getFullYear());
        expect(date.month).toBe(now.getMonth() + 1);
        expect(date.date).toBe(now.getDate());
        expect(date.hour).toBe(now.getHours());
        expect(date.minute).toBe(now.getMinutes());
        expect(date.second).toBe(now.getSeconds());
        expect(date.day).toBe(now.getDay());
    });

    it('moment(new Date(1547285063173))', () => {
        let now = new Date(1547285063173);
        date = moment(new Date(1547285063173));
        expect(date.fullYear).toBe(now.getFullYear());
        expect(date.month).toBe(now.getMonth() + 1);
        expect(date.date).toBe(now.getDate());
        expect(date.hour).toBe(now.getHours());
        expect(date.minute).toBe(now.getMinutes());
        expect(date.second).toBe(now.getSeconds());
        expect(date.day).toBe(now.getDay());
        now = null;
    });

    it('moment(new Date("Sat Jan 12 2019 17:24:23 GMT+0800 (中国标准时间)"))', () => {
        let now = new Date('Sat Jan 12 2019 17:24:23 GMT+0800 (中国标准时间)');
        date = moment(new Date('Sat Jan 12 2019 17:24:23 GMT+0800 (中国标准时间)'));
        expect(date.fullYear).toBe(now.getFullYear());
        expect(date.month).toBe(now.getMonth() + 1);
        expect(date.date).toBe(now.getDate());
        expect(date.hour).toBe(now.getHours());
        expect(date.minute).toBe(now.getMinutes());
        expect(date.second).toBe(now.getSeconds());
        now = null;
    });

    it('moment()', () => {
        date = moment();
        let now = new Date();
        expect(date.fullYear).toBe(now.getFullYear());
        expect(date.month).toBe(now.getMonth() + 1);
        expect(date.date).toBe(now.getDate());
        expect(date.day).toBe(now.getDay());
    });

    it('moment({})', () => {
        date = moment({});
        let now = new Date();
        expect(date.fullYear).toBe(now.getFullYear());
        expect(date.month).toBe(now.getMonth() + 1);
        expect(date.date).toBe(now.getDate());
        expect(date.day).toBe(now.getDay());
    });
});

describe('moment(value).format(format)', () =>  {
    it('moment(19870102102003).format("YYYY年MM月DD日")', () => {
        expect(moment(19870102102003).format('YYYY年MM月DD日')).toBe('1987年01月02日');
    });

    it('moment(19870102102003).format("YYYY年MM月DD日HH时mm分ss秒")', () => {
        expect(moment(19870102102003).format('YYYY年MM月DD日HH时mm分ss秒')).toBe('1987年01月02日10时20分03秒');
    });

    it('moment(19870102102003).format("YYYY/MM/DD HH:mm:ss")', () => {
        expect(moment(19870102102003).format('YYYY/MM/DD HH:mm:ss')).toBe('1987/01/02 10:20:03');
    });

    it('moment(19870102102003).format("YYYY-MM-DD HH:mm:ss")', () => {
        expect(moment(19870102102003).format('YYYY-MM-DD HH:mm:ss')).toBe('1987-01-02 10:20:03');
    });

    it('moment(19870102102003).format("yyyy-MM-dd hh:mm:ss")', () => {
        expect(moment(19870102102003).format('yyyy-MM-dd hh:mm:ss')).toBe('1987-01-02 10:20:03');
    });
});

describe('moment(value, timezone)', () =>  {
    it('moment(1678871347085, 8)', () => {
        expect(moment(1678871347085, 8).format('YYYY年MM月DD日HH时mm分')).toBe('2023年03月15日17时09分');
    });
    it('moment(1678871347085, 6)', () => {
        expect(moment(1678871347085, 6).format('YYYY年MM月DD日HH时mm分')).toBe('2023年03月15日15时09分');
    });
});
