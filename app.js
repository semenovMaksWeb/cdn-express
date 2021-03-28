const express = require('express');
const log4js = require('log4js');
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
global.secret_key = "dji349dfJFw=-adk";

log4js.configure({
    appenders: {
        http:{  type: "dateFile", filename: "log/http/http.log" }, 
        file:{  type: "dateFile", filename: "log/file/file.log" },
        catalog:{ type: "dateFile", filename: "log/directives/directives.log"  },
    },
    categories: {
        default: { appenders: ["http"], level: ['info']},
        file: { appenders: ["file"], level: ['info'] },
        catalog: { appenders: ["catalog"], level: ['info'] },
    },
});
app.use(log4js.connectLogger(log4js.getLogger()));


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
app.use('/api', require('./src/module/directive/controller/index'))

app.get('*', function(req, res){
    res.status(404).send([
        {
            name: 'catalog-get',
            methosd: 'get',
            description: '/api/file/',
        },
        {
            name: 'file-set',
            methosd: 'post',
            description: '/api/file/',
        },
        {
            name: 'cnd-file',
            methosd: 'get',
            description: '/cdn',
        },
         
    ]);
  });

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});