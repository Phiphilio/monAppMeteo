const express = require('express')
const User = require('../schemas/user.js')
const router = express.Router()

router.post('/newUser', async (req,res)=>{
    const {username, password} = req.body;
    /** on utilise la déstructuration pour retirer les données
    username et password
    */
    try {
        if (!username || !password) {
          return res.status(400).send('Username and password are required.');
        }
        const newUser = new User({username, password})
        /* les données retirées sont passées en arguments de la nouvelle instance d'User*/

        await newUser.save();
        //enregistre le nouvel utilisateur dans la base de donnée

        res.status(201).send('Utilisateur créé avec succès');
        }catch(error){
         // Vérifie si l'erreur est une duplication de clé
            if (error.code === 11000) {
              return res.status(400).send('Ce nom d\'utilisateur est déjà pris.');


        }
    }
})


module.exports = router;