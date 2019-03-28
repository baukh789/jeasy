import moment from './moment';
import { equal, index, clone, isEmpty, type, trim, toQueryString } from './object';
import { toHump, toHyphen, toFormData } from './string';
import { copyText, getTextWidth } from './text';
import { download } from './file';

export default {
    version: process.env.VERSION,
    copyText,
    getTextWidth,
    moment,
    equal,
    index,
    clone,
    isEmpty,
    type,
    trim,
    toQueryString,
    toHump,
    toHyphen,
    toFormData,
    download
};

