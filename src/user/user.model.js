import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
