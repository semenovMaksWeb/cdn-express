const public = `${appRoot}/public`;
const fs = require('fs');
const logger = require(`log4js`).getLogger('directive');

const setDirective =  async (name, type) => {
    const file = `${public}/${name}`
    if(await !fs.existsSync(file)){
        await fs.mkdirSync(file);
        logger.info(`создание  новой папки - ${name}`);
    }
}
module.exports = { setDirective };