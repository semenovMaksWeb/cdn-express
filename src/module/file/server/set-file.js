const fs = require('fs');
const public = `${appRoot}/public`;

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
    console.log(result);
    return result;
}

const setFileOne = (path, file) =>{
    const extensions = getExtensions(file.name);
        const url = setNameUrl(path, file, extensions);
        file.mv(`${url.url}`);
        console.log(`Добавлен файл ${url.logger}`);
        return url.cdn;
}

module.exports = { setFile }; 