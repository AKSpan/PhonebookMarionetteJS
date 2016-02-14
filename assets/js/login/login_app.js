/**
 * Created by Alexey on 13.02.2016.
 */
PhoneBookApp.module("LoginPageApp", function (LoginPageApp, PhoneBookApp, Backbone, Marionette, $, _) {
    PhoneBookApp.LoginRouter = Marionette.AppRouter.extend({
        appRoutes: {
            "login": "loginPage",
            "registration": "registrationPage",
        }

    });
    var API = {
        loginPage: function () {
            PhoneBookApp.trigger("loginform:show")
        },
        registrationPage: function () {
            PhoneBookApp.trigger("regform:show")
        },
    };
    PhoneBookApp.addInitializer(function () {
        new PhoneBookApp.LoginRouter({
            controller: API
        });
    });

});