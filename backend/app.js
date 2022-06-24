import { application } from 'express';
import App from './config/config.js';

const port = process.env.APP_PORT || 8081;
App.http.listen(port, ()=>console.log(`API is running, port: ${port}`));











// const express = require('express');
// const app = express();
// require('dotenv').config();

// const port = process.env.APP_PORT;

// app.listen(port,()=>{
//     console.log(`escuchando en ${port}`)
// })

// app.get('/hello',(req, res) =>{
//     res.send('hello world from get')
// })
