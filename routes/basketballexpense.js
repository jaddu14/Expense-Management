const express = require('express')
const router = express.Router()
const expenseControl = require('../controllers/basketballexpense')
router.post('/credit', expenseControl.credit )
router.get('/show', expenseControl.show)
module.exports = router