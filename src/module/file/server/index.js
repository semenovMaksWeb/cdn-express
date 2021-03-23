const { setFile } = require('./set-file');
const { getFile } = require('./get-file');
const setAll = async (params, file) =>{
    return await setFile(params, file);
}   
const getAll = async (params) =>{
    return await getFile(params);
}  
module.exports = { setAll, getAll };