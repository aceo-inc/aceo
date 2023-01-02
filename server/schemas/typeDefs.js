const { gql } = require("apollo-server-express");
const typeDefs = gql`
	type User {
		_id: ID
		name: String
		email: String
		password: String
		gender: String
		role: String
		description: String
		contactInfo: [String]
		contacts: [User]
	}

	type Query {
		users: [User]
	}
	type Mutation {
		createUser(
			name: String!
			email: String!
			password: String!
			gender: String
			role: String!
			description: String
			contactInfo: [String]
			contacts: [String]
		): User
	}
`;

module.exports = typeDefs;
