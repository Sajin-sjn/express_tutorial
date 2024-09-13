const express = require('express')

let app = express()

app.get('/',(req,res) => {
    res.send("hello world, this is in the default url that is home...")
})

app.listen(400, () => console.log('server started'))