require("dotenv").config()

const http = require('http');
const app = require("./src/app");
const dbConnect = require("./src/db/dbConnect");
const port  = process.env.PORT || 5000
const server = http.createServer(app)

const main = async () => {
	try {
        await dbConnect();
		server.listen(port, async () => {
            console.log(`Chat Server running ${port}`);
		});
	} catch (e) {
		console.log('Database Error');
		console.log(e);
	}
};

main();


