const fs = require('fs');
const publicFile = `${appRoot}/public`;
const logger = require(`log4js`).getLogger('file');

const updateFile = (url, name) => {
    const file = `${publicFile}/${url}`
    if(!fs.existsSync(file)){
        return {error:"Файл не найден"};
    }
    if( !fs.lstatSync(file).isFile()){
        return {error:"Файл не найден"};
    }
    let newFile = url.split("/");
    newFile.pop();
    newFile = `${publicFile}/${newFile.join("/")}/${name}`;
    if(newFile === file){
        return {error:"Имя файла уже существует"};
    }
    logger.info(`Файл  ${url} переменован в ${name}` );
    fs.renameSync(file, newFile);
    return "Файл удачно переменован";
}
module.exports = { updateFile }