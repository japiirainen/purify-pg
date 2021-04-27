"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._favoriteColorsTra = exports._booksTra = exports._pPostalCode = exports._pStreetNr = exports._pStreetName = exports._bookPublished = exports._bookTitle = exports._postalCode = exports._streetNr = exports._streenName = exports._favoriteColors = exports._books = exports._address = exports._email = exports._name = void 0;
var monocle_ts_1 = require("monocle-ts");
var Array_1 = require("fp-ts/Array");
// ? person lenses
exports._name = monocle_ts_1.Lens.fromProp()("name");
exports._email = monocle_ts_1.Lens.fromProp()("email");
exports._address = monocle_ts_1.Lens.fromProp()("address");
exports._books = monocle_ts_1.Lens.fromProp()("favoriteBooks");
exports._favoriteColors = monocle_ts_1.Lens.fromProp()("favoriteColors");
// ? address lenses
exports._streenName = monocle_ts_1.Lens.fromProp()("streetName");
exports._streetNr = monocle_ts_1.Lens.fromProp()("streetNr");
exports._postalCode = monocle_ts_1.Lens.fromProp()("postalCode");
// ? book lenses
exports._bookTitle = monocle_ts_1.Lens.fromProp()("title");
exports._bookPublished = monocle_ts_1.Lens.fromProp()("published");
// ? lens compositions
exports._pStreetName = exports._address.compose(exports._streenName);
exports._pStreetNr = exports._address.compose(exports._streetNr);
exports._pPostalCode = exports._address.compose(exports._postalCode);
// ? traversals
exports._booksTra = monocle_ts_1.fromTraversable(Array_1.array)();
exports._favoriteColorsTra = monocle_ts_1.fromTraversable(Array_1.array)();
