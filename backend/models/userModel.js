const mongoose = require("mongoose");
const jwt = require("jwt-simple");
const passwordHash = require("password-hash");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: 1
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      minLength: 5
    },
    role: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

userSchema.methods = {
  authenticate: function(password) {
    return passwordHash.verify(password, this.password);
  },
  getToken: function() {
    return jwt.encode(this, process.env.SECRET);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};
