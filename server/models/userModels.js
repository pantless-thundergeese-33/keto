const mongoose = require('mongoose');
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

// Collections

// Activities
// Collections: electricity / car / flight / shipping etc.
//  user ObjectId, inputs (electricity/car/flight/shipping), footprint(carbon-lbs), footprint(carbon-mt), time of request)

const activitySchema = new Schema({
  username: {
    type: String,
    ref: 'user',
  },
  activity: String,
  carbon_lb: Number,
});

// users
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  activities: [
    {
      activityId: {
        type: Schema.Types.ObjectId,
        ref: 'activity',
      },
    },
  ],
});

const User = mongoose.model('user', userSchema);
const Activity = mongoose.model('activity', activitySchema);

module.exports = {
  User,
  Activity,
};
//  ObjectId(default), username, password, { activityType, activityId },
