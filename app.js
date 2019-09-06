const express = require("express");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const cors = require("cors");
require("dotenv").config({ path: "./.env.local" });

mongoose
  .connect(process.env.URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connection mongo");
  })
  .catch((err) => {
    console.log("Une erreur est survenue", err);
  });

let app = express();
let server = app.listen(process.env.PORT, () => {
  console.log(`Le server est ok sur le port ${process.env.PORT}`);
});

let io = socketIo(server);

io.on('connection', (socket)=>{
    socket.on('vote', (data) => {
        //TODO: Si la barre de soulance est au max on switch de vidéo
        io.emit('updateVote', data);
    })
    socket.on('message', (message)=>{
        //Pour le chat
        io.emit('message', message);
    })
})