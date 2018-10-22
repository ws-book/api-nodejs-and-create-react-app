import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  last_name : String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
