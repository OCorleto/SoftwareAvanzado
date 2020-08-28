var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.listen(8000, function () {
    console.log('Servicio Restaurante en puerto 8000!');
});

app.get('/pedido/', (req, res) => {
    var ext = req.query.ext
    res.send('Pedido de cliente recibido, preparando '+ext)
    console.log('Pedido de cliente recibido '+ext)
});


app.post('/pedido/', (req, res) => {
    console.log('Enviando pedido a repartidor')
    console.log(req.body)
    res.send('Pedido '+req.body.id +' de '+req.body.pedido+' enviado a repartidor')
});


app.get('/estado/', (req, res) => {
    var idpedido = req.query.id
    estado = "PREPARANDO EN RESTAURANTE"//se consulta estado en BD
    res.send('El estado de su pedido '+idpedido+ ' es: '+estado)
    console.log('Mostrando estado de pedido '+idpedido)
});