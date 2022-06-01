const User = require('../models/userModels');
const Session = require('../models/sessionModels');
const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  try {
    console.log('In session starter');
    const id = res.locals.id;
    const newSession = await Session.create({ ssid: id });
    return next();
  } catch (err) {
    return next(err);
  }
};

sessionController.verifySession = async (req, res, next) => {
  try {
    const currSession = await Session.findOne({ ssid: req.cookies.ssid });
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = sessionController;
