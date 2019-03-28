'use strict';
import { equal, index, clone, isEmpty, type, trim, toQueryString } from '../src/object';

describe('equal', () => {
    it('验证对象', () => {
        let o1 = {name: 'baukh', age: 31};
        let o2 = {name: 'baukh', age: 31};
        expect(equal(o1, o2)).toBe(true);

        o1 = {name: 'baukh', age: 31};
        o2 = {name: 'cc', age: 31};
        expect(equal(o1, o2)).toBe(false);

        o1 = null;
        o2 = null;
    });

    it('验证字符串', () => {
        expect(equal('baukh', 'baukh')).toBe(true);
        expect(equal('baukh', 'cc')).toBe(false);
    });

    it('验证数组', () => {
        let a1 = [1, 2, 3];
        let a2 = [1, 2, 3];
        expect(equal(a1, a2)).toBe(true);

        a1 = [1, 2, 3];
        a2 = [3, 2, 1];
        expect(equal(a1, a2)).toBe(false);

        a1 = null;
        a2 = null;
    });
});

describe('index', () => {
    let o1 = null;
    let o2 = null;
    let o3 = null;
    let arr = null;
    beforeEach(() =>  {
        o1 = {name: 'cc', age: 31};
        o2 = {name: 'kouzi', age: 31};
        o3 = {name: 'baukh', age: 31};
        arr = [{name: 'baukh', age: 31}, {name: 'cc', age: 31}];
    });

    afterEach(() =>  {
        o1 = null;
        o2 = null;
        o3 = null;
        arr = null;
    });

    it('返回值验证', () => {
        expect(index(arr, o1)).toBe(1);
        expect(index(arr, o2)).toBe(-1);
        expect(index(arr, o3)).toBe(0);
    });
});


describe('find', () => {
    let arr = null;
    beforeEach(() =>  {
        arr = [{name: 'baukh', age: 31}, {name: 'cc', age: 30}, {name: 'kouz', age: 29}, {name: 'rabbit', age: 28}];
    });

    afterEach(() =>  {
        arr = null;
    });

    it('返回值验证', () => {
        expect(find(arr, 'name', 'baukh').length).toBe(1);
        expect(find(arr, 'age', 30).length).toEqual(1);
        expect(find(arr, 'age', 33).length).toEqual(0);
    });
});

describe('clone', () => {
    it('返回值验证', () => {
        let o1 = {name: 'cc', age: 31};
        let o2 = clone(o1);
        expect(o1.name).toBe(o2.name);
        expect(o1 === o2).toBe(false);
    });
});

describe('isEmpty', () => {
    it('返回值验证', () => {
        let o1 = {name: 'cc', age: 31};
        let o2 = {};
        expect(isEmpty(o1)).toBe(false);
        expect(isEmpty(o2)).toBe(true);

        o1 = null;
        o2 = null;
    });
});

describe('type', () => {
    let nodeList = null;
    let divEle = null;

    beforeEach(() =>  {
        divEle = document.createElement('div');
        document.body.appendChild(divEle);
        nodeList = document.querySelectorAll('div');
    });

    afterEach(() =>  {
        document.body.removeChild(divEle);
        nodeList = null;
        divEle = null;
    });

    it('返回值验证', () =>  {
        expect(type(undefined)).toBe('undefined');
        expect(type(null)).toBe('null');
        expect(type(true)).toBe('boolean');
        expect(type(Boolean())).toBe('boolean');
        expect(type(123)).toBe('number');
        expect(type(Number(123))).toBe('number');
        expect(type('123')).toBe('string');
        expect(type(String('123'))).toBe('string');
        expect(type(() => {})).toBe('function');
        expect(type([])).toBe('array');
        expect(type(new Array(1))).toBe('array');
        expect(type(new Date())).toBe('date');
        expect(type(Error())).toBe('error');
        expect(type(/test/)).toBe('regexp');
        expect(type(document.body)).toBe('element');
        expect(type(nodeList)).toBe('nodeList');
        expect(type(divEle)).toBe('element');
    });
});

describe('trim', () => {
    it('string 返回值验证', () => {
        let o = '  baukh  ';

        expect(trim(o)).toBe('baukh');

        o = null;
    });

    it('json 返回值验证', () => {
        let o = {name: 'kouzi', age: 28, like: null, title: undefined, gender: 0};

        expect(trim(o)).toEqual({name: 'kouzi', age: 28, gender: 0});

        o = null;
    });
});


describe('toQueryString', () => {
    it('验证queryString转换效果', () => {
        const obj1 = { name:'zhangsan', age: 12 };
        const obj2 = { name: 'zhangsan', params: { name: 'zhangsan', age: 12 }, page: { currentPage: 1, pageSize: 10 }, other: null };
        expect(toQueryString(obj1)).toBe('name=zhangsan&age=12');
        expect(toQueryString(obj2)).toBe('name=zhangsan&params=%7B%22name%22%3A%22zhangsan%22%2C%22age%22%3A12%7D&page=%7B%22currentPage%22%3A1%2C%22pageSize%22%3A10%7D')
    });
});