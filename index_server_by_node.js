const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Request from server 3000 port I am running");
    console.log(req.method);
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Hello, Pepcoders!</h1>');
    // res.write('<h1>Hello, Pepcoders!2nd </h1>');
    let path = './views';

    if(req.url == '/'){
        path = path + '/index.html';
        res.statusCode = 200;

    } else if(req.url == '/about'){
        path = path + '/about.html';
        res.statusCode = 200;

    } else if(req.url == '/about-me'){
        res.statusCode = 307;
        res.setHeader('Location', '/about');
        res.end();
    } else {
        path = path + '/404.html';
        res.statusCode = 404;

    }



    fs.readFile(path, (err, fileData)=>{
        if(err){
            console.log(err);
        } else{
            res.write(fileData);
            res.end();
        }
    })



});

// console.log(server);
server.listen(3000, 'localhost', ()=>{
    console.log("hiii");
});
