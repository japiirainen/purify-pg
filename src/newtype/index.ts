import { Newtype, iso } from "newtype-ts"
import { array } from "fp-ts/array"
import { Address, Book } from "../monocle"

interface EUR extends Newtype<{ readonly EUR: unique symbol }, number> {}

// isoEUR: Iso<EUR, number>
const isoEUR = iso<EUR>()

// myamount: EUR
const myamount = isoEUR.wrap(0.85)

// n: number = 0.85
const n = isoEUR.unwrap(myamount)

declare function saveAmount(eur: EUR): void

interface PersonName extends Newtype<{ readonly PersonName: unique symbol }, string> {}
interface PersonEmail extends Newtype<{ readonly PersonEmail: unique symbol }, string> {}
interface PersonFavoriteBooks extends Newtype<{ readonly PersonFavoriteBooks: unique symbol }, Book> {}
interface PersonFavoriteColors
	extends Newtype<{ readonly PersonFavoriteColors: unique symbol }, typeof array> {}
interface PersonAddress extends Newtype<{ readonly PersonAddress: unique symbol }, Address> {}

export const isoPersonName = iso<PersonName>()
