import { Lens, fromTraversable } from "monocle-ts"
import { array } from "fp-ts/Array"

export interface Person {
	readonly name: string
	readonly email: string
	readonly favoriteColors: Array<string>
	readonly favoriteBooks: Array<Book>
	readonly address: Address
}

export interface Book {
	readonly title: string
	readonly published: number
}

export interface Address {
	readonly streetName: string
	readonly streetNr: number
	readonly postalCode: number
}

// ? person lenses
export const _name = Lens.fromProp<Person>()("name")
export const _email = Lens.fromProp<Person>()("email")
export const _address = Lens.fromProp<Person>()("address")
export const _books = Lens.fromProp<Person>()("favoriteBooks")
export const _favoriteColors = Lens.fromProp<Person>()("favoriteColors")

// ? address lenses
export const _streenName = Lens.fromProp<Address>()("streetName")
export const _streetNr = Lens.fromProp<Address>()("streetNr")
export const _postalCode = Lens.fromProp<Address>()("postalCode")

// ? book lenses
export const _bookTitle = Lens.fromProp<Book>()("title")
export const _bookPublished = Lens.fromProp<Book>()("published")

// ? lens compositions
export const _pStreetName = _address.compose(_streenName)
export const _pStreetNr = _address.compose(_streetNr)
export const _pPostalCode = _address.compose(_postalCode)

// ? traversals
export const _booksTra = fromTraversable(array)<Book>()
export const _favoriteColorsTra = fromTraversable(array)<string>()
