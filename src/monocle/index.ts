import { Lens } from "monocle-ts"

export interface Person {
	readonly name: string
	readonly email: string
	readonly favoriteColors: Array<string>
}

export const _name = Lens.fromProp<Person>()("name")
export const _email = Lens.fromProp<Person>()("email")
export const _favColors = Lens.fromProp<Person>()("favoriteColors")
