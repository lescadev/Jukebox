const express= require('express')
const mongoose= require('mongoose')
const socketio= require('socket.io')
const cors= require('cors')
require('dotenv').config({path: './.env.local'})


mongoose.connect(process.env.URI,{ useNewUrlParser: true }).then(()=>{
    console.log('connection mongo')
});

let app= express();
let server= app.listen(process.env.PORT);
