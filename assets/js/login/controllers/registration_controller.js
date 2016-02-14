/**
 * Created by Alexey on 12.02.2016.
 */
PhoneBookApp.module("LoginPage.Registration", function (Registration, PhoneBookApp, Backbone, Marionette, $, _) {
    ///////////////////////////////////////////
    ///////////////API FUNCTIONS///////////////
    ///////////////////////////////////////////
    var API = {
        showRegistrationForm: function () {
            var regFormForm = new PhoneBookApp.LoginPage.Registration.RegistrationForm({});
            PhoneBookApp.mainRegion.show(regFormForm);
        },
        signup: function (model) {
            console.log("controller signup", model)
            model.save();
        },
        back: function () {
            Backbone.history.navigate("login",{trigger:true});
        }
    };


    ///////////////////////////////////////////
    /////////////////LISTENERS/////////////////
    ///////////////////////////////////////////
    PhoneBookApp.on("regform:show", function () {
        Backbone.history.navigate("registration");
        API.showRegistrationForm();
    });
    PhoneBookApp.on("regform:back", function () {
        API.back();
    });
    PhoneBookApp.on("regform:signup", function (model) {
        API.signup(model);
    });

});