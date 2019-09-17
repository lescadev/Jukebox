const express = require("express");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const cors = require("cors");
require("dotenv").config({ path: "../.env.local" });
const router = require("./routes/UserController");

mongoose
  .connect(process.env.URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connection mongo");
  })
  .catch((err) => {
    console.log("Une erreur est survenue", err);
  });

let app = express();

app.use(cors()).use(express.json());
app.use("/api/user", router);

let server = app.listen(process.env.PORT, () => {
  console.log(`Le server est ok sur le port ${process.env.PORT}`);
});

let io = socketIo(server);

io.on("connection", (socket) => {
  socket.on("vote", (data) => {
    //TODO: Si la barre de soulance est au max on switch de vidéo
    io.emit("updateVote", data);
  });
  socket.on("message", (message) => {
    //Pour le chat
    io.emit("message", message);
  });
});
