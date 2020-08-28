var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.listen(3000, function () {
    console.log('Servicio Repartidor en puerto 3000!');
});

app.get('/pedido/', (req, res) => {
    var ext = req.query.ext
    res.send('Pedido de cliente recibido, y enviando '+ext)
    console.log('Pedido de cliente en camino '+ext)
});

app.post('/pedido/', (req, res) => {
    console.log('Estado del pedido')
    console.log(req.body)
    res.send('Pedido '+req.body.id +' en estado '+req.body.estado)
});

app.get('/entregado/', (req, res) => {
    var idpedido = req.query.id
    res.send('Pedido de cliente '+idpedido+' entregado')
    console.log('Pedido de cliente entregado '+idpedido)
}); 