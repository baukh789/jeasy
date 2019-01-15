'use strict';
import { copyText, getTextWidth } from '../src/text';

describe('copyText', () => {
    it('执行验证', () => {
        let isSuccess = copyText('font-size');
        // TODO jasmine中执行 document.execCommand('copy') 时存在问题，所以这个验证是无效的
        // expect(isSuccess).toBe(true);
        isSuccess = null;
    });
});

describe('getTextWidth', () => {
    it('执行验证', () => {
        expect(getTextWidth('aaa')).toBe(21);
        expect(getTextWidth('测试宽度')).toBe(64);
    });
});
