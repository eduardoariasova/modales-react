const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express  = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
// Configuración Express //////////////////////////////////////////////
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.resolve('frontend/build')));
// Configuración cors
app.use(cors({
  origin: "http://localhost:3000/",
  credentials: true
}))




//IMPORTAR RUTAS //////////////////////////////


// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

// Listen /////////////////////////////////////
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
// Listen /////////////////////////////////////
