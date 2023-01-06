const { Schema, model } = require("mongoose");
const User = require("./User");

const contractorSchema = new User({
	// What does an contractor need that is unique?
});

const Contractor = model("Contractor", contractorSchema);

// module.exports = Contractor;
