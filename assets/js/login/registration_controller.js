/**
 * Created by Alexey on 12.02.2016.
 */
PhoneBookApp.module("LoginPage.Registration", function (Registration, PhoneBookApp, Backbone, Marionette, $, _) {
    ///////////////////////////////////////////
    ///////////////API FUNCTIONS///////////////
    ///////////////////////////////////////////
    var API = {
        showRegistrationForm: function () {
            var regFormForm = new Registration.RegistrationForm({});
            PhoneBookApp.mainRegion.show(regFormForm);
        },
        signup: function (model) {
            model.save();
        },
        back: function () {
           PhoneBookApp.trigger("loginform:show");
        }
    };


    ///////////////////////////////////////////
    /////////////////LISTENERS/////////////////
    ///////////////////////////////////////////
    PhoneBookApp.on("regform:show", function () {
        console.log("regform:show")
        API.showRegistrationForm();
    });
    PhoneBookApp.on("regform:back", function () {
        API.back();
    });
    PhoneBookApp.on("regform:signup", function (username, password) {
        API.signin(username, password);
    });

});