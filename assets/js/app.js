/**
 * Created by Span on 12.02.2016.
 */
var PhoneBookApp = new Marionette.Application({});

PhoneBookApp.addRegions({
    mainRegion: "#main-region"
});

PhoneBookApp.on("start", function () {
    console.log("init:after");
    if (Backbone.history)
        Backbone.history.start();
   /* if (Backbone.history.fragment === "")
        Backbone.history.navigate("login", {trigger: true});*/
    var contact = PhoneBookApp.request("contacts:test:one");
    console.log("contact",contact)
    var view = new PhoneBookApp.Contacts.ShowMoreContact({model:contact});
    console.log("view",view)
    PhoneBookApp.mainRegion.show(view)

});

