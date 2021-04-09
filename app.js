const http = require("http");
const port = 3000;
const fs = require('fs');


const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('error : File Not Found');
        } else {
            res.write(data);
        }

        res.end();
    });
}

const server = http.createServer((reg, res) => {
    const body = 'hello world!!!';
    res.writeHead(200, {
        // 'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/html'
    })
    const url = reg.url;
    ///menggunakan switch
    switch (url) {
        case '/about':
            renderHTML('./about.html', res);
            break;
        case '/contact':
            renderHTML('./contact.html', res);
            break;
        default:
            renderHTML('./index.html', res);
            break;
    }

    //menggunakan if
    /* if (url === '/about') {
        renderHTML('./about.html', res);
        // fs.readFile('./about.html', (err, data) =>{
        //     if(err){
        //         res.writeHead(404);
        //         res.write('error : File Not Found');
        //     }else {
        //         res.write(data);
        //     }

        //     res.end();
        // });
        // res.write('ini adalah halaman about');
        // res.end();
    } else if (url === '/contact') {
        renderHTML('./contact.html', res);
    }
    // console.log(url)
    else {
        renderHTML('./index.html', res);
    } */

    
});

server.listen(port, () => {
    console.log(`server is listening on port ${port}..`);
});