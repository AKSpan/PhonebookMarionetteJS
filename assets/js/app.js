/**
 * Created by Span on 12.02.2016.
 */
var PhoneBookApp = new Marionette.Application({});

PhoneBookApp.addRegions({
    mainRegion: "#main-region"
});

PhoneBookApp.on("start", function () {
    console.log("init:after");
    PhoneBookApp.trigger("loginform:show");

});
