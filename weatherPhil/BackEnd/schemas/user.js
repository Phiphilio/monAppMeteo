const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  /**
  1) ^ : Indique le début de la chaîne.
  2) [^\s@]+ : Correspond à un ou plusieurs caractères qui ne sont ni des espaces (\s) ni des signes @
  3) @ : Correspond au caractère @.
  4) \. : Correspond à un caractère de point (.).
  le point est échappé (\.) pour indiquer qu'il s'agit du caractère point littéral et pas d'un métacaractère regex.
  5) $ : Indique la fin de la chaîne.
  */
  return emailRegex.test(email);

  /**
  La méthode test de l'expression régulière est utilisée pour vérifier si l'argument email correspond au motif défini par emailRegex.
   La méthode test retourne true si l'adresse e-mail correspond au motif, sinon elle retourne false.
  */
};

// je crée une instance de mongoose.Schema et je définis pour chaque propriété le genre d'informations attendus
const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique:true
    },
    mail : {
        type: String,
        required: true,
        unique: true,
        validate: [emailValidator, 'Veuillez entrer une adresse e-mail valide.']
    },
    password : {
    type: String,
    required : true
    }
});

//hashage du mot de passe avant d'être enregistré dans la base de donnée
UserSchema.pre('save', async function(next){
    if(!this.isModified('password')) {
        return next();
    }else {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
})
/** avant que les informations ne soient sauvegardées dans la base de donnée,
elles doivent d'abord être soumises à cette fonction*/

module.exports = mongoose.model('weatherPhilUser', UserSchema)
/**
Mongoose se chargera de créer la collection automatiquement si elle n'existe pas encore.
La collection sera créée la première fois que j'enregistre un document en utilisant ce modèle.

rappel, je suis déjà connecté à la base de donnée qui contient cette collection grâce
à la variable d'environnement contenue dans le ".env" (nommée : MONGO_URI)
*/