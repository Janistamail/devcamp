var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/product/edit', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/product/add', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/product/del', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category/add', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category/del', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category/edit', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
