const public = `${appRoot}/public`;
const fs = require('fs');

const setDirective =  async (name, type) => {
    const file = `${public}/${name}`
    if(await !fs.existsSync(file)){
        await fs.mkdirSync(file);
        console.log(`создание  новой папки - ${name}`);
    }else{

    }
}
module.exports = { setDirective };