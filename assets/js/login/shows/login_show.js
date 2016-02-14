/**
 * Created by Span on 12.02.2016.
 */
PhoneBookApp.module("LoginPage", function (LoginPage, PhoneBookApp, Backbone, Marionette, $, _) {
    LoginPage.UserData = Backbone.Model.extend({
        defaults: {
            login: "",
            password: ""
        },
        usernameLength: PhoneBookApp.request("global:usernamelength"),
        passwordLength:  PhoneBookApp.request("global:passwordlentgth"),
        url: '/pb/login',
        isModelValid: function () {
            return this.isPasswordValid() && this.isUserNameValid();
        },
        isUserNameValid: function () {
            return this.get("login").length >= this.usernameLength;
        },
        isPasswordValid: function () {
            return this.get("password").length >= this.passwordLength;
        },
        isTempPassValid: function (temp) {
            return temp.length >= this.passwordLength;
        }
    });

    LoginPage.LoginForm = Marionette.ItemView.extend({
        template: "#login-form-template",
        model: null,
        events: {
            "click #js-login-form-registration": "registration",
            "click #js-login-form-signin": "signin",
            "change #js-form-user-login": "setUserData",
            "change #js-form-user-pass": "setUserData"
        },
        initialize: function () {
            this.model = new LoginPage.UserData();

        },
        registration: function () {
            PhoneBookApp.trigger("loginform:registration");
        },
        signin: function () {
            PhoneBookApp.trigger("loginform:signin", this.model);

        },
        setUserData: function (e) {
            var changed = e.currentTarget;
            var value = $(e.currentTarget).val();
            console.log("id =", changed.id)
            if (changed.id === "js-form-user-login")
                this.model.set({login: value});
            else
                this.model.set({password: value});

            console.log("setusername", this.model.toJSON())
        }


    });

});