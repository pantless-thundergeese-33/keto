const express = require('express');
const { restart } = require('nodemon');

const controller = require('../controllers/controller');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

// Creating new user
router.post(
  '/signup',
  controller.newUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('res.local.newUsername ****************** :', res.locals.newUsername);
    return res.status(200).json(res.locals.newUsername);
  }
);

// Login
router.get(
  '/login',
  controller.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).json({ msg: 'Logged in' })
);

// Save Activity
router.post('/activity', sessionController.verifySession, controller.saveActivity, (req, res) =>
  res.sendStatus(200)
);

// Get All Activities
router.get('/activity', sessionController.verifySession, controller.getActivity, (req, res) =>
  res.status(200).json(res.locals.allActivity)
);

router.delete('/activity', sessionController.verifySession, controller.deleteActivity, (req, res) =>
  res.sendStatus(200)
);

// test routes
router.post('/test', controller.saveActivity, (req, res) => {
  console.log('returning the following: ', res);
  return res.status(200).json(res.locals.newActivity);
});

router.get('/test', controller.getActivity, (req, res) => {
  console.log('returning the following: ', res);
  return res.sendStatus(200);
});

router.delete('/test', controller.deleteActivity, (req, res) => {
  console.log('returning the following: ', res);
  return res.sendStatus(200);
});

module.exports = router;
