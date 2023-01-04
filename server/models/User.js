const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// This is a basic model for the user. Uses bcrypt to salt the password. A description is mostly for the Engineer, Contractor and Architect.
const userSchema = new Schema(
	{
		prefix: {
			type: String,
			required: false,
			trim: true,
		},
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		middleName: {
			type: String,
			required: false,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		suffix: {
			type: String,
			required: false,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: 8,
		},
		gender: {
			type: String,
			required: false,
			trim: true,
		},
		// Options for role: Architect, Contractor, Engineer, Owner - Each of these will have a model that extends the User
		role: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			trim: true,
			maxLength: 1000,
		},
		// a Map type can store a variety of different contact types, such has phone number and email, instead of having them as keys.
		// WARNING: You need to use .get() to get the value of a key and .set() to set the value of a key with a Map type.
		// https://mongoosejs.com/docs/schematypes.html#maps
		contactInfo: {
			type: Map,
			of: String,
		},
		contacts: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{
		virtuals: {
			fullName: {
				get() {
					return this.name.first + " " + this.name.last;
				},
			},
		},
	},
	{
		toJson: {
			virtuals: true,
		},
		id: false,
	}
);
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};
const User = model("User", userSchema);

module.exports = User;
