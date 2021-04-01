import jeasy from '../src/index';
(() => {
    const renderDiv = document.querySelector('.renderDiv');
    let li = null;
    const d = jeasy.moment(19871122);
    console.log(d);
    console.log(`${d.fullYear}年${d.month}月${d.date}日`);


    var o = {"code":"1","message":"成功","data":{"xdate":["2020/04","2020/05","2020/06","2020/07","2020/08","2020/09","2020/10","2020/11","2020/12","2021/01","2021/02","2021/03","2021/04"],"data":{"customers":{"customers":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"sendNum":{"SMS":[0,0,0,0,0,0,0,0,0,0,0,0,0],"TAOBAO_DISCOUNT":[0,0,0,0,0,0,0,0,0,0,0,0,0],"VSMS":[0,0,0,0,0,0,0,0,0,0,0,0,0],"TAOBAO_SEND_COUPON":[0,0,0,0,0,0,0,0,0,0,0,0,0],"EDM":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"profit":{"profit":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]}},"show":true}};

    console.log(o);
    console.log(jeasy.trim(o, true));
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
