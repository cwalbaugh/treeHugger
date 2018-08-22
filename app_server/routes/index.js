var express = require('express');
var router = express.Router();
const ctrlTrees = require('../controllers/trees');
const ctrlOthers = require('../controllers/others')

/* Locations Pages */
router.get('/', ctrlTrees.homelist);
router.get('/tree', ctrlTrees.treeInfo);
router.get('/tree/review/new', ctrlTrees.addReview);

/* Other Pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
