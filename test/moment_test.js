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
        date = moment(1547285063173);
        expect(date.fullYear).toBe(2019);
        expect(date.month).toBe(1);
        expect(date.date).toBe(12);
        expect(date.hour).toBe(17);
        expect(date.minute).toBe(24);
        expect(date.second).toBe(23);
        expect(date.day).toBe(6);
    });

    it('moment(new Date(1547285063173))', () => {
        date = moment(new Date(1547285063173));
        expect(date.fullYear).toBe(2019);
        expect(date.month).toBe(1);
        expect(date.date).toBe(12);
        expect(date.hour).toBe(17);
        expect(date.minute).toBe(24);
        expect(date.second).toBe(23);
    });

    it('moment(new Date("Sat Jan 12 2019 17:24:23 GMT+0800 (中国标准时间)"))', () => {
        date = moment(new Date('Sat Jan 12 2019 17:24:23 GMT+0800 (中国标准时间)'));
        expect(date.fullYear).toBe(2019);
        expect(date.month).toBe(1);
        expect(date.date).toBe(12);
        expect(date.hour).toBe(17);
        expect(date.minute).toBe(24);
        expect(date.second).toBe(23);
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
    it('moment(1547285063173).format("YYYY年MM月DD日")', () => {
        expect(moment(1547285063173).format('YYYY年MM月DD日')).toBe('2019年1月12日');
    });

    it('moment(1547285063173).format("YYYY年MM月DD日HH时mm分ss秒")', () => {
        expect(moment(1547285063173).format('YYYY年MM月DD日HH时mm分ss秒')).toBe('2019年1月12日17时24分23秒');
    });

    it('moment(1547285063173).format("YYYY/MM/DD HH:mm:ss")', () => {
        expect(moment(1547285063173).format('YYYY/MM/DD HH:mm:ss')).toBe('2019/1/12 17:24:23');
    });

    it('moment(1547285063173).format("YYYY-MM-DD HH:mm:ss")', () => {
        expect(moment(1547285063173).format('YYYY-MM-DD HH:mm:ss')).toBe('2019-1-12 17:24:23');
    });

    it('moment(1547285063173).format("yyyy-MM-dd hh:mm:ss")', () => {
        expect(moment(1547285063173).format('yyyy-MM-dd hh:mm:ss')).toBe('2019-1-12 17:24:23');
    });
});
