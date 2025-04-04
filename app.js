const express = require ('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/',(req,res)=>{
    res.send('Apollonia Dental Practice Employee Management App');
});

app.listen(port,()=>{
    console.log('Server is running on :${port}');
});