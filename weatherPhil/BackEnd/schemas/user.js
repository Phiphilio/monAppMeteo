const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');


// je crée une instance de mongoose.Schema et je définis pour chaque propriété le genre d'informations attendus
const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique:true
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

module.exports = mongoose.model('User', UserSchema)