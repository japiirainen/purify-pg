"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isoPersonName = void 0;
var newtype_ts_1 = require("newtype-ts");
// isoEUR: Iso<EUR, number>
var isoEUR = newtype_ts_1.iso();
// myamount: EUR
var myamount = isoEUR.wrap(0.85);
// n: number = 0.85
var n = isoEUR.unwrap(myamount);
exports.isoPersonName = newtype_ts_1.iso();
