import express from 'express';

export class Routes{

    routes(app = express.application) {
        app.get('/', (req, res)=>{
            res.send('hola mundo');
        });


        app.post('/data', (req, res)=>{
            const body = req.body;
            console.log('data from front',body);
            return res.status(200).json({ok:true, message: 'data received'});
        });
    }
}