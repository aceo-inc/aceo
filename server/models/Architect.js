const { Schema, model } = require("mongoose");
const User = require("./User");

const architectSchema = new User({
	// What does an architect need that is unique?
});

const Architect = model("Architect", architectSchema);

// module.exports = Architect;
