const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  ssid: {
    type: String,
    unique: true,
  },
  createdAt: { type: Date, expires: 45, default: Date.now },
});

const Session = mongoose.model('session', sessionSchema);
module.exports = Session;
