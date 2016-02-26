/**
 * Created by LocNT on 7/29/15.
 */
var https = require('https');

var admobDao = require("../daos/AdmobDao");
var Admob = require("../models/Admob");
var AdmobUpdate = require("../models/AdmobUpdate");

var checkValidateUtil = require("../utils/CheckValidateUtil");
var ResponseServerDto = require("../modelsDto/ResponseServerDto");

var Constant = require("../helpers/Constant");
var message = require("../message/en");

//create
var create = function(req, res){
    var responseObj = new ResponseServerDto();

    var appPackageName = req.body.appPackageName ? req.body.appPackageName : "";
    var admobAccount = req.body.admobAccount ? req.body.admobAccount : "";
    var admobBanner = req.body.admobBanner ? req.body.admobBanner : "";
    var admobPopup = req.body.admobPopup ? req.body.admobPopup : "";
    var timeReload = req.body.timeReload ? req.body.timeReload : "";
    var isShowAds = req.body.isShowAds ? true : false;
    var isActive = req.body.isActive ? true : false;

    if(checkValidateUtil.isEmptyFeild(appPackageName) || checkValidateUtil.isEmptyFeild(admobAccount)
        || checkValidateUtil.isEmptyFeild(admobBanner) || checkValidateUtil.isEmptyFeild(admobPopup)){
        responseObj.statusErrorCode = 1;
        responseObj.errorsObject = {};
        responseObj.errorsMessage = "Require field is null";
        res.send(responseObj);
        return;
    }

    var admob = new Admob();
    admob.admobAccount = admobAccount;
    admob.admobBanner = admobBanner;
    admob.admobBanner = admobPopup;
    admob.appPackageName = appPackageName;
    admob.timeReload = timeReload;
    admob.isActive = isActive;
    admob.isShowAds = isShowAds;

    admobDao.addNew(admob).then(function(result){
        admob.id = result.insertId;
        responseObj.statusErrorCode = Constant.CODE_STATUS.SUCCESS;
        responseObj.results = admob;
        res.send(responseObj);
    },function(err){
        responseObj.statusErrorCode = Constant.CODE_STATUS.DB_EXECUTE_ERROR;
        responseObj.errorsObject = err;
        responseObj.errorsMessage = message.DB_EXECUTE_ERROR.message;
        res.send(responseObj);
    });
};

//create
var update = function(req, res){
    var responseObj = new ResponseServerDto();

    var id = req.body.id ? req.body.id : 0;
    var appPackageName = req.body.appPackageName ? req.body.appPackageName : "";
    var admobAccount = req.body.admobAccount ? req.body.admobAccount : "";
    var admobBanner = req.body.admobBanner ? req.body.admobBanner : "";
    var admobPopup = req.body.admobPopup ? req.body.admobPopup : "";
    var timeReload = req.body.timeReload ? req.body.timeReload : "";
    var isShowAds = req.body.isShowAds ? true : false;
    var isActive = req.body.isActive ? true : false;

    var admobUpdate = new AdmobUpdate();
    admobUpdate.admobAccount = admobAccount;
    admobUpdate.admobBanner = admobBanner;
    admobUpdate.admobBanner = admobPopup;
    admobUpdate.appPackageName = appPackageName;
    admobUpdate.timeReload = timeReload;
    admobUpdate.isActive = isActive;
    admobUpdate.isShowAds = isShowAds;

    admobDao.update(admobUpdate, Constant.TABLE_NAME_DB.ADMOB.NAME_FIELD_ID, id).then(function(result){
        responseObj.statusErrorCode = Constant.CODE_STATUS.SUCCESS;
        responseObj.results = result;
        res.send(responseObj);
    },function(err){
        responseObj.statusErrorCode = Constant.CODE_STATUS.DB_EXECUTE_ERROR;
        responseObj.errorsObject = err;
        responseObj.errorsMessage = message.DB_EXECUTE_ERROR.message;
        res.send(responseObj);
    });
};

//find app
var findAll = function(req, res){
    var responseObj = new ResponseServerDto();

    admobDao.findAllActive(Constant.TABLE_NAME_DB.ADMOB.NAME_FIELD_ACTIVE).then(function(result){
        responseObj.statusErrorCode = Constant.CODE_STATUS.SUCCESS;
        responseObj.results = result;
        res.send(responseObj);
    },function(err){
        responseObj.statusErrorCode = Constant.CODE_STATUS.DB_EXECUTE_ERROR;
        responseObj.errorsObject = err;
        responseObj.errorsMessage = message.DB_EXECUTE_ERROR.message;
        res.send(responseObj);
    });
};

//detail
var detail = function(req, res){
    var responseObj = new ResponseServerDto();
    var id = req.body.id ? req.body.id : 0;

    admobDao.findOneById(Constant.TABLE_NAME_DB.ADMOB.NAME_FIELD_ID, id).then(function(result){
        responseObj.statusErrorCode = Constant.CODE_STATUS.SUCCESS;
        responseObj.results = result;
        res.send(responseObj);
    },function(err){
        responseObj.statusErrorCode = Constant.CODE_STATUS.DB_EXECUTE_ERROR;
        responseObj.errorsObject = err;
        responseObj.errorsMessage = message.DB_EXECUTE_ERROR.message;
        res.send(responseObj);
    });
};

/*Exports*/
module.exports = {
    create : create,
    update : update,
    findAll : findAll,
    detail : detail
}