const express= require('express')

const { createComment } = require('../controllers/Comment')

const router = express.Router()


router.post('/:pinId', createComment)

module.exports=router