const express = require('express')
const router = express.Router()
const cricketControl = require('../controllers/cricketexpense')

router.post('/credit', cricketControl.credit )
router.get('/show', cricketControl.show)

module.exports = router