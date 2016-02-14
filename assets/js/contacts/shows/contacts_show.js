/**
 * Created by Alexey on 14.02.2016.
 */
PhoneBookApp.module("Contacts", function (Contacts, PhoneBookApp, Backbone, Marionette, $, _) {
    Contacts.ContactData = Backbone.Model.extend({
        defaults: {
            id: 0,
            firstName: "",
            secondName: "",
            thirdName: "",
            phoneNumber: ""
        }
    });
    Contacts.ContactsDataList = Backbone.Collection.extend({
        model: Contacts.ContactData,
        comparator: Contacts.ContactData
    });
    Contacts.ContactView = Marionette.ItemView.extend({
        tagName: "tr",
        template: "#contact-form-template"
    });
    Contacts.ContactsListView = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#contacts-list-template",
        itemView: Contacts.ContactView,
        itemViewContainer: "tbody"
    });
});