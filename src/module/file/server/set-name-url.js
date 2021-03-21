const public = `${appRoot}/public`;

const setNameUrl = (path, file, extensions) => {
    const str = `${path}/${file.md5}-${Date.now()}.${extensions}`;
   return {
       cdn: `${appApi}/cdn/${str}`,
       url: `${public}/${str}`,
       logger: `/${str}`
   }
}
module.exports = {setNameUrl}


 