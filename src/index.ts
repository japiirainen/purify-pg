import * as M from "./monocle"

const jeppe: M.Person = {
	email: "jeppe@gmail.com",
	favoriteColors: ["red"],
	name: "jeppe",
}

console.log(M._name.get(jeppe))

const f = M._email.modify(_ => "foobar")(jeppe)

console.log(f)
