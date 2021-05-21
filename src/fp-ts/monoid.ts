import * as B from "fp-ts/lib/boolean"
import { flow, identity, Endomorphism } from "fp-ts/function"
import { Monoid, fold } from "fp-ts/Monoid"

export const MonoidSum: Monoid<number> = {
	concat: (x, y) => x + y,
	empty: 0,
}

export const MonoidProduct: Monoid<number> = {
	concat: (x, y) => x * y,
	empty: 1,
}

export const MonoidString: Monoid<string> = {
	concat: (x, y) => x + y,
	empty: "",
}

export const MonoidAll: Monoid<boolean> = {
	concat: (x, y) => x && y,
	empty: true,
}

export const MonoidAny: Monoid<boolean> = {
	concat: (x, y) => x || y,
	empty: false,
}

export type Endomorphish_<A> = (a: A) => A

export const getEndomorphismMonoid = <A>(): Monoid<Endomorphism<A>> => ({
	concat: flow,
	empty: identity,
})

console.log(fold(MonoidAll)([true, true, true]))
console.log(fold(MonoidAny)([true, false, false]))
console.log(fold(MonoidSum)([1, 2, 3]))
console.log(fold(MonoidString)(["foo", "bar", "baz"]))
