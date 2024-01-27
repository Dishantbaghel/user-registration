import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide a firstname'],
  },
  lastName: {
    type: String,
    required: [true, 'Please provide a lastname'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  fatherName: {
    type: String,
    required: [true, 'Please provide a fathername'],
  },
  motherName: {
    type: String,
    required: [true, 'Please provide a mothername'],
  },
  address: {
    type: String,
    required: [true, 'Please provide an address'],
  },
  pincode: {
    type: Number,
    required: [true, 'Please provide a pincode'],
  },
  country: {
    type: String,
    required: [true, 'Please provide a country'],
  },
});

const User =mongoose.models.User || mongoose.model('User', userSchema);

export default User;
