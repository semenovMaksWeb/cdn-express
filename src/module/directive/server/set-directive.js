const publicFile = `${appRoot}/public`;
const fs = require('fs');
const logger = require(`log4js`).getLogger('catalog');

const setDirective = (url, name) => {
    const urlCatalog = `${publicFile}/${url}`;
    const urlCatalogAdd = `${publicFile}/${url}/${name}`;
    if(fs.existsSync(urlCatalog)){
        if(fs.existsSync(urlCatalogAdd)){
            return {error: "Каталог уже существует"}
        }
        fs.mkdirSync(urlCatalogAdd);
        logger.info(`создание  новой папки - ${urlCatalogAdd}`);
        return  "Папка удачно создана"
    }else {
        return {error: "Каталог не найден"}
    }
}
module.exports = { setDirective };