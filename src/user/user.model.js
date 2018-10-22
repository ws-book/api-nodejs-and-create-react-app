import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email : String,
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
