import moment from './moment';
import { equal, index, find, clone, isEmpty, type, trim } from './object';
import { toHump, toHyphen } from './string';
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
    toQueryString,
    toHump,
    toHyphen,
    toFormData,
    toPercentile,
    toThousands,
    download
};

