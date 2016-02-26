/**
 * Created by LocNT on 1/4/16.
 */

function AdmobUpdate(){
    this.appPackageName = "";
    this.admobAccount = "";
    this.admobBanner = "";
    this.admobPopup = "";
    this.timeReload = 30000;
    this.isShowAds = true;
    this.isActive = true;
    this.updateTime = new Date();
};

module.exports = AdmobUpdate;