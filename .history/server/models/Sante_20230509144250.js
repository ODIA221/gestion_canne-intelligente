const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let santeSchema = new Schema({
   /*  _id: { type: String, required:false }, */
   jour: { type: String},
   humsol: { type: String},
 
}, {timestamps: true},
{
    collection: 'sante'
})


module.exports = mongoose.model('historique', santeSchema)