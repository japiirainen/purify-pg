"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var M = require("./monocle");
var jeppe = {
    email: "jeppe@gmail.com",
    favoriteColors: ["red"],
    name: "jeppe",
};
console.log(M._name.get(jeppe));
var f = M._email.modify(function (_) { return "foobar"; })(jeppe);
console.log(f);
