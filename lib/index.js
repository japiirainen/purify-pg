"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var F = require("fluture");
var readfile_1 = require("./fluture/readfile");
F.fork(console.log)(console.log)(readfile_1.readFileF);
