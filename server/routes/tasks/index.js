const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addTask = require('./handlers/addTask')
const completeTask = require('./handlers/completeTask')

router.get('/', getAll)
router.post('/', addTask)
router.get('/complete', completeTask)


module.exports = router