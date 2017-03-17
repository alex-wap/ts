"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person() {
    }
    Person.prototype.showname = function () {
        console.log(this.name + ' ' + this.lastname);
    };
    return Person;
}());
var PersonExtended = (function (_super) {
    __extends(PersonExtended, _super);
    // private name: string;
    // private lastname: string;
    // private age: number;
    function PersonExtended() {
        var _this = _super.call(this) || this;
        _this.name = "hector";
        _this.lastname = "JJJJ";
        _this.age = 29;
        return _this;
    }
    PersonExtended.prototype.showname = function () {
        console.log(this.name + ' ' + this.lastname);
        var numbers = [1, 2, 3, 4];
        var newarray = numbers.map(function (n) { return n + 1; });
        // in goes thru keys... but it's an array. 
        // for in prints keys
        for (var n in numbers) {
            console.log("in " + n);
        }
        // of iterates thru, not native to js, BUT PERFORMANT
        // for of prints the values
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var n = numbers_1[_i];
            console.log("of " + n);
        }
    };
    return PersonExtended;
}(Person));
exports.PersonExtended = PersonExtended;
//# sourceMappingURL=Person.js.map