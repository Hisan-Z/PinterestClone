require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const cors = require('cors')

const userRoutes = require('./routes/User')
const pinRoutes = require('./routes/Pins')
const commentRoutes= require('./routes/Comment')
const likeRoutes=require('./routes/Like')

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use('/api/user', userRoutes)
app.use('/api/pins', pinRoutes)
app.use('/api/comment',commentRoutes )
app.use('/api/like',likeRoutes)

app.get('/', (req, res) => {
    res.send('<h1> Pinterest clone backend is up and running!</h1>')
})

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected!')
        return app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
    })
    .catch((err) => console.error(err.message))
