import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, 'Please provide a firstname'] },
  lastName: { type: String, required: [true, 'Please provide a lastname'] },
  email: { type: String, required: [true, 'Please provide an email'] },
  fatherName: { type: String, required: [true, 'Please provide a fathername'] },
  motherName: { type: String, required: [true, 'Please provide a mothername'] },
  address: { type: String, required: [true, 'Please provide an address'] },
  pincode: { type: Number, required: [true, 'Please provide a pincode'] },
  country: { type: String, required: [true, 'Please provide a country'] },
});

// export default mongoose.models.User || mongoose.model('User', userSchema);

export default mongoose.models.Users || mongoose.model('Users', userSchema);
