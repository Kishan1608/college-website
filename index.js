var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer();

server.on('request',(req,res) => {
    if(req.url == '/'){
        fs.readFile("./public/Home.html","UTF-8", (err, html) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(html);
        });
    } else if(req.url == '/AboutUS'){
        fs.readFile("./public/AboutUS.html","UTF-8",(err,html) =>{
            res.writeHead(200, {'Content-Type':"text/html"});
            res.end(html);
        });
    } else if(req.url == '/Department'){
        fs.readFile("./public/Department.html","UTF-8",(err,html)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(html);
        })
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {'Content-Type':'text/css'});
        fileStream.pipe(res);
    } else if(req.url.match("\.png$")){
        var imgPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imgPath);
        res.writeHead(200, {'Content-Type': 'image/png'});
        fileStream.pipe(res);
    } else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("No page found");
    }
}).listen(5000);



console.log('Server Running on port 5000');