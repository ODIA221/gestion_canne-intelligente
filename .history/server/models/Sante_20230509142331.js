const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let santeSchema = new Schema({
   /*  _id: { type: String, required:false }, */
   jour: { type: String},
   temperature: { type: String},
   humsol: { type: String},
 
}, {timestamps: true},
{
    collection: 'historique'
})


module.exports = mongoose.model('historique', climatSchema)