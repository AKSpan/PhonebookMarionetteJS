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
            phoneNumber: "",
            avatar: "assets/img/thug%20doge.jpg"
        }
    });
    Contacts.ContactsDataList = Backbone.Collection.extend({
        model: Contacts.ContactData,
        comparator: "firstName"
    });
    Contacts.ContactView = Marionette.ItemView.extend({
        tagName: "tr",
        template: "#contact-form-template",
        events: {
            "click .js-show-more-btn": "showMoreInfo"

        },
        showMoreInfo: function (e) {
            e.stopPropagation();
            console.log(this.model.toJSON())
        }

    });
    Contacts.ContactsListView = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover table-striped",
        template: "#contacts-list-template",
        itemView: Contacts.ContactView,
        itemViewContainer: "tbody",
        events: {
            "click .js-back-btn": "back"
        },
        back: function () {
            console.log("back");
            Backbone.history.history.back();
        }
    });

    Contacts.ShowMoreContact = Marionette.ItemView.extend({
        template: "#contact-show-more-template",
        events:{
            "click #js-contact-show-dropdown-menu":"openDropDownMenu",
            "click #js-contact-show-dropdown-menu ul a":"dropDownMenuItemClick"
        },
        openDropDownMenu: function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(e.currentTarget).toggleClass("open")
        },
        dropDownMenuItemClick: function (e) {
            console.log("item", e.target)
        }
    });
});