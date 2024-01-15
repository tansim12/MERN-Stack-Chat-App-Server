require("dotenv").config();

const http = require("http");
const app = require("./src/app");
const dbConnect = require("./src/db/dbConnect");
const port = process.env.PORT || 3000;
const server = http.createServer(app);

// global.io = io;

// io.on("connection", (socket) => {
//   console.log("New user connected");

//   // Additional socket events or logic can be added here

//   // Disconnect event
//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });
// });

const main = async () => {
  try {
    await dbConnect();
    server.listen(port, async () => {
      console.log(`Chat Server running ${port}`);
    });
  } catch (e) {
    console.log("Database Error");
    console.log(e);
  }
};

main();
