/**
 * Created by Span on 12.02.2016.
 */
PhoneBookApp.module("LoginPage", function (LoginPage, PhoneBookApp, Backbone, Marionette, $, _) {
    LoginPage.UserData = Backbone.Model.extend({
        defaults: {
            login: "",
            password: ""
        }
    });


    LoginPage.LoginForm = Marionette.ItemView.extend({
        template: "#login-form-template",
        events: {
            "click #js-login-form-registration": "registration",
            "click #js-login-form-signin": "signin",
            "change #js-form-user-login": "setUserData",
            "change #js-form-user-pass": "setUserData"
        },
        model: null,
        initialize: function () {
            console.log('initLoginForm');
            this.model = new LoginPage.UserData();

        },
        registration: function () {
            PhoneBookApp.trigger("loginform:registration");
        },
        signin: function () {
            PhoneBookApp.trigger("loginform:signin", "login", "pass");

        },
        setUserData: function (e) {
            var changed = e.currentTarget;
            var value = $(e.currentTarget).val();
            console.log("id =",changed.id)
            if (changed.id === "js-form-user-login")
                this.model.set({login: value});
            else
                this.model.set({password: value});


            console.log("setusername", this.model.toJSON())
        },


    });

});