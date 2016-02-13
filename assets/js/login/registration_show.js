/**
 * Created by Alexey on 12.02.2016.
 */
PhoneBookApp.module("LoginPage.Registration", function (Registration, PhoneBookApp, Backbone, Marionette, $, _) {

    Registration.RegistrationForm = Marionette.ItemView.extend({
        template: "#registration-from-template",
        model: null,
        tempPass1: "",
        tempPass2: "",
        events: {
            "keyup #js-form-user-login-registration,#js-form-user-login-pass1,#js-form-user-login-pass2": function (e) {
                this.setUserData(e);
                this.updateCssStyle(e);
            },
            "click #js-login-form-back": "backToLoginForm",
            "click #js-login-form-signup": "signUp"
        },
        initialize: function () {
            this.model = new PhoneBookApp.LoginPage.UserData();
        },
        setUserData: function (e) {
            var changed = e.currentTarget;
            var value = $(e.currentTarget).val();
            switch (changed.id) {
                case "js-form-user-login-registration":
                    this.model.set({login: value});
                    break;
                case "js-form-user-login-pass1":
                    this.tempPass1 = value;
                    break;
                case "js-form-user-login-pass2":
                    this.tempPass2 = value;
                    break;
            }
            if (this.model.isTempPassValid(this.tempPass1) && this.tempPass1 === this.tempPass2 && this.model.isUserNameValid()) {
                this.model.set({password: value});
            }
            else {
                this.model.set({password: ""});
            }


        },
        updateCssStyle: function (e) {
            var changed = e.currentTarget;
            var curBlock = this.$el.find($(changed)).parents(".form-group");
            var span = curBlock.find('span');
            var flag = false;
            curBlock.addClass("has-error has-feedback");
            span.addClass("glyphicon glyphicon-remove form-control-feedback");
            switch (span.attr("id")) {
                case "js-form-user-login-registration-span":
                    if (this.model.isUserNameValid()) {
                        flag = true;
                    }
                    break;
                case "js-form-user-login-pass1-span":
                    if (this.model.isTempPassValid(this.tempPass1)) {
                        flag = true;
                    }
                    break;
                case "js-form-user-login-pass2-span":
                    if (this.tempPass1 === this.tempPass2 && this.model.isPasswordValid()) {
                        flag = true;
                    }
                    break;
            }
            if (flag) {
                curBlock.removeClass("has-error has-feedback");
                span.removeClass("glyphicon glyphicon-remove form-control-feedback");
                curBlock.addClass("has-success has-feedback");
                span.addClass("glyphicon glyphicon-ok form-control-feedback");
            }
            if (this.model.isModelValid())
                this.$el.find(".login-block-signin").removeClass("disabled");
            else
                this.$el.find(".login-block-signin").addClass("disabled");

        },
        backToLoginForm: function () {
            PhoneBookApp.trigger("regform:back");
        }
    });

});