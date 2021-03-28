const fs = require('fs');
const rimraf = require('rimraf');
const publicFile = `${appRoot}/public`;

const deleteFile = (name) => {
    const file = `${publicFile}/${name}`
    if(!fs.existsSync(file)){
        return {error:"Файл не найден"};
    }
    rimraf(`${file}/*`, function () {});
    fs.rmdirSync(file, { recursive: true });
    return "Файл удачно удален";
}
module.exports = { deleteFile }