const express = require("express");
const router = express.Router();
const User = require('../models/User.model')
const Quote = require('../models/User.model')

//Añadir middleware moderador y admin


router.get('/', (req, res) => {

})

router.post('/create', (req, res) => {
})

router.post('/edit', (req, res) => {
})

router.post('/delete', (req, res) => {
})

router.get('/:userId', (req, res) => {
})

router.post('/vote/:id', (req, res) => {
})

router.post('/addFavorite/:id', (req, res) => {
})

router.post('/deleteFavorite/:id', (req, res) => {
})



module.exports = router
