
// import coremodel from './genericModel';
const mongoose = require('mongoose');
const collection = "user";
const mongooseSchema = mongoose.Schema;

const userSchema = new mongooseSchema({
	userId: { type: String },
	username: {type:String},
	password: {type:String}
});

// coremodel.addIncrement(collection, reviewSchema, 'reviewID', 100, 1, true);
let userModel = mongoose.model(collection, userSchema);
module.exports = userModel
