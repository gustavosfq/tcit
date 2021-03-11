var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/posts', function(req, res, next) {
  res.json({
    hola: "mundo"
  });
});
router.get('/posts/:postId', function(req, res, next) {
  res.json({
    hola: "mundo"
  });
});
router.put('/posts/:postId', function(req, res, next) {
  res.json({
    hola: "mundo"
  });
});
router.delete('/posts/:postId', function(req, res, next) {
  res.json({
    hola: "mundo"
  });
});

module.exports = router;
