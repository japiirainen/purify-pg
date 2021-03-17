"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._favColors = exports._email = exports._name = void 0;
var monocle_ts_1 = require("monocle-ts");
exports._name = monocle_ts_1.Lens.fromProp()("name");
exports._email = monocle_ts_1.Lens.fromProp()("email");
exports._favColors = monocle_ts_1.Lens.fromProp()("favoriteColors");
