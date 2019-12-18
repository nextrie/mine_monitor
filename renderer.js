const config = require("./config.json");

window.$ = window.jQuery = require("./node_modules/jquery");

$("title").text("Mine Monitor V" + config["panelVersion"]);