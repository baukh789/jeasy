/**
 * 下载文件
 * @param response: 后端返回blob数据
 * @param fileName: 文件名称
 * @returns {boolean}
 */
export const download = (response, fileName) => {
    const blobPrototype = Blob.prototype;
    let blob = null;

    // response === blob
    if (Object.getPrototypeOf(response) === blobPrototype) {
        blob = response;
    }

    // response.data === blob
    if (response.data && Object.getPrototypeOf(response.data) === blobPrototype) {
        blob = response.data;
    }

    // 当前传入的blob有误，直接跳出
    if (!blob || Object.getPrototypeOf(blob) !== blobPrototype) {
        return false;
    }

    const a = document.createElement('a');
    a.addEventListener('click', () => {
        a.download = fileName;
        a.href = URL.createObjectURL(blob);
    });
    const e = document.createEvent('MouseEvents');
    e.initEvent('click', false, false);
    a.dispatchEvent(e);
    return true;
};
