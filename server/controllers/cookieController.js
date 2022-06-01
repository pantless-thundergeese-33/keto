const User = require('../models/userModels');
const Session = require('../models/sessionModels');
const cookieController = {};

cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    res.cookie('ssid', res.locals.id, { httpOnly: true });
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = cookieController;
