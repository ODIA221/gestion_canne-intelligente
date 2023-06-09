const { truncateSync } = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
   /* Données  Responsonbales*/
    prenom: { type: String, required:true },
    nom: { type: String, required:true },
    password: { type: String, required:true },
    etat: { type: Boolean, required:false },
    role: { type: String, required:false },
    id_canne: { type: String, unique: true, required:false },

    /* Données concernés */
    prenom1: { type: String, required:false },
    nom1: { type: String, required:false },
    adresse: { type: String, required:false },
    telephone: { type: Number, required:false },

}, {timestamps: true},

{
    collection: 'CanneUsers'
})

userSchema.plugin(uniqueValidator, { message: 'Compte déjà existant !' });

module.exports = mongoose.model('CanneUsers', userSchema)




