//require == using c#

const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

const product = require('./Rotas/product.route');

mongoose.connect('mongodb+srv://davi:1234@cluster0-z7zzl.mongodb.net/test?retryWrites=true');
mongoose.Promise = global.Promise;




// banana bananinha = new banana();
const bananinha = express();

bananinha.use(bodyParser.json());
bananinha.use(bodyParser.urlencoded({extended: false}));
bananinha.use('/products', product)




bananinha.use('/products', product);

let port = 1234;
//fica olhando a porta 5000 e executa a arrow func;
bananinha.listen(port, () => {
    console.log('tamo vivo' + port);
});



