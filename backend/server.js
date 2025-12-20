import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const PORT = process.env.PORT;

const app = express();

app.get('/', (req,res)  =>{
    res.status(200).type('text/plain').send('Mi primer servidor');
});

app.get('/usuarios', userView );

//app.post('/usuarios', userAdd);


app.listen(PORT, () =>{
    console.log(`sERVIDOR CORRIENDO EN ${PORT}`);
});