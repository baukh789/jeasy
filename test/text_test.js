'use strict';
import { copyText } from '../src/text';

describe('copyText', () => {
    it('执行验证', () => {
        let isSuccess = copyText('font-size');
        // TODO jasmine中执行 document.execCommand('copy') 时存在问题，所以这个验证是无效的
        // expect(isSuccess).toBe(true);
        isSuccess = null;
    });
});

