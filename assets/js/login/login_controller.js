/**
 * Created by Span on 12.02.2016.
 */
PhoneBookApp.module("LoginPage", function (LoginPage, PhoneBookApp, Backbone, Marionette, $, _) {
    ///////////////////////////////////////////
    ///////////////API FUNCTIONS///////////////
    ///////////////////////////////////////////
    var API = {
        showLoginForm: function () {
            console.log("API:showLoginForm")
            var loginForm = new LoginPage.LoginForm({});
            PhoneBookApp.mainRegion.show(loginForm);
        },
        signin: function (username,password) {
            console.info("LOGINPAGE:API:login",username,password)
        },
        registration: function () {
            console.info("LOGINPAGE:API:registration")
        }
    };


    ///////////////////////////////////////////
    /////////////////LISTENERS/////////////////
    ///////////////////////////////////////////
    PhoneBookApp.on("loginform:show", function () {
        API.showLoginForm();
    });
    PhoneBookApp.on("loginform:registration", function () {
        API.registration();
    });
    PhoneBookApp.on("loginform:signin", function (username,password) {
        API.signin(username,password);
    });

});