const { setFile } = require('./set-file');

const setAll = async (params, file) =>{
    return await setFile(params, file);
}   

module.exports = { setAll };