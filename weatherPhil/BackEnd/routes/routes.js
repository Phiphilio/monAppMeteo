const express = require('express')
const User = require('../schemas/user.js')
const router = express.Router()

router.post('/', async (req,res)=>{
    const {username, password} = req.body;
    /** on utilise la déstructuration pour retirer les données
    username et password
    */
    const newUser = new User({username, password})
    /* les données retirées sont passées en arguments de la nouvelle instance d'User*/

    await newUser.save();
    //enregistre le nouvel utilisateur dans la base de donnée
    res.send('salut je teste un truc')

})


module.exports = router;