const express = require('express')
const router = express.Router()
const expenseControl = require('../controllers/cricketmember')

router.post('/add', expenseControl.add )
router.get('/show', expenseControl.show)
router.post('/destroy', expenseControl.destroy)

module.exports = router