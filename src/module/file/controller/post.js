const router = require('express').Router();
const { setAll } = require('../server');
router.post('/file/*', async (req,res,next) =>{
    if(!req.files){
        res.status(400).send("Вы не отправил файл на сохранения");
    }else{
        const data = await setAll(req.params[0], req.files.img);
        res.send({
            "success": true,
            data
        });
    }
 
});

module.exports = router
