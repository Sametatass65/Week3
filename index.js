const express = require('express');
const app = express();
app.use(function(req,resp,next){
    console.log("Yeni bir istek geldi");
    if (req.method === 'POST'){
        console.log(req.method + " isteği için istek gönderildi");
    }
    next();
});
app.get('/hello', function(req, resp){
    resp.send("Merhaba, GET isteği attınız");
});
app.post('/hello', function(req, resp){
   
    resp.send("Merhaba, POST isteği attınız");
});

app.put('/hello', function(req, resp){
    resp.send("Merhaba, PUT isteği attınız");
});

app.delete('/hello', function(req, resp){
    resp.send("Merhaba, DELETE isteği attınız")
});

const server = app.listen(8081, function(){

    console.log("App listening at http://localhsot:8081");
});