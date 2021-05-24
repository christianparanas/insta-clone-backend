const express = require("express")
const app = express();

const dbModels = require("./models")
const port = 3001;

dbModels.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Server running at ${port}`)
	})
})