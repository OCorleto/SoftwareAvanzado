var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.listen(4000, function () {
    console.log('Servicio Cliente en puerto 4000!');
});

app.post('/pedido/', (req, res) => {
    console.log('Enviando pedido a restaurante')
    console.log(req.body)
    res.send('Pedido '+req.body.id +' de '+req.body.pedido+' enviado a restaurante')
});

app.get('/estadorest/', (req, res) => {
    var idpedido = req.query.id
    estado = "EN PREPARACION" //aqui se consulta en la bd el estado
    res.send('Pedido de cliente '+idpedido+' estado: '+estado)
    console.log('Pedido de cliente '+idpedido+' \(restaurante\) en estado '+estado)
}); 

app.get('/estadorep/', (req, res) => {
    var idpedido = req.query.id
    estado = "EN CAMINO" //aqui se consulta en la bd el estado
    res.send('Pedido de cliente '+idpedido+' estado: '+estado)
    console.log('Pedido de cliente '+idpedido+' \(repartidor\) en estado '+estado)
}); 