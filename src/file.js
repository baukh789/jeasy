/**
 * 下载文件
 * @param response: 后端返回blob数据
 * @param fileName: 文件名称
 * @returns {number}
 */
export const download = (response, fileName) => {
    const blobPrototype = Blob.prototype;
    let blob = null;

    // res === blob
    if (Object.getPrototypeOf(response) === blobPrototype) {
        blob = response;
    }

    // res.data === blob
    if (Object.getPrototypeOf(response.data) === blobPrototype) {
        blob = response.data;
    }

    // 当前返回的blob有误，直接跳出
    if (!blob || Object.getPrototypeOf(blob) !== blobPrototype) {
        console.error(`导出错误，请确认接口返回是否为Blob格式`, 'error');
        return;
    }

    const a = document.createElement('a');
    a.addEventListener('click', () => {
        a.download = fileName;
        a.href = URL.createObjectURL(blob);
    });
    const e = document.createEvent('MouseEvents');
    e.initEvent('click', false, false);
    a.dispatchEvent(e);
};
