const http = require(`http`);

const server = http.createServer((req,res)=>{
    if(req.url=== `/`){
        res.write("this is my new cool website");
        res.end();
    }
});

server.listen(8080);
console.log(`server is on`);