const express = require('express')
const path = require('path')

let app = express()

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/signup',(req,res) => {
    res.sendFile(path.join(__dirname, 'sign_up.html'))
})

app.post('/signup',(req,res) => {
    res.sendFile(path.join(__dirname, 'sign_up.html'))
})

app.listen(400, () => console.log('server started'))