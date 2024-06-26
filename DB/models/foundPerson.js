import mongoose from 'mongoose';

const foundPersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String },
  location: { type: String },
  governorate: { type: String },
  phone: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
}, { timestamps: true });

export const FoundPerson = mongoose.model('FoundPerson', foundPersonSchema);
