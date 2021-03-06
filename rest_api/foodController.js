// foodController.js
// Import food model
Food = require("./foodModel");
// Handle index actions
exports.index = function(req, res) {
  Food.get(function(err, foods) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Foods retrieved successfully",
      items: foods
    });
  });
};
// Handle create food actions
exports.new = function(req, res) {
  var food = new Food();
  food.name = req.body.name ? req.body.name : food.name;
  food.price = req.body.price;
  food.price_range = req.body.price_range;
  food.image = req.body.image;
  food.description = req.body.description;
  // save the food and check for errors
  food.save(function(err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New food created!",
      item: food
    });
  });
};
// Handle view food info
exports.view = function(req, res) {
  Food.findById(req.params.food_id, function(err, food) {
    if (err) res.send(err);
    res.json({
      message: "Food details loading..",
      item: food
    });
  });
};
// Handle update food info
exports.update = function(req, res) {
  Food.findById(req.params.food_id, function(err, food) {
    if (err) res.send(err);
    food.name = req.body.name ? req.body.name : food.name;
    food.price = req.body.price;
    food.price_range = req.body.price_range;
    food.image = req.body.image;
    food.description = req.body.description;
    // save the food and check for errors
    food.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "Food Info updated",
        item: food
      });
    });
  });
};
// Handle delete food
// TODOS: Remove the actual deletion and only "tag" it as deleted.
exports.delete = function(req, res) {
  Food.remove(
    {
      _id: req.params.food_id
    },
    function(err, food) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Food deleted"
      });
    }
  );
};
