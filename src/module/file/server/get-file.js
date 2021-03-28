const fs = require('fs');
const public = `${appRoot}/public`;

const getFile = (name) => {
    const file = `${public}/${name}`
    if(!fs.existsSync(file)){
        return {error:"Каталог не найден"};
    }
    if(!fs.lstatSync(file).isDirectory()){
        return {error:"Каталог не найден"};
    }
    let index = 'public';
    if(name){
        index = name.split('/');
        index = index[index.length-1]
    }
    const data = {type: 'catalog', name:index, children:[] };
    readAll(file, data.children);
    return data;
}

const readAll = (dir, directory) =>{
    const files = fs.readdirSync(dir);
   for (const i in files) {
        if (!files.hasOwnProperty(i)) continue;
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            directory.push({
                type: 'catalog',
                name: files[i],
                children:[]
            })
            readAll(name, directory[directory.length-1].children) 
        }else{
            directory.push({        
                type: 'file',
                name: files[i], 
                url: `${appApi}/cdn/${name.replace('G:\\MAKS\\GitHub\\cdn-express/public/', '')}`,
            })
        }
   }
}

 

module.exports = { getFile };