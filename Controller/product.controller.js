const Product = require('../models/product.model');

exports.test = function(req, res){
    res.send('Greetings from the test controller');
}

exports.product_create = function(req, res){
    let product = new Product({

        name: req.body.name,
        price: req.body.price
    });

    product.save(function(err){
        if (err){
            return next (err);
        }
        res.send('Product Created sucessfully')
    })
}

exports.product_details = function (req, res){
    Product.findById(req.params.id, function (err, product){
        if (err) return next (err);
        res.send(product);
    });

};
