global.random = function(low, high){

  return Math.floor(Math.random() * (high - low) + low);

};

module.exports = function(app){
  var HomeController = {
    index: function(req, res){

      var value = 0;

      params = {value};

      res.render('home/index', params);

    },
    calcula: function(req, res){

      var high = req.body.dado;

      console.log(high);

      var value = random(1, high);

      params = {value: value};

      res.render('home/index', params);

    }
  };
  return HomeController;
};
