const express = require('express');
const routes = require('./routes');
const moongose = require('mongoose');
// Conectar a MongoDB   
moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true
});
// crear el servidor
const app = express();
// cargar las rutas
app.use('/', routes());
// puerto
app.listen(5000);