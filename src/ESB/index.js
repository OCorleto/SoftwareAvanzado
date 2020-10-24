var express = require('express');
var app = express();
const request = require('request');
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.listen(3333, function () {
    console.log('Servicio ESB puerto 3333!');
});


ip = "ec2-18-191-253-85.us-east-2.compute.amazonaws.com" 


app.get('/pedidocliente/', (req, res) => {
    console.log('Cliente enviando pedido a restaurante')
    const options = {
        url: 'http://'+ip+':4000/pedido/',
        json: true,
        body: {
            id: '1581',
            pedido: 'Pollo papas'
        }
    };
    
    request.post(options, (err, res, body) => {
        if (err) {
		console.log(options)
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
        return body
    });
    res.send('Cliente enviando pedido a restaurante')
});




app.get('/estadorest/', (req, res) => {
    console.log('Cliente consultando estado de pedido a restaurante')
    request
    .get('http://'+ip+':4000/estadorest/?id=7777')
    .on('response', function(response) {
        console.log(response.statusCode) // 200
    })
    res.send('Estado en restaurante')
}); 

app.get('/estadorep/', (req, res) => {
    console.log('Cliente consultando estado de pedido a repartidor')
    request
    .get('http://'+ip+':4000/estadorest/?id=7777')
    .on('response', function(response) {
        console.log(response.statusCode) // 200
    })
    res.send('Estado een el repartidor')
}); 
app.get('/pedidorepartidor/', (req, res) => {
    console.log('Recibir pedido repartidor')
    request
    .get('http://'+ip+':3000/estadorep/?id=2158')
    .on('response', function(response) {
        console.log(response.statusCode) // 200
    })
    res.send('Peido recibido por repartidor')
});

app.get('/pedidorepartidorenvio/', (req, res) => {
    console.log('Enviar Estado del pedido')
    const options = {
        url: 'http://'+ip+':3000/pedido/',
        json: true,
        body: {
            id: '1581',
            estado: 'En camino'
        }
    };
    
    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
        return body
    });
    res.send('Pedido 1581 en estado en camino')
});

app.get('/entregado/', (req, res) => {
    console.log('Confirmar entrega')
    request
    .get('http://'+ip+':3000/entregado/?id=15546')
    .on('response', function(response) {
        console.log(response.statusCode) // 200
    })
    res.send('Confirmando entrega de pedido')
}); 


app.get('/pedidorestaurante/', (req, res) => {
    console.log('Recibiendo pedido del cliente')
    request
    .get('http://'+ip+':8000/pedido/?ext=1417')
    .on('response', function(response) {
        console.log(response.statusCode) // 200
    })
    console.log('Pedido de cliente recibido ')
});


app.get('/pedidorestauranteenvio/', (req, res) => {
    console.log('Confirmar pedido a repartidor')
    console.log('Enviar Estado del pedido')
    const options = {
        url: 'http://'+ip+':8000/pedido/',
        json: true,
        body: {
            id: '1581',
            estado: 'En camino'
        }
    };
    
    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
        return body
    });
    res.send('Pedido 1581 ennviado al repartidor')
});


app.get('/estado/', (req, res) => {
    console.log('Mostrando estado de pedido ')
    console.log('Recibiendo pedido del cliente')
    request
    .get('http://'+ip+':8000/pedido/?id=1417')
    .on('response', function(response) {
        console.log(response.statusCode) // 200
    })
    res.send('Mostrando estado del pedido')
});
