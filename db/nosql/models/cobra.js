var mongoose = require('mongoose');

var cobraSchema = mongoose.Schema({
	name: String,
	age: Number
}, {collection: 'Cobras'})

var Cobra = mongoose.model('Cobra', cobraSchema);

module.exports = Cobra;