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
    console.log('request body ************** :', req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await User.create({ username: username, password: hashedPassword });
    console.log('returned data **************:', data);
    res.locals.newUsername = data.username;
    console.log('data.username *********************:', data.username);
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
    const { activity, carbon_lb } = req.body;
    const id = req.cookies.ssid;
    console.log('Request Body: ', req.body);
    // Create new activity document in MongoDB with userId, inputs, and outputs
    const newActivity = await Activity.create({
      user_id: id,
      activity: activity,
      carbon_lb: carbon_lb,
    });
    // const activityId = newActivity._id;
    console.log('newActivity: ', newActivity);
    res.locals.newActivity = newActivity;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $push: { activity: newActivity._id } },
      { new: true }
    );
    // updating total carbon in users collection
    const newTotal = await User.findOneAndUpdate( {_id : res.locals.id}, {$inc: {total : carbon_lb}} )
    res.locals.total = newTotal
    console.log('new Total : ', newTotal)
    return next();
    // Update user document with new activity Id (will be generated after create method is done)
    // const update = User.findOneAndUpdate({username/userId}, activityId: activityId )
  } catch (err) {
    return next(err);
  }
};

controller.getActivity = async function (req, res, next) {
  try {
    const id = req.cookie.ssid;
    const data = await Activity.find({ user_id: id });
    const allActivity = data.json();
    res.locals.allActivity = allActivity;
    return next();
  } catch (err) {
    return next(err);
  }
};

controller.deleteActivity = async function (req, res, next) {
  try {
    const id = req.cookie.ssid;
    const { activity } = req.body;
    const deletedDoc = await Activity.findOneAndDelete({ activity: activity, user_id: id });
    const { carbon_lb } = deletedDoc
    //decrement the total carbon in user
    const newTotal = await User.findOneAndUpdate( {_id : res.locals.id}, {$inc: {total : -(carbon_lb)}} )
    res.locals.total = newTotal
    console.log('new total: ', newTotal)
    return next();
  } catch (err) {
    return next(err);
  }
};
module.exports = controller;
