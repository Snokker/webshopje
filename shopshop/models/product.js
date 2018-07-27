var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    //een pad, want de daadwerkelijke image komt niet uit de db
    imagePath: {type: string, required: true},
    title: {type: string, required: true},
    description: {type: string, required: true},
    prics: {type: Number, required: true},
});

//we gaan deze als blueprint gebruiken voor de models (daadwerkelijke data)
//dus deze file moet beschikbaar worden
model.exports = mongoose.model('Product', schema);