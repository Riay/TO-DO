const express = require('express')
const router = express.Router()

const removeById = require('./handlers/deleteTask')

const updateById = require('./handlers/updateTask')

router.delete('/:id', removeById )

router.put('/:id', updateById)

module.exports = router