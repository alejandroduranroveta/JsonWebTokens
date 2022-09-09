const express = require('express');
require('dotenv').config()
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/login', usersRoutes);
app.use('/login', productsRoutes);


app.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto ${PORT}`);
});