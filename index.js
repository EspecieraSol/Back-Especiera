const express = require('express');
const dotenv = require('dotenv'); //esto es para que lea las variables de entorno del archivo .env
const cors = require('cors'); //para solicitudes seguras
const connectDB = require('./src/DataBase/db');
//--importo de rutas--------------------
const routerProductos = require('./src/Routes/routesProducto');
const routerClientes = require('./src/Routes/routesCliente');
const routerRemitos = require('./src/Routes/routesRemito');
const routerProveedores = require('./src/Routes/routesProveedor');
const routerAuth = require('./src/Routes/routesAuth');
const routerUser = require('./src/Routes/routesUser');
const routerCompras = require('./src/Routes/routesCompras');
const routerReportes = require('./src/Routes/routesReporte');
const routerGastos = require('./src/Routes/routesGastos');


const app = express();
const port = process.env.PORT || 3001;


// Middleware--------------------------------
app.use(express.json()); //middleware para manejo de json en las solicitudes
dotenv.config();
app.use(cors());

//--conexion DB----------------------------------------------------------
connectDB();

//--invoco rutas con app-------------------------------------------------
app.use("/productos", routerProductos)
app.use('/clientes', routerClientes);
app.use('/remitos', routerRemitos);
app.use('/proveedores', routerProveedores);
app.use('/auth', routerAuth);
app.use('/usuarios', routerUser);
app.use('/compras', routerCompras);
app.use('/reportes', routerReportes);
app.use('/gastos', routerGastos);


app.listen(port, () => {
    console.log(`servidor escuchando en puerto:, ${port}`);
});