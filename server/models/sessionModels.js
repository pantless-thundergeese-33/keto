const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const MONGO_URI =
  'mongodb+srv://practice:qwerty13579@cluster0.ds4ax.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // Options for parsing the URI (not too sure what's going on here, it's just from the star wars database unit)
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ketoproject',
  })
  .then(console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const sessionSchema = new Schema({
  ssid: {
    type: String,
    unique: true,
  },
  createdAt: { type: Date, expires: 45, default: Date.now },
});

const Session = mongoose.model('session', sessionSchema);
module.exports = Session;
