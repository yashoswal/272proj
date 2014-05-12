var search = require('./searchSchema.js');
var business = require('./businessSchema.js');
 
 
exports.listSearchAll = function(req, res) {
	search.find(function(err, threads) {
    res.send(threads);
  });
}
 
exports.showSearchCategorywise = (function(req, res) {
	search.findOne({name: req.params.category}, function(error, search) {
          res.send(search);
        });
});

exports.showbusiness = (function(req, res) {
	business.findOne({name: req.params.id}, function(error, business) {
          res.send(business);
        });
});