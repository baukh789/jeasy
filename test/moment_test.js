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
    // 这里不去验证时区， 所以这里的测试需要通过 Date来验证
    let now = new Date(1547285063173);
    let fullYeay = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    afterAll(() => {
        now = null;
        fullYeay = null;
        month = null;
        date = null;
        hour = null;
        minute = null;
        second = null;
    });
    it('moment(1547285063173).format("YYYY年MM月DD日")', () => {
        expect(moment(1547285063173).format('YYYY年MM月DD日')).toBe(`${fullYeay}年${month}月${date}日`);
    });

    it('moment(1547285063173).format("YYYY年MM月DD日HH时mm分ss秒")', () => {
        expect(moment(1547285063173).format('YYYY年MM月DD日HH时mm分ss秒')).toBe(`${fullYeay}年${month}月${date}日${hour}时${minute}分${second}秒`);
    });

    it('moment(1547285063173).format("YYYY/MM/DD HH:mm:ss")', () => {
        expect(moment(1547285063173).format('YYYY/MM/DD HH:mm:ss')).toBe(`${fullYeay}/${month}/${date} ${hour}:${minute}:${second}`);
    });

    it('moment(1547285063173).format("YYYY-MM-DD HH:mm:ss")', () => {
        expect(moment(1547285063173).format('YYYY-MM-DD HH:mm:ss')).toBe(`${fullYeay}-${month}-${date} ${hour}:${minute}:${second}`);
    });

    it('moment(1547285063173).format("yyyy-MM-dd hh:mm:ss")', () => {
        expect(moment(1547285063173).format('yyyy-MM-dd hh:mm:ss')).toBe(`${fullYeay}-${month}-${date} ${hour}:${minute}:${second}`);
    });
});
