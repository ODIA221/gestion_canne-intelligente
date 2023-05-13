const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let climatSchema = new Schema({
   /*  _id: { type: String, required:false }, */
   jour: { type: String},
   cardiaque: { type: String},
   tension: { type: String},
}, {timestamps: true},
{
    collection: 'historique'
})


module.exports = mongoose.model('historique', climatSchema)
