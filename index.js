const express = require('express');
require('dotenv').config()
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use('/login', usersRoutes);
app.use('/login', productsRoutes);


app.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto ${PORT}`);
});