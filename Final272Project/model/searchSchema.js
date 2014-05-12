var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var business = Schema.business;

var searchSchema= new Schema({
 region: {span: {latitude_delta: Number, longitude_delta: Number}, center: {latitude: Number,longitude:Number}},
 businesses: {is_claimed: String,
	  rating: Number,
	  mobile_url: String,
	  rating_img_url: String,
	  review_count: String,
	  name: String,
	  snippet_image_url: String,
	  rating_img_url_small: String,
	  url: String,
	  reviews: String,
	  phone: String,
	  snippet_text: String,
	  image_url: String,
	  categories: String,
	  display_phone:  String,
	  rating_img_url_large: String,
	  id: String,
	  is_closed: String,
	  location: {city: String, display_address: Object, neighborhoods: Object, postal_code: String, country_code: String,address:Object, state_code:String},},
 total: Number,
});

module.exports = mongoose.model('search', searchSchema);
