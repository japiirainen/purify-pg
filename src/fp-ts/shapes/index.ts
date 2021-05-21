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
