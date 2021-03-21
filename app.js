const express = require('express');
const app = express();
const path = require('path')
const fileUpload = require('express-fileupload');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authorization');    
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

global.appRoot = path.resolve(__dirname);
global.appApi = "http://localhost:8000";

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// support parsing of application/json type post data

app.use(fileUpload({
    createParentPath: true
}));


app.use('/cdn', express.static('./public/'));
app.use('/api', require('./src/module/file/controller/index'))

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});