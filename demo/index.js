import jeasy from '../src/index';
(() => {
    const renderDiv = document.querySelector('.renderDiv');
    let li = null;
    const d = jeasy.moment(19871122);
    console.log(d);
    console.log(`${d.fullYear}年${d.month}月${d.date}日`);

    // console.log(d.format('YYYY-MM-DD HH:mm:ss'));
    //
    // const d2 = jeasy.moment('1987-11-22');
    // console.log(`${d2.fullYear}年${d2.month}月${d2.date}日`);
    //
    // console.log(d2.format('YYYY-MM-DD HH:mm:ss'));
    //
    //
    // const d3 = jeasy.moment(new Date());


    document.querySelector('#copyAction').addEventListener('click', () => {
        jeasy.copyText(document.querySelector('#copyText').value);
        li = document.createElement('li');
        li.innerHTML = `已经将[${document.querySelector('#copyText').value}]放至粘贴板`;
        renderDiv.appendChild(li);

        li = document.createElement('li');
        li.innerHTML = '当前文本宽度所占像素为: ' +  jeasy.getTextWidth(document.querySelector('#copyText').value);
        renderDiv.appendChild(li);
    });
})();
