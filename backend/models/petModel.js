const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  personality: { type: String, required: true },
  adopted: { type: Boolean, default: false },
  adoption_date: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

petSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Pet', petSchema);
