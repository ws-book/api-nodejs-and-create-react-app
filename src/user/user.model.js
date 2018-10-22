import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number, 
  email: {
    type: String,
    validate: function(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }, 
    required: [true, 'User email required']
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
