

const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  reviewerName: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});



const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'fashion', 'home', 'books']
  },
  price: {
    type: Number,
    required: true,
    min: 1
  },
  inStock: {
    type: Boolean,
    default: true
  },
  releaseDate: {
    type: Date
  },
  reviews: [reviewSchema]
}); 
const Product = mongoose.model('Product', productSchema);

const Review = mongoose.model('Review', reviewSchema);
module.exports = { Product, Review };


