const router = require('express').Router();
const { setAll, getAll } = require('../server')
router.get('/file/*', async (req,res,next) =>{
    const data = await getAll(req.params[0]);
    res.send({
        "success": true,
        data
    });
});
router.post('/file/*', async (req,res,next) =>{
    if(!req.files){
        res.status(400).send({
            "success": false,
            "error": "Вы не отправил файл на сохранения"});
    }else{
        const data = await setAll(req.params[0], req.files.img);
        res.send({
            "success": true,
            data
        });
    }
 
});


module.exports = router;