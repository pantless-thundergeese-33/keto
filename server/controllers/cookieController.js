const User = require('../models/userModels');
const Session = require('../models/sessionModels');
const cookieController = {};

cookieController.setSSIDCookie = async (req, res, next) => {
  console.log('in setSSID');
  try {
    res.cookie('ssid', res.locals.id, { httpOnly: true, expire: new Date(Date.now() + 45000) }); //new Date( Date.now() + 45000 )
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = cookieController;
