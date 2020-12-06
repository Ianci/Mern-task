const express = require ("express");
 const connectDB = require('./config/config')
//Create server
const app = express();
 
//Conectar a la BD
connectDB();

//Habilitar express.json
app.use(express.json({ extended: true}));
//Puerto de la App
const PORT = process.env.port || 4000;

 
//Routes import 

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/task', require('./routes/task'));


app.get('/', (req, res)=> {
    res.send("Testing")
})
//Arrancando la App
app.listen(PORT, () => { console.log(`El server está funcionando en el puerto ${PORT}`)})