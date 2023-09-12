const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
require('dotenv').config();

const app = express();

PORT = 8080;

app.get('/', (req, res) => {
    
    const fecha = new Date();

    let hora = fecha.getHours();
    
    if (hora > 5 & hora < 13) {
        res.send(`<h1 style= "color: red"> Buenos días </h1>`)
    } else if ( hora >12 & hora <20) {
        res.send(`<h1 style= "color: blue"> Buenas tardes </h1>`)
    } else {
        res.send(`<h1 style= "color: yellow"> Buenas noches </h1>`)
    }   
});

app.listen(PORT, (err) =>{
    if(err) { throw err }

    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}` );
});