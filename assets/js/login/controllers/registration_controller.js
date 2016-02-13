/**
 * Created by Alexey on 12.02.2016.
 */
PhoneBookApp.module("LoginPage.Registration", function (Registration, PhoneBookApp, Backbone, Marionette, $, _) {
    ///////////////////////////////////////////
    ///////////////API FUNCTIONS///////////////
    ///////////////////////////////////////////
    var API = {
        showRegistrationForm: function () {
            console.log("showRegistrationForm")
            Backbone.history.navigate("registration",{trigger:true})
            //var regFormForm = new Registration.RegistrationForm({});
            //PhoneBookApp.mainRegion.show(regFormForm);
        },
        signup: function (model) {
            model.save();
        },
        back: function () {
            console.log("back")
            Backbone.history.navigate("login",{trigger:true});
           //PhoneBookApp.trigger("loginform:show");
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