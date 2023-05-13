const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let climatSchema = new Schema({
   /*  _id: { type: String, required:false }, */
   jour: { type: String},
   temperature: { type: String},
   humsol: { type: String},
   humserre: { type: String},
   luminosite: { type: String},
}, {timestamps: true},
{
    collection: 'historique'
})


module.exports = mongoose.model('historique', climatSchema)