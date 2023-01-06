const { Schema, model } = require("mongoose");

// I'll be honest, I stole the categories from The Sims.

const choiceSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	// required is false in case schema is used for odds and ends where the brand doesn't matter.
	brand: {
		type: String,
		required: false,
	},
	// product unique ID number, used for locating in a supplier's database
	sku: {
		type: String,
		required: false,
	},
	amount: {
		type: Number,
		required: true,
	},
	// ordered, on site, installed, awaiting final approval, etc.
	status: {
		type: String,
		required: true,
	},
	// used for things that need a color, otherwise can be left blank
	color: {
		type: String,
		required: false,
	},
	// date after which the choice cannot be changed
	locked: {
		type: Date,
		required: false,
	},
	// rooms: Kitchen, Bathroom, Bedroom, Living Room, Dining Room, Study, Outdoors
	roomCategory: {
		type: String,
		required: false,
	},
	// functions: Comfort, Surfaces, Plumbing, Activities and Skills, Decorations, Lighting, Electronics, Appliances, Storage, Water Features, Transportation
	functionCategory: {
		type: String,
		required: false,
	},
});

const Choice = model("Choice", choiceSchema);

module.exports = Choice;
