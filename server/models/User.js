const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
   /* Données  Responsonbales*/
    prenom: { type: String, required:true },
    nom: { type: String, required:true },
    password: { type: String, required:true },
    etat: { type: Boolean, required:false },
    id_canne: { type: String, unique: true, required:false },

    /* Données concernés */
    prenom1: { type: String, required:false },
    nom1: { type: String, required:false },
    adresse: { type: String, required:false },
    telephone: { type: Number, required:false },
    photo: { type: String, required:false },

}, {timestamps: true},
{
    collection: 'user'
})

userSchema.plugin(uniqueValidator, { message: 'Compte déjà existant !' });

module.exports = mongoose.model('user', userSchema)
