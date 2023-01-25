const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.json({
        message: "Selamat datang di Final Project"
    })
    // res.render('index.ejs')
})

const userRoutes = require('./user')
const itemRoutes = require('./item')
const brandRoutes = require('./brand')

route.use('/users', userRoutes)
route.use('/items', itemRoutes)
route.use('/brands', brandRoutes)


module.exports = route