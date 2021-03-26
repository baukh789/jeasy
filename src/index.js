import moment from './moment';
import { equal, index, find, clone, isEmpty, type, trim, clear, toQueryString } from './object';
import { toHump, toHyphen, toFormData } from './string';
import { toPercentile, toThousands } from './number';
import { copyText, getTextWidth } from './text';
import { download } from './file';

export default {
    version: process.env.VERSION,
    copyText,
    getTextWidth,
    moment,
    equal,
    index,
    find,
    clone,
    isEmpty,
    type,
    trim,
    clear,
    toQueryString,
    toHump,
    toHyphen,
    toFormData,
    toPercentile,
    toThousands,
    download
};

