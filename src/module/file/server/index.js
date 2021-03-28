const { setFile } = require('./set-file');
const { getFile } = require('./get-file');
const { deleteFile } = require('./delete-file');
const { updateFile } = require('./update-file');
const setAll = async (params, file) =>{
    return setFile(params, file);
}   
const getAll = async (params) =>{
    return getFile(params);
}
const deleteAll = async (params) =>{
    return deleteFile(params);
}
const updateAll = (params, name) =>{
    return updateFile(params, name);
}
module.exports = { setAll, getAll, deleteAll, updateAll };