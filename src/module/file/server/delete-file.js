const fs = require('fs');
const publicFile = `${appRoot}/public`;

const deleteFile = (url) => {
    const file = `${publicFile}/${url}`
    if(!fs.existsSync(file)){
        return {error:"Файл не найден"};
    }
    fs.unlinkSync(file);
    return "Файл удачно удален";
}
module.exports = { deleteFile }