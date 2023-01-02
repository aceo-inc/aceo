const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		users: async () => {
			return User.find({});
		},
	},
	Mutation: {
		createUser: async (parent, { name, email, password, gender, role, description, contactInfo, contacts }) => {
			const user = await user.create({
				name,
				email,
				password,
				gender,
				role,
				description,
				contactInfo,
				contacts,
			});
			return { user };
		},
	},
};

module.exports = resolvers;
