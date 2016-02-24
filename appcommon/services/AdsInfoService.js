/**
 * Created by LocNT on 7/29/15.
 */
var https = require('https');

var adsInfoDao = require("../daos/AdsInfoDao");
var AdsInfo = require("../models/AdsInfo");
var ResponseServerDto = require("../modelsDto/ResponseServerDto");

var PRE_URL_GET_BY_ID = 'http://www.trollfootball.me/display.php?id=';

/*Exports*/
module.exports = {

}