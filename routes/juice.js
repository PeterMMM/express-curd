var express = require('express');
var router = express.Router();

var juices = [];

router.get('/', function(req, res, next) {
  res.status(200);
  res.json({
    message: 'Juice List',
    result: juices
  })
});

router.post('/', function(req, res) {
  const newItem = { id: Date.now(), ...req.body };
  juices.push(newItem);
  res.status(201)
  res.json({
    message: 'Created juice sucessfully',
    result: newItem
  })
})

router.get('/:id', function(req, res) {
  const item = juices.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    // To respond not exit
    res.status(400)
    res.json({
      message: 'Juice not found!',
      result: []
    })
  }
  res.status(200)
  res.json({
    message: 'Juice found!',
    result: item
  })
})

router.delete('/:id', function(req, res) {
  const index = juices.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404);
    res.json({
      message: 'Juice not exit!'
    })
  }

  juices.splice(index, 1);
  res.status(201);
  res.json({
    message: 'Successfully deleted'
  })

})

router.put('/:id', function(req, res) {
  const item = juices.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    res.status(404);
    res.json({
      message: 'Juice not exit!'
    })
  }
  item.brand = req.body.brand || item.brand;
  item.description = req.body.description || item.description;
  res.status(201);
  res.json(({
    message: "Successfully update juice!",
    result: item
  }));
})


module.exports = router;
