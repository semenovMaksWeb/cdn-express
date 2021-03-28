const router = require('express').Router();
const  { setDirective } = require("../server/set-directive")
const  { deleteFile } = require("../server/delete-directive")
const  { updateFile } = require("../server/update-directive")
router.post('/catalog/*', async (req,res,next) =>{
    if(!req.body.name){
        return  res.status(400).send({
            "error": "Вы не указали название создаваймой папки"
        })
    }
    let url = "";
    if(req.params[0]){
        url = req.params[0];
    }
    const  data = await  setDirective(url , req.body.name);
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
router.delete('/catalog/*',  (req, res, next) =>{
    const data = deleteFile(req.params[0]);
    res.send(data);
})

router.put('/catalog/*',  (req, res, next) =>{
    if(!req.body.name){
        return res.status(400).send({
            "error": "Вы не указали новое имя для каталога"
        });
    }
    const data = updateFile(req.params[0], req.body.name);
    res.send(data);
})

module.exports = router;