const express = require('express')

const { AddLike, RemoveLike } = require('../controllers/Like')
const router = express.Router()

router.post('/:id', AddLike)
router.post('/delete/:id',RemoveLike)

module.exports = router