const mongoose = require("mongoose");
require("dotenv").config();
// aceo database has placeholder "user" collection for now.
mongoose.connect(`mongodb://127.0.0.1:27017/aceo`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
module.exports = mongoose.connection;
