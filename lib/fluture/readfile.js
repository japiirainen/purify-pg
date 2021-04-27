"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFileF = void 0;
var fs = require("fs/promises");
var path = require("path");
var F = require("fluture");
var pathToFile = path.resolve(__dirname, "foo.txt");
exports.readFileF = F.encaseP(fs.readFile)(pathToFile);
