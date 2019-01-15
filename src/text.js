/**
 * 将文本放粘贴板
 * @param text
 * @returns {boolean}: 是否复制成功
 */
export const copyText = text => {
    const ele = document.createElement('input');
    ele.style.cssText = 'position:absolute;top:0;z-index: -999;';
    ele.value = text;
    document.body.appendChild(ele);

    ele.select();

    // 复制触焦节点的文本
    const isSuccess = document.execCommand('copy');

    ele.remove();
    return isSuccess;
};

/**
 * 获取文本所占宽度
 * @param text
 * @returns {number}
 */
export const getTextWidth = text => {
    const overId = 'jeasy-over-size-div';
    let overSizeDiv = document.getElementById(overId);
    if (!overSizeDiv) {
        const ele = document.createElement('div');
        ele.style.position = 'absolute';
        ele.style.top = '0';
        ele.style.zIndex = '-10';
        ele.style.visibility = 'hidden';
        ele.id = overId;
        document.body.appendChild(ele);
        overSizeDiv = document.getElementById(overId);
    }
    overSizeDiv.innerText = text;
    return parseInt(window.getComputedStyle(overSizeDiv).width, 10);
};
