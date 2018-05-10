var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response)
{
    console.log("****");
    response.sendfile('index.html');
})


app.listen(6789, function()
{
    console.log("listening on port 6789");
})