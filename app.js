const express = require('express')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const userController = require('./controllers/userController')

const app = express()

app.set('view engine', 'pug')

mongoose.connect('mongodb://localhost/freshauction', {
    useMongoClient: true
})

app.get('/register', userController.showRegister)
app.post('/register', )

//make a route app.post('/register', userController) that will post to register.pug and send info there

app.listen(8080, () => {
    console.log('Server is running');
})