import * as M from "./monocle"

const Book1: M.Book = {
	published: 1969,
	title: "Book 1",
}
const Book2: M.Book = {
	published: 2969,
	title: "Book 2",
}
const jeppe: M.Person = {
	email: "jeppe@gmail.com",
	favoriteColors: ["red"],
	name: "jeppe",
	address: {
		postalCode: 25200,
		streetName: "foobarStreet",
		streetNr: 69,
	},
	favoriteBooks: [Book1, Book2],
}

const jeppeNewName = M._email.modify(_ => "foobar")(jeppe)

const updatePersonStreetName: (newName: string) => (oldP: M.Person) => M.Person = n => oldPerson =>
	M._pStreetName.modify(_ => n)(oldPerson)
