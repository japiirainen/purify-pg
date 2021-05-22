"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndomorphismMonoid = exports.MonoidAny = exports.MonoidAll = exports.MonoidString = exports.MonoidProduct = exports.MonoidSum = void 0;
var function_1 = require("fp-ts/function");
var Monoid_1 = require("fp-ts/Monoid");
exports.MonoidSum = {
    concat: function (x, y) { return x + y; },
    empty: 0,
};
exports.MonoidProduct = {
    concat: function (x, y) { return x * y; },
    empty: 1,
};
exports.MonoidString = {
    concat: function (x, y) { return x + y; },
    empty: "",
};
exports.MonoidAll = {
    concat: function (x, y) { return x && y; },
    empty: true,
};
exports.MonoidAny = {
    concat: function (x, y) { return x || y; },
    empty: false,
};
var getEndomorphismMonoid = function () { return ({
    concat: function_1.flow,
    empty: function_1.identity,
}); };
exports.getEndomorphismMonoid = getEndomorphismMonoid;
console.log(Monoid_1.fold(exports.MonoidAll)([true, true, true]));
console.log(Monoid_1.fold(exports.MonoidAny)([true, false, false]));
console.log(Monoid_1.fold(exports.MonoidSum)([1, 2, 3]));
console.log(Monoid_1.fold(exports.MonoidString)(["foo", "bar", "baz"]));
