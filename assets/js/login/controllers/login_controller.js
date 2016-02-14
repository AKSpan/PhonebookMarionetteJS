/**
 * Created by Span on 12.02.2016.
 */
PhoneBookApp.module("LoginPage", function (LoginPage, PhoneBookApp, Backbone, Marionette, $, _) {
    ///////////////////////////////////////////
    ///////////////API FUNCTIONS///////////////
    ///////////////////////////////////////////
    var API = {
        showLoginForm: function () {
            var loginForm = new LoginPage.LoginForm({});
            PhoneBookApp.mainRegion.show(loginForm);
        },
        signin: function (model) {
            model.save();
        },
        registration: function () {
            PhoneBookApp.trigger("regform:show");
        }
    };


    ///////////////////////////////////////////
    /////////////////LISTENERS/////////////////
    ///////////////////////////////////////////
    PhoneBookApp.on("loginform:show", function () {
        console.log("ON:loginform:shows")
        API.showLoginForm();
    });
    PhoneBookApp.on("loginform:registration", function () {
        API.registration();
    });
    PhoneBookApp.on("loginform:signin", function (username,password) {
        API.signin(username,password);
    });

});