const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [3, 'Title must be at least 3 characters']
    },
    price: {
        type: String,
        required: [true, 'Price is required'],
        min: [1, 'Price cannot 0!']
    },
    description: {
        type: String,
        require: [true, 'Description is required'],
        minLength: [1, 'Description cannot be empty']
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;