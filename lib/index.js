"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var M = require("./monocle");
var jeppe = {
    email: "jeppe@gmail.com",
    favoriteColors: ["red"],
    name: "jeppe",
    address: {
        postalCode: 25200,
        streetName: "foobarStreet",
        streetNr: 69,
    },
};
var jeppeNewName = M._email.modify(function (_) { return "foobar"; })(jeppe);
var updatePersonStreetName = function (n) { return function (oldPerson) {
    return M._pStreetName.modify(function (_) { return n; })(oldPerson);
}; };
console.log(updatePersonStreetName("kakka")(jeppe));
