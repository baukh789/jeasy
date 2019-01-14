import moment from './moment';
import { equal, index, clone, isEmpty, type, trim } from './object';
import { toHump, toHyphen } from './string';
import { copyText } from './text';

export default {
    version: process.env.VERSION,
    copyText,
    moment,
    equal,
    index,
    clone,
    isEmpty,
    type,
    trim,
    toHump,
    toHyphen
};

