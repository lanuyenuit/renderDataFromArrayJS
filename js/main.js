var $array = [{
    id: "1",
    name: "Toa nha A",
    address: "39A Nguyen Thi Dieu",
    registerday: "2017/12",
    floorPlan: "1st",
    type: "2",
    buildingPhoto: "https://d30y9cdsu7xlg0.cloudfront.net/png/65999-200.png"
}, {
    id: "2",
    name: "Toa nha B",
    address: "39B Nguyen Thi Dieu",
    registerday: "2018/01",
    floorPlan: "2nd",
    type: "2",
    buildingPhoto: "https://d30y9cdsu7xlg0.cloudfront.net/png/17374-200.png"
}, {
    id: "3",
    name: "Toa nha C",
    address: "39C Nguyen Thi Dieu",
    registerday: "2018/02",
    floorPlan: "3rd",
    type: "1",
    buildingPhoto: "https://d30y9cdsu7xlg0.cloudfront.net/png/65999-200.png"
}, {
    id: "4",
    name: "Toa nha D",
    address: "39C Nguyen Thi Dieu",
    registerday: "2018/03",
    floorPlan: "4th",
    type: "1",
    buildingPhoto: "https://d30y9cdsu7xlg0.cloudfront.net/png/17374-200.png"
}];

    let NewsListHtmlAll = '';
    let NewsListHtml = '';
    let NewsListHtmlTab01 = '';
    let NewsListHtmlTab02 = '';
    let NewsListHtmlTab03 = '';

    $array.forEach( newsObj => {
        NewsListHtml = `
                         <div class="row item">
                            <div class="col-xs-2">
                                <img class="img-responsive" src=${newsObj.buildingPhoto} alt=""/>
                            </div>
                            <div class="col-xs-10">
                                <ul>
                                    <li>Id: ${newsObj.id}</li>
                                    <li>Ten: ${newsObj.name}</li>
                                    <li>Dia chi: ${newsObj.address}</li>
                                    <li>Ngay dang ki: ${newsObj.registerday}</li>
                                    <li>Tang: ${newsObj.floorPlan}</li>
                                </ul>
                             </div>
                         </div>
                     `;

        NewsListHtmlAll += NewsListHtml;
        if (newsObj.type === "1") {
            NewsListHtmlTab01  += NewsListHtml;
        } else if (newsObj.type === "2") {
            NewsListHtmlTab02 += NewsListHtml;
        } else if (newsObj.NewsListHtml === "3") {
            NewsListHtmlTab03 += NewsListHtml;
        }
    });
    $('#all').html(NewsListHtmlAll);
    $('#menu1').html(NewsListHtmlTab01);
    $('#menu2').html(NewsListHtmlTab02);
    $('#menu3').html(NewsListHtmlTab03);

