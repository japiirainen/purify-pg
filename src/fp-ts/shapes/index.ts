import { pipe } from "fp-ts/function"
import { Monoid, fold } from "fp-ts/Monoid"

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * Models a singe point in the drawing
 */
export interface Point {
	readonly x: number
	readonly y: number
}

/**
 * A shape is a function that given a point
 *  returns `true` if the point belongs to the shape and `false` otherwise
 */
export type Shape = (point: Point) => boolean

// -------------------------------------------------------------------------------------
// primitives
// -------------------------------------------------------------------------------------

/**
 * Create a shape representing a circle
 */
export const disk =
	(center: Point, radius: number): Shape =>
	point =>
		distance(point, center) <= radius

/**
 * euclidean distance??
 */
const distance = (p1: Point, p2: Point) =>
	Math.sqrt(Math.pow(Math.abs(p1.x - p2.x), 2) + Math.pow(Math.abs(p1.y - p2.y), 2))

// pipe(disk({ x: 200, y: 200 }, 100), draw)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * We can define the first combinator which given a shape
 * returns its complimentary one (the negative one)
 */
export const outside =
	(s: Shape): Shape =>
	point =>
		!s(point)

// pipe(disk({ x: 200, y: 200 }, 100), outside, draw)

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * A monoid where `concat` represents the union of two `Shape`s
 */
export const MonoidUnion: Monoid<Shape> = {
	concat: (first, second) => point => first(point) && second(point),
	empty: () => true,
}
