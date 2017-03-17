"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Main = (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        console.log("hello!");
    };
    return Main;
}());
var person = new Person_1.PersonExtended();
person.showname();
//# sourceMappingURL=main.js.map