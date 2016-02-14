/**
 * Created by Alexey on 14.02.2016.
 */
PhoneBookApp.module("Contacts", function (Contacts, PhoneBookApp, Backbone, Marionette, $, _) {
    var contacts = PhoneBookApp.request("contacts:test:list");
    console.log("contacts", contacts);

    ///////////////////////////////////////////
    ///////////////API FUNCTIONS///////////////
    ///////////////////////////////////////////
    var API = {
        showContactsList: function () {
            console.log("Contacts:API:showContactsList")
            var contactsForm = new Contacts.ContactsListView({
                collection: contacts
            });
            console.log(contactsForm);
            PhoneBookApp.mainRegion.show(contactsForm);
            console.log("after show");
        }

    };


    ///////////////////////////////////////////
    /////////////////LISTENERS/////////////////
    ///////////////////////////////////////////
    PhoneBookApp.on("contacts:show", function () {
        console.log("ON:contacts:shows")
        API.showContactsList();
    });
});