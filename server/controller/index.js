const db = require('../model/db');

module.exports = {
  getHome: (req, res) => {
    const data = {
      products: db.get('products').value() || [],
      skills: db.get('skills').value() || []
    };

    res.render('pages/index', data);
  }
};

module.exports.get = function (req, res) {
  res.render('pages/index', {title: 'Main'});
};
