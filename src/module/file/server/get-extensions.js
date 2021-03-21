const getExtensions = (data) =>{
    return data.slice((Math.max(0, data.lastIndexOf(".")) || Infinity) + 1);
}

module.exports = {getExtensions}