const mongoose = require('mongoose');
const { User, Activity } = require('../models/userModels.js');
const controller = {};
//Need bcrypt to hash password
//npm i bcrypt
const bcrypt = require('bcrypt');

// Creates a new user
controller.newUser = async function (req, res, next) {
  try {
    const { username, password } = req.body;
    //Hash the new password
    // console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await User.create({ username: username, password: hashedPassword });
    res.locals.newUsername = data.username;
    res.locals.id = data._id;
    return next();
  } catch (err) {
    return next(err);
  }
};

// Load hash from your password DB.
//bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
// result == true
//});
//bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
// result == false
//});

// Verify a user's login information
controller.verifyUser = async function (req, res, next) {
  try {
    const { username, password } = req.query;
    const data = await User.findOne({ username: username });
    const pwRes = await bcrypt.compare(password, data.password);
    if (pwRes) {
      res.locals.id = data._id;
      return next();
    } else {
      throw new Error('Incorrect Username/Password');
    }
  } catch (err) {
    return next(err);
  }
};

controller.saveActivity = async function (req, res, next) {
  try {
    const { username, activity, carbon_lb } = req.body;
    console.log('Request Body: ', req.body);
    // Create new activity document in MongoDB with userId, inputs, and outputs
    const newActivity = await Activity.create({
      username: username,
      activity: activity,
      carbon_lb: carbon_lb,
    });
    // const activityId = newActivity._id;
    console.log('newActivity: ', newActivity);
    const updateUser = await User.findOneAndUpdate(
      { username: username },
      { $push: { activity: newActivity._id } },
      { new: true }
    );
    return next();
    // Update user document with new activity Id (will be generated after create method is done)
    // const update = User.findOneAndUpdate({username/userId}, activityId: activityId )
  } catch (err) {
    return next(err);
  }
};

module.exports = controller;
