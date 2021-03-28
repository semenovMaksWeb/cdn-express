const router = require('express').Router();
const { setAll, getAll, deleteAll, updateAll } = require('../server')
router.get('/file/*', async (req,res,next) =>{
    const data = await getAll(req.params[0]);
    if(data.error){
        res.status(400).send({
            "error": data.error
        })
    }else{
        res.send({
            data
        });
    }
 
});
router.post('/file/*', async (req,res,next) =>{
    if(!req.files){
        res.status(400).send({
            "error": "Вы не отправил файл на сохранения"});
    }else{
        const data = await setAll(req.params[0], req.files.img);
        res.send(data);
    }
});
router.delete('/file/*', async(req, res, next) =>{
    const data = await deleteAll(req.params[0]);
    res.send(data);
})
router.put('/file/*', (req, res, next) =>{
    if(!req.body.name){
        return res.status(400).send({
            "error": "Вы не указали новое имя для файла"
        });
    }
    const data = updateAll(req.params[0],  req.body.name);
    res.send(data);
})



module.exports = router;