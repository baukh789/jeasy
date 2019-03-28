'use strict';
import { toPercentile, toThousands } from '../src/number';

describe('toPercentile', () => {
    it('返回值验证', () => {
        let value = 0.1230123;
        expect(toPercentile(value, 1)).toBe('12.3%');
        expect(toPercentile(value, 2)).toBe('12.30%');
        expect(toPercentile(value, 2, false)).toBe('12.3%');
        value = null;
        expect(toPercentile(1, 2)).toBe('100.00%');
        expect(toPercentile(1, 2, false)).toBe('100%');
        expect(toPercentile(1.101, 2)).toBe('110.10%');
    });
});

describe('toThousands', () => {
    it('返回值验证', () => {
        let value = 0.1230123;
        expect(toThousands(value, 1)).toBe('123.0‰');
        expect(toThousands(value, 1, false)).toBe('123‰');
        expect(toThousands(value, 2)).toBe('123.01‰');
        expect(toThousands(value, 2, false)).toBe('123.01‰');
        value = null;
        expect(toThousands(1, 2)).toBe('1000.00‰');
        expect(toThousands(1, 2, false)).toBe('1000‰');
        expect(toThousands(1.101, 2)).toBe('1101.00‰');
    });
});

