/**
 * Created by Alexey on 13.02.2016.
 */
PhoneBookApp.module("LoginPageApp", function (LoginPageApp, PhoneBookApp, Backbone, Marionette, $, _) {
    PhoneBookApp.LoginRouter = Marionette.AppRouter.extend({
        appRoutes: {
            "login": "loginPage",
            "registration": "registrationPage"
        }

    });
    var API = {
        loginPage: function () {
            console.log("loginPage router");
            PhoneBookApp.trigger("loginform:show")
        },
        registrationPage: function () {
            console.log("registrationPage router");

            var regFormForm = new PhoneBookApp.LoginPage.Registration.RegistrationForm({});
            PhoneBookApp.mainRegion.show(regFormForm);
        }
    };
    PhoneBookApp.addInitializer(function () {
        new PhoneBookApp.LoginRouter({
            controller: API
        });
    });

});