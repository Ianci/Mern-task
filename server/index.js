const express = require ("express");
 const connectDB = require('./config/config')
//Create server
const app = express();
 
//Conectar a la BD
connectDB();
//Puerto de la App
const PORT = process.env.port || 4000;
//Definir página principal
 
app.get('/', (req, res)=> {
    res.send("Testing")
})
//Arrancando la App
app.listen(PORT, () => { console.log(`El server está funcionando en el puerto ${PORT}`)})