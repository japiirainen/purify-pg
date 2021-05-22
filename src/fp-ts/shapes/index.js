"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw = exports.mickeymouse = exports.ring = exports.MonoidUnion = exports.outside = exports.disk = void 0;
// -------------------------------------------------------------------------------------
// primitives
// -------------------------------------------------------------------------------------
/**
 * Create a shape representing a circle
 */
var disk = function (center, radius) {
    return function (point) {
        return distance(point, center) <= radius;
    };
};
exports.disk = disk;
/**
 * euclidean distance??
 */
var distance = function (p1, p2) {
    return Math.sqrt(Math.pow(Math.abs(p1.x - p2.x), 2) + Math.pow(Math.abs(p1.y - p2.y), 2));
};
// pipe(disk({ x: 200, y: 200 }, 100), draw)
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * We can define the first combinator which given a shape
 * returns its complimentary one (the negative one)
 */
var outside = function (s) {
    return function (point) {
        return !s(point);
    };
};
exports.outside = outside;
// pipe(disk({ x: 200, y: 200 }, 100), outside, draw)
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * A monoid where `concat` represents the union of two `Shape`s
 */
exports.MonoidUnion = {
    concat: function (first, second) { return function (point) { return first(point) || second(point); }; },
    empty: function () { return false; },
};
// pipe(
//     MonoidUnion.concat(
//         disk({x: 150, y: 200}, 100),
//         disk({x: 250, y: 200}, 100)
//     ),
//     draw
// )
/**
 * A monoid where `concat` represents the intersection of the two `Shape`s
 */
var MonoidIntersection = {
    concat: function (first, second) { return function (point) { return first(point) && second(point); }; },
    empty: function () { return true; },
};
// pipe(
//     MonoidIntersection.concat(
//         disk({x: 150, y: 200}, 100),
//         disk({x: 250, y: 200}, 100)
//     ),
//     draw
// )
/**
 * Using the combinator `outside` and `MonoidIntersection` we can
 * create a `Shape` representing a ring
 */
var ring = function (point, bigRadius, smallRadius) {
    return MonoidIntersection.concat(exports.disk(point, bigRadius), exports.outside(exports.disk(point, smallRadius)));
};
exports.ring = ring;
// pipe(ring({x: 200, y: 200}, 100, 50), draw)
exports.mickeymouse = [
    exports.disk({ x: 200, y: 200 }, 100),
    exports.disk({ x: 130, y: 130 }, 60),
    exports.disk({ x: 280, y: 280 }, 60),
];
// pipe(fold(MonoidUnion)(mickeymouse), draw)
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
function draw(shape) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var imagedata = ctx.createImageData(width, height);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var point = { x: x, y: y };
            if (shape(point)) {
                var pixelIndex = (point.y * width + point.x) * 4;
                imagedata.data[pixelIndex] = 0;
                imagedata.data[pixelIndex + 1] = 0;
                imagedata.data[pixelIndex + 2] = 0;
                imagedata.data[pixelIndex + 3] = 255;
            }
        }
    }
    ctx.putImageData(imagedata, 0, 0);
}
exports.draw = draw;
