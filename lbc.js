
const request = require("request");
const cheerio = require("cheerio");
url = "https://github.com/topics";

request(url, cb);

function cb (err, response, html){
    if(err){
        console.log(err);
    } else {
        extractHtml(html);
    }
}

function extractHtml(html){
    let $ = cheerio.load(html);
    let element = $("p")
    let tesst1 = $(element[1]).text();
    let tesst2 = $(element[3]).text();
    let tesst3 = $(element[5]).text();

    console.log(tesst1);
    console.log(tesst2);
    console.log(tesst3);

    let arr = {};
    arr[0] = tesst1;
    arr[2] = tesst2;

    arr[3] = tesst3;

    for(let i = 0 ; i < 1; i++){
        let url2 = "https://github.com/topics/" + arr[i];

        fun1(url2);
    }

}

function fun1(url2){
    request(url2, cb2);

    function cb2(err, response, html){
        if(err){
            console.log(err);
        } else {
            extractHtml2(html);
        }
    }

    function extractHtml2(html){
        let $ = cheerio.load(html);
        let ele = $(".px-3");
        let text1 = (ele[0]).text();
        console.log(text1);
    }

}



