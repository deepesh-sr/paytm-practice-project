const mongoose = require("mongoose");
const { string } = require("zod");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", UserSchema);

module.exports = {
  User,
};
