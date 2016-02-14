/**
 * Created by Alexey on 13.02.2016.
 */
PhoneBookApp.module("GlobalVars", function (GlobalVars, PhoneBookApp, Backbone, Marionette, $, _) {
    var userNameLength = 3, passwordLentgth = 3;
    PhoneBookApp.reqres.setHandler("global:usernamelength", function () {
        return userNameLength;
    });
    PhoneBookApp.reqres.setHandler("global:passwordlentgth", function () {
        return passwordLentgth;
    });
});