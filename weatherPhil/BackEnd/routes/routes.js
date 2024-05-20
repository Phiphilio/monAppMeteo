const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{
    res.send('salut je teste un truc')
})


module.exports = router;