const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

// Collections

// Activities
// Collections: electricity / car / flight / shipping etc.
//  user ObjectId, inputs (electricity/car/flight/shipping), footprint(carbon-lbs), footprint(carbon-mt), time of request)

const activitySchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
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
  total: { type: Number, default: 0 },
});

const User = mongoose.model('user', userSchema);
const Activity = mongoose.model('activity', activitySchema);

module.exports = {
  User,
  Activity,
};
//  ObjectId(default), username, password, { activityType, activityId },
