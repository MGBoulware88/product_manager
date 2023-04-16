//import the model for this controller
const Product = require('../models/product.model');

//create the methods for the model

//get ALL products
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(product => res.json(product))
        .catch(err => res.json(err));
}
//get ONE product BY ID
module.exports.getOneProductById = (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => {
            res.json(oneProduct)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
//create ONE product from form
module.exports.createOneProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}
//update ONE product BY ID
module.exports.updateOneProductById = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json(updatedProduct)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
//***DELETE a product BY ID 
module.exports.deleteOneProductById = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}