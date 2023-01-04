const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
	address: {
		type: String,
		required: true,
	},
	// virtuals can be added to filter by various categories
	choices: {
		type: Schema.Types.ObjectId,
		ref: "Choice",
	},
	//    What else?

	// users associated with the project. While some/most of these will be a single person, having it as an array allows for there to be more than one if necessary.
	owners: [
		{
			type: Schema.Types.ObjectId,
			ref: "Owner",
		},
	],
	architects: [
		{
			type: Schema.Types.ObjectId,
			ref: "Architect",
		},
	],
	contractors: [
		{
			type: Schema.Types.ObjectId,
			ref: "Contractor",
		},
	],
	engineers: [
		{
			type: Schema.Types.ObjectId,
			ref: "Engineer",
		},
	],
});

const Project = model("Project", projectSchema);

module.exports = Project;
