var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.listen(3333, function () {
    console.log('Servicio ESB en puerto 3333!');
});

app.post('/pedidocliente/', (req, res) => {
    console.log('Cliente enviando pedido a restaurante')
    //console.log(req.body)
    //res.send('Pedido '+req.body.id +' de '+req.body.pedido+' enviado a restaurante')
});

app.get('/estadorest/', (req, res) => {
    console.log('Cliente consultando estado de pedido a restaurante')
    /*var idpedido = req.query.id
    estado = "EN PREPARACION" //aqui se consulta en la bd el estado
    res.send('Pedido de cliente '+idpedido+' estado: '+estado)
    console.log('Pedido de cliente '+idpedido+' \(restaurante\) en estado '+estado)*/
}); 

app.get('/estadorep/', (req, res) => {
    console.log('Cliente consultando estado de pedido a repartidor')
    /*var idpedido = req.query.id
    estado = "EN CAMINO" //aqui se consulta en la bd el estado
    res.send('Pedido de cliente '+idpedido+' estado: '+estado)
    console.log('Pedido de cliente '+idpedido+' \(repartidor\) en estado '+estado)*/
}); 
app.get('/pedidorepartidor/', (req, res) => {
    console.log('Recibir pedido repartidor')
    /*
    var ext = req.query.ext
    res.send('Pedido de cliente recibido, y enviando '+ext)
    console.log('Pedido de cliente en camino '+ext)*/
});

app.post('/pedidorepartidorenvio/', (req, res) => {
    console.log('Enviar Estado del pedido')
    /*console.log(req.body)
    res.send('Pedido '+req.body.id +' en estado '+req.body.estado)*/
});

app.get('/entregado/', (req, res) => {
    console.log('Confirmar entrega')
    /*
    var idpedido = req.query.id
    res.send('Pedido de cliente '+idpedido+' entregado')
    console.log('Pedido de cliente entregado '+idpedido)*/
}); 


app.get('/pedidorestaurante/', (req, res) => {
    /*var ext = req.query.ext
    res.send('Pedido de cliente recibido, preparando '+ext)*/
    console.log('Recibiendo pedido del cliente')
});


app.post('/pedido/', (req, res) => {
    console.log('Confirmar pedido a repartidor')
    /*console.log(req.body)
    res.send('Pedido '+req.body.id +' de '+req.body.pedido+' enviado a repartidor')*/
});


app.get('/estado/', (req, res) => {
    /*var idpedido = req.query.id
    estado = "PREPARANDO EN RESTAURANTE"//se consulta estado en BD
    res.send('El estado de su pedido '+idpedido+ ' es: '+estado)*/
    console.log('Mostrando estado de pedido ')
});