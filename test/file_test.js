'use strict';
import { download } from '../src/file';

describe('download', () => {
    it('执行验证', () => {
        const debug = {hello: "world"};
        const blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
        const response = {data: blob};
        expect(download(blob, 'world.json')).toBe(true);
        expect(download(response, 'world.json')).toBe(true);
        expect(download(debug, 'world.json')).toBe(false);
    });
});
