const ProductController = require('../controllers/product.controller');
module.exports = function(app) {
    app.get('/api/products', ProductController.getAllProducts)
    app.get('/api/product/:id', ProductController.getOneProductById)
    app.post('/api/products/', ProductController.createOneProduct)
}