const express = require('express')
const path = require('path')

let app = express()

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/signup',(req,res) => {
    res.sendFile(path.join(__dirname, 'sign_up.html'))
})

app.post('/signup',(req,res) => {
    // const name = req.body.name
    // const place = req.body.place
    // const username = req.body.username;
    // const password = req.body.password store the datas seperately

    const {name,place,username,password} = req.body

    console.log('Name:', name);
    console.log('Place:', place);
    console.log('Username:', username);
    console.log('Password:', password);

    res.send('Form data received and printed in the console!');
})

app.listen(400, () => console.log('server started'))