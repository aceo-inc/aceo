const mongoose = require("mongoose");

require("dotenv").config();

const seedDb = async () => {
	await mongoose.connect(`mongodb://127.0.0.1:27017/aceo`);

	console.log("Database Successfully Seeded");

	process.exit(0);
};

seedDb();
