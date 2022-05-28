const { User, Activity } = require('../models/userModels.js');


const controller = {};


// Creates a new user
controller.newUser = async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const data = await User.create({username, password });
    return res.status(200).send(data);
  }
  catch (err) {
    return next(err);
  }
};


// On req.body there will be inputs and outputs
// Get the inputs from req.body and update the user to have the document ID.
// In our actions collection, create a new document with an ID, type, and attributes
controller.saveActivity = async function (req, res, next) {
  try {
    const { userId } = req.params;
    console.log("userID: ", userId)
    console.log("Request Body: ", req.body)
    const { inputs, outputs } = req.body;
    // Create new activity document in MongoDB with userId, inputs, and outputs
    const { activityType, details } = inputs;
    const { carbon_lb, carbon_mt, estimated_at } = outputs.data.attributes;
    const newActivity = await Activity.create({userId, activityType, details, footprintLb:carbon_lb, footprintMt:carbon_mt, reqTime:estimated_at })
    // const activityId = newActivity._id;
    console.log("newActivity: ", newActivity);
    // Update user document with new activity Id (will be generated after create method is done)
    // const update = User.findOneAndUpdate({username/userId}, activityId: activityId )
  }
  catch (err){
    return next(err);
  }
};


module.exports = controller;