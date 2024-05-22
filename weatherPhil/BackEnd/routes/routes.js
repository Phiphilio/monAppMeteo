const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
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

dotenv.config()
//récupère la clé dans le fichier env.
const Key = process.env.JWT_KEY

//mise en place de la route pour la connexion
router.post('/connexion', async (req,res)=>{
    const {username,password} = req.body;

  try {
    // Vérifiez si l'utilisateur existe dans la base de données
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect.');
    }

    // Vérifiez le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect.');
    }

    // Générer un token JWT
        const token = jwt.sign({ username: user.username }, Key, { expiresIn: '1h' });
        res.json({ token });
      } catch (err) {
        res.status(500).send('Erreur du serveur');
        console.log('voici l\'erreur :',err)
      }
})

router.get('/protected', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Token requis.');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Token invalide.');
    }

    res.send(`Bienvenue, ${decoded.username}`);
  });
});
module.exports = router;