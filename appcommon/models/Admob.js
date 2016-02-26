/**
 * Created by LocNT on 1/4/16.
 */

function Admob(){
    this.id = 0;
    this.appPackageName = "";
    this.admobAccount = "";
    this.admobBanner = "";
    this.admobPopup = "";
    this.timeReload = 30000;
    this.isShowAds = true;
    this.isActive = true;
    this.createTime = new Date();
    this.updateTime = new Date();
};

module.exports = Admob;