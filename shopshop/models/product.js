var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    //een pad, want de daadwerkelijke image komt niet uit de db
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    prics: {type: Number, required: true},
});

//we gaan deze als blueprint gebruiken voor de models (daadwerkelijke data)
//dus deze file moet beschikbaar worden
module.exports = mongoose.model('Product', schema);