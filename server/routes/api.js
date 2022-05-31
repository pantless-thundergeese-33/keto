const express = require('express');
const { restart } = require('nodemon');

const controller = require('../controllers/controller');

const router = express.Router();

// Creating new user
router.post('/', controller.newUser, (req, res) => res.status(200).json(res.locals.newUsername));

// Login 
router.get('/login', controller.verifyUser, (req, res) => res.status(200).json({msg: 'Logged in'}));

// 
router.post('/activity',controller.saveActivity, (req,res) => res.sendStatus(200));
module.exports = router; 