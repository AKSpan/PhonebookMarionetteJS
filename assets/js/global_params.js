/**
 * Created by Alexey on 13.02.2016.
 */
PhoneBookApp.module("GlobalVars", function (GlobalVars, PhoneBookApp, Backbone, Marionette, $, _) {
    var userNameLength = 3, passwordLentgth = 3;
    PhoneBookApp.reqres.setHandler("global:usernamelength", function () {
        return userNameLength;
    });
    PhoneBookApp.reqres.setHandler("global:passwordlentgth", function () {
        return passwordLentgth;
    });
    PhoneBookApp.reqres.setHandler("contacts:test:list", function () {
        var contacts = new PhoneBookApp.Contacts.ContactsDataList([
            {
                id: 1,
                'firstName': "A1",
                'secondName': "A2",
                'thirdName': "A3",
                'phoneNumber': "A4"
            },
            {
                id: 2,
                'firstName': "B1",
                'secondName': "B2",
                'thirdName': "B3",
                'phoneNumber': "B4"
            },
            {
                id: 3,
                'firstName': "C1",
                'secondName': "C2",
                'thirdName': "C3",
                'phoneNumber': "C4"
            },
            {
                id: 4,
                'firstName': "",
                'secondName': "",
                'thirdName': "",
                'phoneNumber': ""
            }
        ]);
        return contacts;
    });
});