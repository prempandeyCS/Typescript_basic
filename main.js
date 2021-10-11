"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'hellooooooo world';
console.log(message);
var isBegineer = true;
var total = 0;
var name = 'Vishwas';
var sentence = "my name is " + name + " I am a begineer in typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['prem', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable;
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
function fullName(person) {
    console.log((person.firstName + "  " + person.lastName));
}
var p = {
    firstName: "prem",
    lastName: "pandey"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('prem');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating work");
    };
    return Manager;
}(Employee));
var m1 = new Manager('om');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
