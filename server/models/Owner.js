const { Schema, model } = require("mongoose");
const User = require("./User");

const ownerSchema = new User({
	// What does an owner need that is unique?
	// * Array of users involved with the owner
	contacts: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

const Owner = model("Owner", ownerSchema);

module.exports = Owner;
