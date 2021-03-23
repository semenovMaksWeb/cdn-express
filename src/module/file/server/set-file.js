const fs = require('fs');
const logger = require(`log4js`).getLogger('file');

const { getExtensions } = require('./get-extensions');
const { setNameUrl } = require('./set-name-url');
const setFile = (path, file) =>{
    let result = [];
    if(file.length){
        file.forEach((element) => {
            result.push(setFileOne(path,element));
        });
    }else{
        result.push(setFileOne(path,file));
    }
    return result;
}

const setFileOne = (path, file) =>{
    const extensions = getExtensions(file.name);
        const url = setNameUrl(path, file, extensions);
        file.mv(`${url.url}`);
        logger.info(`Добавлен файл ${url.logger}`);
        return url.cdn;
}

module.exports = { setFile }; 