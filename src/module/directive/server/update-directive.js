const fs = require('fs');
const publicFile = `${appRoot}/public`;
const logger = require(`log4js`).getLogger('catalog');

const updateFile = (url, name) => {
    const file = `${publicFile}/${url}`
    if(!fs.existsSync(file)){
        return {error:"Каталог не найден"};
    }
    if( !fs.lstatSync(file).isDirectory()){
        return {error:"Каталог не найден"};
    }
    let newFile = url.split("/");
    newFile.pop();
    newFile = `${publicFile}/${newFile.join("/")}/${name}`;

    if(newFile === file){
        return {error:"Имя каталога уже существует"};
    }
    logger.info(`Каталог  ${url} переменован в ${name}` );
    fs.renameSync(file, newFile);
    return "Каталог удачно переменован";
}
module.exports = { updateFile }