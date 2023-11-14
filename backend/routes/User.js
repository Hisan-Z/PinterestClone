const express = require('express')

const {
    registerUser,
    loginUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
} = require('../controllers/User')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', getUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router
