const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.APP_PORT;

app.listen(port,()=>{
    console.log(`escuchando en ${port}`)
})

app.get('/hello',(req, res) =>{
    res.send('hello world')
})