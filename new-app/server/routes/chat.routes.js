const express = require("express");
const router = express.Router();
const User = require('./../models/User.model')

router.get('/', (req, res) => { })
router.post('/create/:userId', (req, res) => { })
router.post('/delete/:chatId', (req, res) => { })

module.exports = router
