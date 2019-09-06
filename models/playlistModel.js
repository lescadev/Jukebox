const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: 1
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
},{timestamps:true});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = { Playlist };
