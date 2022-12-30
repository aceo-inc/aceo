const { Schema, model } = require("mongoose");
const User = require("./User");

const ownerSchema = new User({
	// What does an owner need that is unique?
	// * Array of choices made for project
	// * Array of users involved with project
});

const Owner = model("Owner", ownerSchema);

module.exports = Owner;
