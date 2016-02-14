/**
 * Created by Alexey on 14.02.2016.
 */
PhoneBookApp.module("ContacsApp", function (ContacsApp, PhoneBookApp, Backbone, Marionette, $, _) {
    PhoneBookApp.ContactRouter = Marionette.AppRouter.extend({
        appRoutes: {
            "contacts": "contactsPage"
        }

    });
    var API = {
        contactsPage: function () {
            console.log("contacts:route")
            PhoneBookApp.trigger("contacts:show")
        }

    };
    PhoneBookApp.addInitializer(function () {
        new PhoneBookApp.ContactRouter({
            controller: API
        });
    });

});