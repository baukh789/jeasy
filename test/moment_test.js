'use strict';
import moment from '../src/moment';
describe('moment(value)', function() {
    let date = null;
    beforeEach(function() {
    });
    afterEach(function(){
        date = null;
    });

    it('moment(19871122)', function(){
        date = moment(19871122);
        console.log(date);
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
    });

    it('moment(19871122102030)', function(){
        date = moment(19871122102030);
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });

    it('moment("19871122")', function(){
        date = moment('19871122');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
    });

    it('moment("19871122102030")', function(){
        date = moment('19871122102030');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });

    it('moment("1987-11-22 10:20:30")', function(){
        date = moment('1987-11-22 10:20:30');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });

    it('moment("1987/11/22 10:20:30")', function(){
        date = moment('1987/11/22 10:20:30');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });


    it('moment("1987年11月22 10小时20分30秒")', function(){
        date = moment('1987年11月22 10小时20分30秒');
        expect(date.fullYear).toBe(1987);
        expect(date.month).toBe(11);
        expect(date.date).toBe(22);
        expect(date.hour).toBe(10);
        expect(date.minute).toBe(20);
        expect(date.second).toBe(30);
    });

    it('moment(1547285063173)', function(){
        date = moment(1547285063173);
        expect(date.fullYear).toBe(2019);
        expect(date.month).toBe(1);
        expect(date.date).toBe(12);
        expect(date.hour).toBe(17);
        expect(date.minute).toBe(24);
        expect(date.second).toBe(23);
    });
});

describe('moment(value).format(format)', function() {
    it('moment(1547285063173).format("YYYY年MM月DD日")', function(){
        expect(moment(1547285063173).format('YYYY年MM月DD日')).toBe('2019年1月12日');
    });

    it('moment(1547285063173).format("YYYY年MM月DD日HH时mm分ss秒")', function(){
        expect(moment(1547285063173).format('YYYY年MM月DD日HH时mm分ss秒')).toBe('2019年1月12日17时24分23秒');
    });

    it('moment(1547285063173).format("YYYY/MM/DD HH:mm:ss")', function(){
        expect(moment(1547285063173).format('YYYY/MM/DD HH:mm:ss')).toBe('2019/1/12 17:24:23');
    });

    it('moment(1547285063173).format("YYYY-MM-DD HH:mm:ss")', function(){
        expect(moment(1547285063173).format('YYYY-MM-DD HH:mm:ss')).toBe('2019-1-12 17:24:23');
    });

    it('moment(1547285063173).format("yyyy-MM-dd hh:mm:ss")', function(){
        expect(moment(1547285063173).format('yyyy-MM-dd hh:mm:ss')).toBe('2019-1-12 17:24:23');
    });
});
