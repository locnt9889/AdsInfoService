/**
 * Created by LocNT on 7/28/15.
 */

var express = require('express');
var router = express.Router();

var admobService = require("../services/AdmobService");

/* POST create */
router.post('/create', [function(req, res, next) {
    admobService.create(req, res);
}]);

/* POST update */
router.post('/update', [function(req, res, next) {
    admobService.update(req, res);
}]);

/* POST update */
router.post('/all', [function(req, res, next) {
    admobService.findAll(req, res);
}]);

/* POST detail */
router.post('/detail', [function(req, res, next) {
    admobService.detail(req, res);
}]);

module.exports = router;
